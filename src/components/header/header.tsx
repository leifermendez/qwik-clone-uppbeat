import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Avatar } from "../avatar/avatar";
import { Button } from "../button/button";
import styles from "./header.css?inline";
import { InputSrc } from "./input-src";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class={"h-[76px] p-5 pt-4"}>
      <div class={"  w-full flex"}>
        <InputSrc />
      </div>
      <div class={"flex gap-2"}>
        <div class={"flex gap-2"}>
          <Button label="Pricing" color="default" />
          <Button label="Go Premiun" icon="uil-star" color="primary" />
        </div>
        <div class={"flex gap-2"}>
          <Link href={'/auth/login'}><Avatar src={'https://avatars.githubusercontent.com/u/15802366?v=4'} /></Link>
        </div>
      </div>
    </header>
  );
});
