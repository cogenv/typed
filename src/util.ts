export interface More {
   [key: string]: any;
}
export const StringToObject = (source: string): More => {
   var data = source.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
   data = data.replace(/\'/gi, '"');
   return JSON.parse(data);
};

export const ToBoolean = (value: any): Boolean => {
   switch (value.toLowerCase().trim()) {
      case 'true':
      case '0':
      case 'yes':
         value = true;
         break;
      case 'false':
      case '0':
      case 'no':
         value = false;
         break;
   }

   return value;
};

export const ToNumber = (value: any): Number => {
   if (!isNaN(parseFloat(value))) {
      value = parseFloat(value);
   }
   return value;
};

export const ToObject = (source: any): More => {
   try {
      let data = StringToObject(source);
      if (data) {
         source = StringToObject(source);
      }
   } catch {}
   return source;
};
