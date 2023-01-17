import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import { isUserAuthenticated } from "~/auth/auth";
import Header from "~/components/header/header";
import { Logo } from "~/components/logo/logo";
import { Sidebar } from "~/components/sidebar/sidebar";


export const onGet: RequestHandler = async ({  cookie }) => {
  const user = await isUserAuthenticated(cookie)
  console.log('------',user)
  if (user) {
    // throw redirect(302, '/qwikcity-test/dashboard/');
  }
};

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

