export type Inputs<T> = {
  name: keyof T;
  placeholder: string;
  inputType?: "password" | "email";
};
