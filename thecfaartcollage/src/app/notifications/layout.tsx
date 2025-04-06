import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notifications | College of Fine Arts',
  description: 'Stay updated with the latest announcements, events, and important information from the College of Fine Arts.',
};

export default function NotificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 