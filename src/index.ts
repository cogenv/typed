export type Mode = 'auto' | 'customized';

interface TypeCogenvOptions {
   mode?: Mode;
}

const defaultOptions: TypeCogenvOptions = {
   mode: 'auto',
};

export const TypeCogenv = (data: More, options: TypeCogenvOptions = {}) => {
   options = {
      ...defaultOptions,
      ...options,
   };
   return data;
};
