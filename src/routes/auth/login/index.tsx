import { component$ } from "@builder.io/qwik";
import { action$, Form, Link } from "@builder.io/qwik-city";
import { signIn } from "~/auth/auth";
import { Button } from "~/components/button/button";
import { Input } from "~/components/input/input";

export const signinAction = action$(
  async (formData, { cookie, redirect, fail }) => {
    const result = await signIn(formData, cookie);

    if (result.status === "signed-in") {
      throw redirect(302, "/trending");
    }

    return fail(403, {
      message: "Invalid username or password",
    });
  }
);

export default component$(() => {
  const signIn = signinAction.use();
  return (
    <div
      class={"h-full w-full flex justify-center content-center items-center"}
    >
      <Form action={signIn}>
        <div class={"grid gap-3 p-3"}>
          {signIn.value?.message && (
            <div class={' p-2 rounded-lg text-xs text-pink-600'}>{signIn.value?.message}</div>
          )}
          <Input placeholder="Email..." name="username" />
          <Input placeholder="Pasword..." type="password" name="password" />
          <div class={"flex gap-2"}>
            <Button
              icon="uil-sign-out-alt"
              label="Iniciar sesión"
              color="primary"
            />
            <Link href="/">
              <Button label="Cancelar" color="default" />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
});
