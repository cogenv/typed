interface More {
   [key: string]: any;
}

const ToBoolean = (value: any): Boolean => {
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

const ToNumber = (value: any): Number => {
   if (!isNaN(parseFloat(value))) {
      value = parseFloat(value);
   }
   return value;
};

export { ToBoolean, ToNumber, More };
