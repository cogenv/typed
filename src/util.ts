export interface More {
   [key: string]: any;
}

export const IsNumber = (value: any): Boolean => {
   if (typeof value === 'number') {
      return value - value === 0;
   }
   if (typeof value === 'string' && value.trim() !== '') {
      return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
   }
   return false;
};

export const IsObject = (value: any): Boolean => {
   var type = typeof value;
   return value !== null && (type === 'object' || type === 'function');
};

export const StringToObject = (source: string): More => {
   var data = source.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
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
      data = IsObject(data);
      if (data) {
         source = StringToObject(source);
      }
   } catch {}
   return source;
};
