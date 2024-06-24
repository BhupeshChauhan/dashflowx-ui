import { cn } from '@/lib/utils';
import { Tabs } from '@dashflowx/core';

interface iTabsArrayProps {
  id: number;
  title: string;
  content: JSX.Element;
}

interface iDfxTabsLayoutProps {
  description?: JSX.Element;
  tabsArray: Array<iTabsArrayProps>;
  heading?: JSX.Element;
  caption?: JSX.Element;
  tabsClassName?: string;
  defaultActive: number;
  buttonClassName?: string;
  className?: string;
}

export const DfxTabsLayout = ({
  description,
  className,
  tabsArray,
  heading,
  caption,
  defaultActive,
  buttonClassName,
}: iDfxTabsLayoutProps) => {
  return (
    <div className={cn('py-8 px-4 text-center lg:py-16 lg:px-12', className)}>
      {caption && caption}
      {heading && heading}
      {description && description}
      <Tabs
        tabsArray={tabsArray}
        defaultActive={defaultActive}
        buttonClassName={buttonClassName}
      />
    </div>
  );
};
