import {
  DollarOutlined,
  LoginOutlined,
  PhoneOutlined,
  RocketOutlined,
  HomeOutlined,
  InsertRowRightOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  ContainerOutlined,
  FlagOutlined,
  LayoutOutlined,
  AreaChartOutlined,
  PercentageOutlined,
  UsergroupDeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons"

import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined"
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import LinearScaleSharpIcon from "@mui/icons-material/LinearScaleSharp"
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined"
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined"

// type
import { NavItemType } from "@/types/menu"

const icons = {
  DollarOutlined,
  LoginOutlined,
  PhoneOutlined,
  RocketOutlined,
  HomeOutlined,
  InsertRowRightOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  ContainerOutlined,
  FlagOutlined,
  LayoutOutlined,
  AreaChartOutlined,
  PercentageOutlined,
  UsergroupDeleteOutlined,
  InfoCircleOutlined,
  //
  InsertChartOutlinedIcon,
  DirectionsCarFilledOutlinedIcon,
  GroupOutlinedIcon,
  LinearScaleSharpIcon,
  GradingOutlinedIcon,
  PaymentOutlinedIcon,
  AccountBalanceWalletOutlinedIcon,
  InventoryOutlinedIcon,
}

const main: NavItemType = {
  id: "group-pages",
  title: "Main",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: icons.HomeOutlined,
      target: false,
    },
    {
      id: "deals",
      title: "deals",
      type: "item",
      url: "/deals",
      icon: icons.GroupOutlinedIcon,
      target: false,
    },
    {
      id: "contacts",
      title: "Contacts",
      type: "item",
      url: "/contacts",
      icon: icons.InsertChartOutlinedIcon,
      target: false,
    },

    {
      id: "about",
      title: "About",
      type: "item",
      url: "/about",
      icon: icons.InfoCircleOutlined,
      target: false,
    },
  ],
}

export default main
