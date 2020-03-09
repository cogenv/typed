import { More, ToBoolean, ToNumber, ToObject } from './util';
export type Mode = 'auto' | 'customized';

declare global {
   var cogenv: NodeJS.Process;
}

interface TypeCogenvOptions {
   mode?: Mode;
}

const defaultOptions: TypeCogenvOptions = {
   mode: 'auto',
};

export const parseTyped = (
   key: string,
   source: string,
   mode: Mode = defaultOptions.mode,
): [string, any] => {
   const arrKey = key.split('@');
   const type = arrKey[1];
   const k = arrKey[0];
   let value: any = source;
   if (type) {
      switch (type) {
         case 'string':
            value = '' + source;
            break;
         case 'boolean':
            value = ToBoolean(source);
            break;
         case 'number':
            value = ToNumber(source);
            break;
         case 'object':
         case 'array':
            value = ToObject(source);
            break;
      }
   } else if (mode == 'auto') {
      value = ToBoolean(source);
      value = ToNumber(value);
      value = ToObject(value);
   }

   return [k, value];
};

export const CogenvType = (data: More, options: TypeCogenvOptions = {}) => {
   options = {
      ...defaultOptions,
      ...options,
   };

   let payload: More = {};

   if (data.parsed) {
      data = data.parsed;
   }

   for (const [k, v] of Object.entries(data)) {
      let [key, value] = parseTyped(k, v, options.mode);
      payload[key] = value;
      cogenv.env[key] = value;
   }

   return payload;
};

export default CogenvType;

module.exports = CogenvType;
