import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/atoms/tabs';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const DfxTabs = ({ tabsArray, buttonClassName, defaultActive }: any) => {
  const [activeIndex, setActiveIndex] = useState(
    defaultActive ? defaultActive : 0
  );

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  if (tabsArray.length === 0) {
    return null;
  }
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex items-start justify-start">
        {tabsArray.map((tab: any) => (
          <TabsTrigger
            value="account"
            key={tab.id}
            className={cn(
              'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
              activeIndex === tab.id ? 'text-primary-light' : 'text-gray-500',
              buttonClassName
            )}
            onClick={() => handleClick(tab.id)}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="account" className='w-full mt-5'>
        {tabsArray[activeIndex - 1]?.content}
      </TabsContent>
    </Tabs>
  );
};
