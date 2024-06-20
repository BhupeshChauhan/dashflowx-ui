import { Alert, AlertTitle, AlertDescription } from '../../atoms/alert';
import { AlertComp } from './variants/Basic';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant: 'basic';
}

const DfxAlert = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  variant,
}: iDfxAlert) => {
  if (variant === 'basic')
    return (
      <AlertComp
        className={className}
        title={title}
        description={description}
        prefix={prefix}
        titleClassName={titleClassName}
        descriptionClassName={descriptionClassName}
      />
    );
};

export { DfxAlert, Alert, AlertTitle, AlertDescription };
