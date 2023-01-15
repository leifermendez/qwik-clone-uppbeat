import { component$ } from "@builder.io/qwik";
import { PlayerWave } from "../player-wave/player-wave";

export const PlayListItem = component$(() => {
  return (
    <div class={"group"}>
      <div
        class={
          "group-hover:bg-white transition-all ease-out duration-75 flex cursor-pointer rounded-tl-full rounded-bl-full p-2 items-center"
        }
      >
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
            <div
              class={
                "text-pink-600 text-xs font-medium transition-opacity ease-in opacity-0 group-hover:opacity-100"
              }>
              More Like this
            </div>
          </div>
        </div>
        <div class={" flex content-center items-center gap-2 w-1/4"}>
          {[1, 1, 1, 1, 1].map((i) => {
            return (
              <>
                <span
                  class={
                    "group-hover:bg-gray-100  bg-white rounded-2xl text-xs px-2 py-1 h-fit"
                  }
                >
                  Chill
                </span>
              </>
            );
          })}
        </div>
        <div class={" flex gap-6 w-1/3"}>
          <div id="player1" class={"flex justify-center items-center w-full"}>
            <PlayerWave />
          </div>
        </div>
      </div>
    </div>
  );
});
