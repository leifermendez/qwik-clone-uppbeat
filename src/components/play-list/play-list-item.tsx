import {
  component$,
  NoSerialize,
  useStore,
} from "@builder.io/qwik";
import { PlayerControl } from "../player-wave/player-control";
import { PlayerWave } from "../player-wave/player-wave";
import { v4 as uuid } from "uuid";

export interface PlayListPropsWave {
  wave?: NoSerialize<WaveSurfer>;
  play?:boolean,
  src:string,
  name:string,
  artist:string,
  cover:string,
  tags:string[],
}



export const PlayListItem = component$((props:PlayListPropsWave) => {

  const state = useStore<PlayListPropsWave>({
    ...props,
    wave: undefined,
    play: false,
  });

  const id = `wave_${uuid()}`;
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
              class={"rounded-full h-[60px] w-[60px] object-cover"}
              src={props.cover}
              alt=""
            />
          </div>
          <div class={"text-sm flex flex-col justify-center"}>
            <div class={"font-semibold"}>{props.name}</div>
            <div>{props.artist}</div>
            <div
              class={
                "text-pink-600 text-xs font-medium transition-opacity ease-in opacity-0 group-hover:opacity-100"
              }
            >
              More Like this
            </div>
          </div>
        </div>
        <div class={" flex content-center items-center gap-2 w-1/4"}>
          {[1, 1, 1, 1, 1].map(() => {
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
        <div class={" flex gap-6 w-1/2"}>
          <div class={"flex justify-center items-center w-full"}>
            <PlayerWave id={id} state={state} />
          </div>
        </div>
        <div class={" flex gap-6 w-1/8"}>
          <div class={"flex justify-center items-center w-full"}>
            <PlayerControl state={state} />
          </div>
        </div>
      </div>
    </div>
  );
});
