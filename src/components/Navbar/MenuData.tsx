import { AiOutlineMenu, BiStore, IoBagHandle } from "react-icons/all";

export const MenuData = [
  {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    path: "/home2",
    icon: (value: any) => <AiOutlineMenu className={value} />,
  },

  {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    path: "/",
    icon: (value: any) => <BiStore className={value} />,
  },

  {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    path: "/bag",
    icon: (value: any) => <IoBagHandle className={value} />,
  },
];
