import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  QuestionCircleOutlined,
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface ProfileTabProps {
  handleLogout: () => void;
  handleClose: (event: MouseEvent | TouchEvent) => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({
  handleLogout,
  handleClose,
}) => {
  const navigate = useNavigate();

  const navigateAndClose = (e: any, link: string) => {
    navigate(link);
    handleClose(e);
  };

  const renderListItem = ({
    index,
    icon,
    text,
    onClick,
    link,
  }: {
    index: number;
    icon: React.ReactElement;
    text: string;
    onClick?: () => void;
    link?: string;
  }) => (
    <ListItemButton
      key={index}
      onClick={(e) =>
        onClick ? onClick() : link ? navigateAndClose(e, link) : ""
      }
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );

  const listItems = [
    {
      index: 0,
      icon: <UserOutlined />,
      text: "Information",
      link: "",
    },
    {
      index: 1,
      icon: <QuestionCircleOutlined />,
      text: "Help",
      link: "",
    },
    {
      index: 2,
      icon: <SettingOutlined />,
      text: "settings",
      link: "",
    },
    {
      index: 3,
      icon: <LogoutOutlined />,
      text: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <List
      component="nav"
      sx={{ p: 0, "& .MuiListItemIcon-root": { minWidth: 32 } }}
    >
      {listItems.map((item) =>
        renderListItem({
          index: item.index,
          icon: item.icon,
          text: item.text,
          onClick: item?.onClick,
          link: item.link,
        })
      )}
    </List>
  );
};

export default ProfileTab;
