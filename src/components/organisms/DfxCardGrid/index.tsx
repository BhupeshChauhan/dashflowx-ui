import { Card } from '@/components/atoms/card';
import { Grid } from '@/components/atoms/grid';
import { Typography } from '@/components/atoms/typography';
import { cn } from '@/lib/utils';

interface iCardsArray {
  id: number;
  element: JSX.Element;
}

interface iGridProps {
  title?: string;
  description?: JSX.Element;
  cardsArray: Array<iCardsArray>;
  titleClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  className?: string;
}

export const DfxCardGrid = ({
  cardsArray,
  className,
  title,
  description,
  titleClassName,
  gridClassName,
  cardClassName,
}: iGridProps) => {
  return (
    <div className={className}>
      {(title || description) && (
        <div className="flex justify-center flex-col mb-2">
          {title && (
            <Typography
              as="h2"
              className={cn('text-2xl font-bold ', titleClassName)}
            >
              {title}
            </Typography>
          )}
          {description && description}
        </div>
      )}
      <Grid className={gridClassName}>
        {cardsArray.map((card) => (
          <div className="h-auto max-w-full rounded-lg" key={card.id}>
            <Card className={cardClassName}>{card.element}</Card>
          </div>
        ))}
      </Grid>
    </div>
  );
};
