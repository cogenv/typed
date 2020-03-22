export interface More {
   [key: string]: any;
}

export const ToBoolean = (value: any): Boolean => {
   if (typeof value !== 'string') {
      return value;
   }
   switch (value.toLowerCase().trim()) {
      case 'true':
      case 'yes':
         value = true;
         break;
      case 'false':
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
