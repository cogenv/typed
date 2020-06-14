import { Merge } from 'merge-all-objects';
import { More, ToBoolean, ToNumber } from './util';
type Mode = 'auto' | 'customized';

interface CogenvTypeOptions {
   mode?: Mode;
   mergedTypes?: boolean;
   mergedObjects?: boolean;
}

const defaultOptions: CogenvTypeOptions = {
   mode: 'auto',
   mergedTypes: false,
   mergedObjects: false,
};

const ParseTyped = (
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
      }
   } else if (mode == 'auto') {
      value = ToBoolean(source);
      value = ToNumber(value);
   }

   return [k, value];
};

const ParseObject = (data: More, mode: Mode = defaultOptions.mode) => {
   let payload: More = {};
   for (const [k, v] of Object.entries<string>(data)) {
      const [key, value] = ParseTyped(k, v, mode);
      payload[key] = value;
   }
   return payload;
};

const CogenvType = (
   data: More,
   options: CogenvTypeOptions = {},
   register: Function,
) => {
   register({
      name: '@cogenv/typed',
      version: '1.0.4',
   });

   options = Merge(defaultOptions, options);

   let payload: More = {};

   const { mergedObjects, mergedTypes, mode } = options;

   let { _types, _objects, ..._data } = data;
   _data = ParseObject(_data || {}, mode);
   _types = ParseObject(_types || {}, mode);
   _objects = ParseObject(_objects || {}, mode);

   // Pushing to payload object
   payload = {
      ..._data,
      _types,
      _objects,
   };

   if (mergedTypes) {
      payload = Merge(payload, _types);
   }
   if (mergedObjects) {
      payload = Merge(payload, _objects);
   }

   return payload;
};

export { CogenvType, ParseObject, ParseTyped, CogenvTypeOptions, Mode };

export default CogenvType;
