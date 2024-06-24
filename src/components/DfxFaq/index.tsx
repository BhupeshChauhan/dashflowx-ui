import { Basic } from './variants/Basic';

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
  accordionvariant: 'basic' | 'one';
  titleClassName?: string;
  descriptionClassName?: string;
  accordionContainerClassName?: string;
  textContainerClassName?: string;
  variant?: string;
}

export const DfxFaq = ({
  textContainerClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  accordionItems,
  accordionContainerClassName,
  className,
  accordionvariant,
  variant
}: iDfxFaq) => {
  if (variant === 'basic') {
    return (
      <Basic
        textContainerClassName={textContainerClassName}
        title={title}
        className={className}
        accordionItems={accordionItems}
        titleClassName={titleClassName}
        description={description}
        descriptionClassName={descriptionClassName}
        accordionContainerClassName={accordionContainerClassName}
        accordionvariant={accordionvariant}
      />
    );
  }
  return null;
};
