import {
  $,
  component$,
  QwikMouseEvent,
  useStylesScoped$,
} from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export interface SideBarItemProps {
  name?: string;
  icon?: string;
  route?: string;
}

export const SidebarItem = component$(
  ({ name, icon, route }: SideBarItemProps) => {
    //opacity-70 font-medium ease-in duration-75 cursor-pointer flex gap-5 flex-wrap align-middle justify-items-center
    useStylesScoped$(SideBarItemStyle);
    const navigation = useNavigate();

    const moveToPage = $(() => {
      if (route) navigation.path = route;
    });

    return (
      <div onClick$={moveToPage} class={"qwik-sidebar-item-component "}>
        <span>
          <i class={"uil " + icon}></i>
        </span>
        <span class={"text-sm"}>
          <>{name}</>
        </span>
      </div>
    );
  }
);

export const SideBarItemStyle = `
        div:hover{
            opacity:1;
            transform: translateX(20px);
        }
    `;
