import { component$ } from "@builder.io/qwik";

export const PlayListItem = component$(() => {
  return (
    <div class={"flex "}>
      <div class={"flex gap-6 w-1/5"}>
        <div>
          <img
            class={"rounded-full h-[60px] w-[60px] object-contain"}
            src="https://uppbeat.imgix.net/images/AVBE_Avatar_450087395052639.jpg?auto=compress&w=120&h=120"
            alt=""
          />
        </div>
        <div class={"text-sm flex flex-col justify-center"}>
          <div class={"font-semibold"}>Night In Kyoto</div>
          <div>AVBE</div>
        </div>
      </div>
      <div class={" flex content-center items-center gap-2 w-1/4"}>
        <span class={"bg-white rounded-2xl text-xs px-2 py-1 h-fit"}>
          Chill
        </span>
        <span class={"bg-white rounded-2xl text-xs px-2 py-1 h-fit"}>Lofi</span>
      </div>
      <div class={"bg-blue-300 flex gap-6 w-1/3"}>
        <div class={'flex justify-center items-center w-full'}>
        wavesurfer.js
        </div>
      </div>
    </div>
  );
});
