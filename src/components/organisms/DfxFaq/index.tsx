import { Basic } from './Varients/Basic';

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
  varient?: string;
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
  accordionVarient,
  varient
}: iDfxFaq) => {
  if (varient === 'basic') {
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
        accordionVarient={accordionVarient}
      />
    );
  }
  return null;
};
