import { DfxAccordion } from '@/components/molecules/DfxAccordion';
import { cn } from '@/lib/utils';

interface iAccordionCompItems {
  value: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  disabled?: boolean;
}

interface iDfxFaq {
  title: string;
  description: string;
  accordionItems: Array<iAccordionCompItems>;
  className?: string;
  accordionVarient: 'basic' | 'one';
  titleClassName?: string;
  descriptionClassName?: string;
  accordionContainerClassName?: string;
  textContainerClassName?: string;
}

export const Basic = ({
  textContainerClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  accordionItems,
  accordionContainerClassName,
  className,
  accordionVarient,
}: iDfxFaq) => {
  return (
    <section className={cn('bg-white dark:bg-gray-900', className)}>
      <div className={cn('text-center', textContainerClassName)}>
        <h1
          className={cn(
            'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white',
            titleClassName
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            'mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400',
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
      <div className={cn('w-[60%] m-auto', accordionContainerClassName)}>
        <DfxAccordion items={accordionItems} varient={accordionVarient} />
      </div>
    </section>
  );
};
