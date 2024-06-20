import { StatsComp } from './variants/Basic';
import { StatsOne } from './variants/StatsOne';

interface iDfxStatsItem {
  content: string | JSX.Element;
}

interface iDfxStats {
  items: Array<iDfxStatsItem>;
  variant: 'basic' | 'one';
  className?: string;
  itemContainerClassName?: string;
  itemClassName?: string;
}

export const DfxStats = ({
  items,
  variant,
  className,
  itemContainerClassName,
  itemClassName,
}: iDfxStats) => {
  if (variant === 'basic') {
    return (
      <StatsComp
        items={items}
        className={className}
        itemContainerClassName={itemContainerClassName}
        itemClassName={itemClassName}
      />
    );
  }
  if (variant === 'one') {
    return (
      <StatsOne
        items={items}
        className={className}
        itemContainerClassName={itemContainerClassName}
        itemClassName={itemClassName}
      />
    );
  }
  return null;
};
