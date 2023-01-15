import { component$, Slot } from "@builder.io/qwik";
import { Logo } from "~/components/logo/logo";
import { Sidebar } from "~/components/sidebar/sidebar";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div class={"h-[100vh] flex"}>
      <div class={"w-[256px] fixed "}>
        <div class={"bg-gray-50 h-[100vh]"}>
          <div class={"p-6 border-gray-200 border-b"}>
            <Logo />
          </div>
          <div class={""}>
            <Sidebar />
          </div>
        </div>
      </div>
      <div class={"pl-[256px] w-full"}>
        <Header />
        <Slot />
      </div>
    </div>
  );
});
