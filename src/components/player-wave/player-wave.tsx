import WaveSurfer from "wavesurfer.js";
import { $, component$, QwikMouseEvent, useClientEffect$, useOn, useSignal } from "@builder.io/qwik";
import crypto from "crypto";

export const PlayerWave = component$(() => {
  const id = `wave_${crypto.randomBytes(5).toString('hex')}`;
//   const wave = useSignal(undefined)

  useClientEffect$(() => {

    const wavesurfer = WaveSurfer.create({
      container: `#${id}`,
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
    wavesurfer.load("https://wavesurfer-js.org/example/media/demo.wav");
    wavesurfer.on("ready", function () {});
  });

//   useOn('click',$((event) => {
//     const waveHtmlElement = (((event as unknown as PointerEvent).target as HTMLElement).parentNode) as HTMLElement
//     const h = waveHtmlElement as unknown as WaveSurfer
//   }))

  return (
    <div  class={"w-full h-[70px]"}>
      <div id={id}></div>
    </div>
  );

});
