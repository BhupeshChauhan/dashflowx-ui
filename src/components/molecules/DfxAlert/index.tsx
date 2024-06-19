import { Alert, AlertTitle, AlertDescription } from '../../atoms/alert';
import { AlertComp } from './Varients/Basic';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  varient: 'basic';
}

const DfxAlert = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  varient,
}: iDfxAlert) => {
  if (varient === 'basic')
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
