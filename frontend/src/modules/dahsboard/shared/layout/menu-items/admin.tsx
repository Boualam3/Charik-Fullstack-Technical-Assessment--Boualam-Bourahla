// assets
import { SettingOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

// type
import { NavItemType } from "@/types/menu";

// icons
const icons = {
  SettingOutlined,
  QuestionCircleOutlined,
  HelpOutlineOutlinedIcon
};


const admin: NavItemType = {
  id: "group-settings",
  title: "Admin",
  type: "group",
  children: [
    {
      id: "settings",
      title: "Settings",
      type: "collapse",
      url: "",
      icon: icons.SettingOutlined,
      target: false,
      hideChildren: true,
      children: [
        {
          id: "home-settings",
          title: "Profile",
          type: "item",
          url: "",
          target: false,
          search: "settings",
          disabledInNavigation: true,
        },
        {
          id: "general-settings",
          title: "General",
          type: "item",
          url: "",
          target: false,
          search: "settings",
          disabledInNavigation: true,
        },
      ],
    },

    {
      id: "help",
      title: "Help & support",
      type: "item",
      url: "",
      icon: icons.QuestionCircleOutlined,
      target: false,
      hideChildren: true,
      
    },
    {
      id: "legal",
      title: "Legal & Agreement",
      type: "item",
      url: "",
      icon: icons.QuestionCircleOutlined,
      target: false,
      hideChildren: true,
    },
  ],
};

export default admin;
