import WaveSurfer from "wavesurfer.js";
import {
  component$,
  useClientEffect$,
  noSerialize,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { PlayListPropsWave } from "../play-list/play-list-item";
import { useLocation } from "@builder.io/qwik-city";


export const PlayerWave = component$((props:{id:string, state:PlayListPropsWave}) => {
  const loading = useSignal(true)
  const location = useLocation()
  useTask$(({track}) => {
    track(() => location.pathname)
    props.state.wave?.destroy()
  })

  useClientEffect$(() => {
    const waveIn = WaveSurfer.create({
      container: `#${props.id}`,
      waveColor: "#BBBBBB",
      progressColor: "rgb(219 39 119)",
      height: 70,
      cursorWidth: 1,
      cursorColor: "transparent",
      barWidth: 2,
      normalize: true,
      responsive: true,
      fillParent: true,
    });
    props.state.wave = noSerialize(waveIn);

    waveIn.load(props.state.src);
    waveIn.on("ready", function () {
      loading.value = false
    });
    waveIn.on("play", function () {
      props.state.play = true
    });
    waveIn.on("pause", function () {
      props.state.play = false
    });

    return () => {
   
    }
  });

  return (
    <div onClick$={() => props.state.wave?.play()} class={"w-full h-[70px]"}>
      <div id={props.id}></div> 
    </div>
  );
});
