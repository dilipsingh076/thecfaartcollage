import { Notice } from '../types/api';

export interface Notification {
  title: string;
  content: string;
  date: string;
  link?: string;
}

/**
 * Converts API notices to a standardized notification format
 * @param notices Array of notices from the API
 * @returns Array of notifications in a standardized format
 */
export const convertNoticesToNotifications = (notices: Notice[]): Notification[] => {
  return notices.map(notice => ({
    title: notice.title,
    content: notice.short_description,
    date: notice.date,
    link: notice.link
  }));
}; 