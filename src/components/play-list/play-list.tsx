import {
  component$,
  createContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { PlayFilter } from "../play-filter/play-filter";
import { PlayFilterOptions } from "../play-filter/play-filter-options";
import { PlayListItem } from "./play-list-item";

export const MOCK_DATA = [
  {
    src:'https://mp3musica.s3.amazonaws.com/SnapSave.io+-+SHAKIRA+__+BZRP+Music+Sessions+%2353+(64+kbps).mp3',
    name:'SHAKIRA BZRP #53',
    artist:'Shakira',
    cover:'https://e.snmc.io/i/1200/s/d4213f07464af11db57e9a3c99338c2a/5173107',
    tags:['beef']
  },
  {
    src:'https://mp3musica.s3.amazonaws.com/SnapSave.io+-+QUEVEDO+__+BZRP+Music+Sessions+%2352+(64+kbps).mp3',
    name:'Quevedo',
    artist:'Shakira',
    cover:'https://images.ecestaticos.com/Tnq0dMEE2Gtbh_HXjRhg_SJ9DmQ=/0x0:960x640/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F7bb%2F222%2Fa6a%2F7bb222a6a0e7f6f039fc6457352a800e.jpg',
    tags:['beef']
  }
]

export interface PlayListContextProp {
  openFilter: boolean;
  options: { label: string; value: string }[];
}

export const PlayListContext =
  createContext<PlayListContextProp>("play-list-context");

export const PlayList = component$(() => {
  const state = useStore({
    openFilter: false,
  });
  

  useContextProvider(PlayListContext, state);

  return (
    <div
      class={"pl-14  min-h-[calc(100vh_-_206px_-_76px)] flex flex-col gap-2"}
    >
      <div class={"flex gap-5"}>
        <PlayFilter
          values={[
            { label: "Moderate", value: "Moderate" },
            { label: "Calm", value: "Moderate" },
            { label: "Energetic", value: "Moderate" },
            { label: "Internse", value: "Moderate" },
            { label: "Very Calm", value: "Moderate" },
          ]}
          label="Energy"
        />
        <PlayFilter values={[]} label="Vocals" />
        <PlayFilter values={[]} label="Duration" />
      </div>
      {state.openFilter ? (
        <div class={"flex pb-3"}>
          <PlayFilterOptions />
        </div>
      ) : null}
      <div class={" bg-gray-100 rounded-t-2xl "}>
        <div class={"p-6 py-4 border-b  border-gray-200"}>sss</div>
        <div class={"p-6 flex flex-col gap-2"}>
            {
                MOCK_DATA.map((i) => <> <PlayListItem {...i} /></>)
            }
          
        </div>
      </div>
    </div>
  );
});
