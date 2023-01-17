import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { isUserAuthenticated } from "~/auth/auth";
import { HeadInfo } from "~/components/head-info/head-info";

export default component$(() => {
  return (
    <div>
    <HeadInfo title="Keep creating, keep inspiring 👌" />
  </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
