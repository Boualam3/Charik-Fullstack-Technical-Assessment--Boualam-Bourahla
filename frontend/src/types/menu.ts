import { ReactNode } from 'react';

// material-ui
import { ChipProps } from '@mui/material';


// ==============================|| MENU TYPES  ||============================== //

export type NavItemType = {
  breadcrumbs?: boolean;
  caption?: ReactNode | string;
  children?: NavItemType[];
  chip?: ChipProps;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  disabled?: boolean;
  external?: boolean;
  icon?: any;
  id?: string;
  search?: string;
  target?: boolean;
  title?: ReactNode | string;
  description?: ReactNode | string;
  type?: string;
  url?: string | undefined;
  disabledInNavigation? : boolean;
  hideChildren? : boolean;
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type MenuProps = {
  openItem: string[];
  openComponent: string;
  drawerOpen: boolean;
  componentDrawerOpen: boolean;
};
