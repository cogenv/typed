import { Merge } from 'merge-options-default';
import { Log, More, ToBoolean, ToNumber, ToObject } from './util';
export type Mode = 'auto' | 'customized';

export interface CogenvTypeOptions {
   mode?: Mode;
   mergedTypes?: boolean;
   mergedObjects?: boolean;
}

const defaultOptions: CogenvTypeOptions = {
   mode: 'auto',
   mergedTypes: true,
   mergedObjects: false,
};

export const ParseTyped = (
   key: string,
   source: string,
   mode: Mode = defaultOptions.mode,
): [string, any] => {
   const arrKey = key.split(':');
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

export const CogenvType = (data: More, options: CogenvTypeOptions = {}) => {
   options = Merge(defaultOptions, options);

   let payload: More = {};

   if (data.parsed) {
      data = data.parsed;
   }
   if (!data._types) {
      Log(
         'Activa la opcion de `matchLine` en `all` al instanciar la function "Config()" de `@cogenv/core` ',
      );
   }

   let { _types, ...r } = data;

   data = { ...r, ..._types };

   for (const [k, v] of Object.entries(data)) {
      let [key, value] = ParseTyped(k, v, options.mode);
      payload[key] = value;
   }

   return payload;
};
export default CogenvType;
