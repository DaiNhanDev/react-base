import React from 'react';
import {
  TableOutlined,
  UserOutlined,
  BlockOutlined,
  HomeOutlined
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.home',
    key: 'home',
    url: '/',
    icon: <HomeOutlined />,
  },
  {
    title: 'common.dataTables',
    key: 'user-management',
    url: '/urser',
    icon: <UserOutlined />,
  },
  {
    title: 'common.Users',
    key: 'dataTables',
    url: '/data-tables',
    icon: <TableOutlined />,
  },
  {
    title: 'common.ui',
    key: 'ui',
    icon: <BlockOutlined />,
    children: [
      {
        title: 'common.alert',
        key: 'alert',
        url: '/ui-components/alert',
      },
      {
        title: 'common.avatar',
        key: 'avatar',
        url: '/ui-components/avatar',
      },
      {
        title: 'common.autocomplete',
        key: 'auto-complete',
        url: '/ui-components/auto-complete',
      },
      {
        title: 'common.badge',
        key: 'badge',
        url: '/ui-components/badge',
      },
      {
        title: 'common.breadcrumbs',
        key: 'breadcrumbs',
        url: '/ui-components/breadcrumbs',
      },
      {
        title: 'common.button',
        key: 'button',
        url: '/ui-components/button',
      },
      {
        title: 'common.checkbox',
        key: 'checkbox',
        url: '/ui-components/checkbox',
      },
      {
        title: 'common.collapse',
        key: 'collapse',
        url: '/ui-components/collapse',
      },
      {
        title: 'common.dateTimePicker',
        key: 'dateTimePicker',
        url: '/ui-components/date-time-picker',
      },
      {
        title: 'common.dropdown',
        key: 'dropdown',
        url: '/ui-components/dropdown',
      },
      {
        title: 'common.input',
        key: 'input',
        url: '/ui-components/input',
      },
      {
        title: 'common.modal',
        key: 'modal',
        url: '/ui-components/modal',
      },
      {
        title: 'common.notification',
        key: 'notification',
        url: '/ui-components/notification',
      },
      {
        title: 'common.pagination',
        key: 'pagination',
        url: '/ui-components/pagination',
      },
      {
        title: 'common.popconfirm',
        key: 'popconfirm',
        url: '/ui-components/popconfirm',
      },
      {
        title: 'common.popover',
        key: 'popover',
        url: '/ui-components/popover',
      },
      {
        title: 'common.progress',
        key: 'progress',
        url: '/ui-components/progress',
      },
      {
        title: 'common.radio',
        key: 'radio',
        url: '/ui-components/radio',
      },
      {
        title: 'common.rate',
        key: 'rate',
        url: '/ui-components/rate',
      },
      {
        title: 'common.result',
        key: 'result',
        url: '/ui-components/result',
      },
      {
        title: 'common.select',
        key: 'select',
        url: '/ui-components/select',
      },
      {
        title: 'common.skeleton',
        key: 'skeleton',
        url: '/ui-components/skeleton',
      },
      {
        title: 'common.spinner',
        key: 'spinner',
        url: '/ui-components/spinner',
      },
      {
        title: 'common.steps',
        key: 'steps',
        url: '/ui-components/steps',
      },
      {
        title: 'common.switch',
        key: 'switch',
        url: '/ui-components/switch',
      },
      {
        title: 'common.tabs',
        key: 'tabs',
        url: '/ui-components/tabs',
      },
      {
        title: 'common.upload',
        key: 'upload',
        url: '/ui-components/upload',
      },
    ],
  },
];
