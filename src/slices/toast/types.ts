import { ReactNode } from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface NotificationParams {
  description: string | ReactNode;
  type: NotificationType;
  message: string;
}

export type NotificationState = {
  notification?: NotificationParams | null;
};
