import { cn } from '@/lib/utils';
import { CardComp, CardContent, Grid, TypographyComp } from '@dashflowx/core';
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
            <TypographyComp
              as="h2"
              className={cn('text-2xl font-bold ', titleClassName)}
            >
              {title}
            </TypographyComp>
          )}
          {description && description}
        </div>
      )}
      <Grid className={gridClassName}>
        {cardsArray.map((card) => (
          <div className="h-auto max-w-full rounded-lg" key={card.id}>
            <CardComp className={cn('w-full', cardClassName)}>
              <CardContent>{card.element}</CardContent>
            </CardComp>
          </div>
        ))}
      </Grid>
    </div>
  );
};
