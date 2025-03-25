import React, { useEffect, useRef, useState } from "react";
import styles from "./Tab.module.css";
import clsx from "clsx";
import SolutionTab from "../Solutions/SolutionTab";
import { ArrowBigDown } from "lucide-react";
import SolutionsCard from "../Solutions/SolutionsCard";


interface classNameProps {
  container?: string;
  headerClass?: string;
  contentClass?: string;
  active?: string;
  tab?: string;
}

interface TabProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabs: string[] | any[]; // Array of tab names
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any; //Any for now
  className?: classNameProps;
}

export const Tabs: React.FC<TabProps> = ({ tabs, content, className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key);
  const [activeTabContent, setActiveTabContent] = useState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?.find((data: any) => data?.key === tabs[0]?.key)
  );
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActiveTabContent(content?.find((data: any) => data?.key === tabKey));
  };

  useEffect(() => {
    const handleScroll = () => {
      tabRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight - 250) {
            setActiveTab(tabs[index]?.key);
            setActiveTabContent(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              content?.find((data: any) => data?.key === tabs[index]?.key)
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs, content]);
  return (
    <div className={clsx(styles.tabContent, className?.container)}>
      <div className={clsx(styles.tabsHeader, className?.headerClass)}>
        <div className={clsx(styles.tabs, className?.headerClass)}>
          {tabs.map((tab, ind) => (
            <div
              key={tab?.key}
              className={clsx(
                `${styles.tab} ${className?.tab} ${
                  activeTab === tab?.key ? styles.active : ""
                } ${activeTab === tab?.key ? className?.active : ""}`
              )}
              onClick={() => handleTabClick(tab?.key)}
              ref={(el) => {
                tabRefs.current[ind] = el;
              }}
            >
              <span className={styles.tabText}>
                <SolutionTab
                  key={tab?.key}
                  icon={tab?.icon}
                  title={tab?.title}
                  heading={tab?.heading}
                  arrowIcon={<ArrowBigDown />}
                  isActive={activeTab === tab?.key}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={clsx(styles["tab-content"], className?.contentClass)}>
        {activeTabContent ? (
          <SolutionsCard
            title={activeTabContent?.title}
            subtitle={activeTabContent?.subtitle}
            description={activeTabContent?.description}
            features={activeTabContent?.features}
            images={activeTabContent?.image}
          />
        ) : (
          <div>No content available for this tab</div>
        )}
      </div>
    </div>
  );
};
