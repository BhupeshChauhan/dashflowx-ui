import { Button } from '@/components/atoms/button';
import { Alert, AlertTitle, AlertDescription } from '../../../atoms/alert';
import { X } from 'lucide-react';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const AlertComp = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: iDfxAlert) => {
  return (
    <Alert className={className}>
      <div className='flex items-center gap-3'>
        {prefix}
        <div>
            <AlertTitle className={titleClassName}>{title}</AlertTitle>
            <AlertDescription className={descriptionClassName}>
              {description}
            </AlertDescription>
        </div>
        <Button variant='ghost' className='p-0 m-0 h-6'><X className='h-6 w-6' /></Button>
      </div>
    </Alert>
  );
};
