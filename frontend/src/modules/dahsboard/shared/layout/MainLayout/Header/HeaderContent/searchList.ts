import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiTransportationOutlinedIcon from "@mui/icons-material/EmojiTransportationOutlined";
import { SettingOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';


const icons = {
  DirectionsCarFilledOutlinedIcon,
  GroupOutlinedIcon,
  EmojiTransportationOutlinedIcon,
  InsertChartOutlinedIcon,
  SettingOutlined,
  QuestionCircleOutlined,
  GradingOutlinedIcon,
  StorageOutlinedIcon,
  AnalyticsOutlinedIcon,
  PaymentOutlinedIcon,
  SettingsSuggestOutlinedIcon,
  PermIdentityOutlinedIcon,
  PeopleAltOutlinedIcon,
  AdminPanelSettingsOutlinedIcon,
  NotificationsActiveOutlinedIcon,
  PublicOutlinedIcon,
  EmailOutlinedIcon,
  LocalShippingOutlinedIcon,
  LanguageOutlinedIcon,
  CalculateOutlinedIcon,
  InventoryOutlinedIcon
};

export const searchList = [
  {
    title: "Main",
    pages: [
      {
        title: "home",
        url: "/",
        icon: icons.InsertChartOutlinedIcon,
      },

      {
        title: "missions",
        url: "/missions",
        icon: icons.GradingOutlinedIcon,
      },
      {
        title: "tips",
        url: "/missions/tips",
        icon: icons.GradingOutlinedIcon,
      },

      {
        title: "invitations",
        url: "/invitations",
        icon: icons.InventoryOutlinedIcon,
      },

      
      {
        title: "contract",
        url: "/contract",
        icon: icons.PaymentOutlinedIcon,
      },


    
    ],
  },

  {
    title: "Settings",
    pages: [
      {
        title: "settings",
        url: "/settings",
        icon: icons.SettingOutlined,
      },
      {
        title: "Help",
        url: "/help",
        icon: icons.QuestionCircleOutlined,
      },
      {
        title: "information",
        url: "/settings/driver-information",
        icon: icons.PermIdentityOutlinedIcon,
      },
    ],
  },
];
