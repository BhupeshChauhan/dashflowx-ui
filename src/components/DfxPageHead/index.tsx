import { cn } from '@/lib/utils';

interface iDfxPageHead {
  title: string | JSX.Element;
  description?: string | JSX.Element;
  actions?: JSX.Element;
  variant: 'basic';
  titleClassName?: string;
  descriptionClassName?: string;
  actionClassName?: string;
  className?: string; // for overriding default styles
  containerClassName?: string; // for overriding default styles
}

export function DfxPageHead({
  title,
  description,
  actions,
  className,
  containerClassName,
  titleClassName,
  descriptionClassName,
  actionClassName,
}: iDfxPageHead) {
  return (
    <div
      className={cn('lg:flex lg:items-center lg:justify-between', className)}
    >
      <div className={cn('min-w-0 flex-1', containerClassName)}>
        <h2
          className={cn(
            'text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight',
            titleClassName
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            'mt-3 text-lg text-gray-800 dark:text-gray-400',
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
      <div className={cn('mt-5 flex lg:ml-4 lg:mt-0', actionClassName)}>
        {actions}
      </div>
    </div>
  );
}
