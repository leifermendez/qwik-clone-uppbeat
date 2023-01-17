import { component$ } from "@builder.io/qwik";

export interface InputProps {
  placeholder?: string;
  name?:string;
  type?:string
}

export const Input = component$((props:InputProps) => {
  return (
    <div>
      <input class={'qwik-input-src'} type="text" {...props} />
    </div>
  );
});
