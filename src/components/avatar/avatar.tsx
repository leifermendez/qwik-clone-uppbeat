import { component$ } from "@builder.io/qwik";

export interface AvatarProps {
    src:string;
    alt?:string
}

export const Avatar = component$(({src, alt}:AvatarProps) => {
  return (
    <div class={'w-[40px] h-[40px]'}>
      <img class={'rounded-full cursor-pointer bg-slate-700 hover:contrast-50 object-cover border-gray-300 border-2 block'}
        src={src}
        alt={alt}
      />
    </div>
  );
});
