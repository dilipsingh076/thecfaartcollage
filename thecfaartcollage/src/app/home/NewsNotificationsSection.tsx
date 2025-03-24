'use client';

import { newsItems, notifications } from '@/app/constants/homeData';

const NewsNotificationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Latest News</h2>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <a
                    href={news.link}
                    className="text-[#FFD700] hover:text-[#FFC000] font-medium inline-flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Notifications</h2>
            <div className="space-y-6">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {notification.title}
                      </h3>
                      <p className="text-gray-600">{notification.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsNotificationsSection; 