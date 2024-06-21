import { DfxTabs } from '@/components/molecules/DfxTabs';
import { cn } from '@/lib/utils';

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

export const DfxTabsLayout = (
  (
    {
      description,
      className,
      tabsArray,
      heading,
      caption,
      tabsClassName,
      defaultActive,
      buttonClassName
    }:iDfxTabsLayoutProps
  ) => {
    return (
      <div
        className={cn("py-8 px-4 text-center lg:py-16 lg:px-12", className)}
      >
        {caption && caption}
        {heading && heading}
        {description && description}
        <DfxTabs
          tabsArray={tabsArray}
          className={tabsClassName}
          defaultActive={defaultActive}
          buttonClassName={buttonClassName}
        />
      </div>
    );
  }
);
