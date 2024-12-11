// project import
import { NavItemType } from "@/types/menu";
import main from "./main";
import admin from "./admin";


const menuItems: { items: NavItemType[]; settings?: NavItemType[] } = {
  items: [main],
  settings: [admin],
};

export default menuItems;
