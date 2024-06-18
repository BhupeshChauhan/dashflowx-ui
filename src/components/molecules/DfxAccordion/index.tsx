import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../atoms/accordion';
import { AccordionOne } from './Varients/AccordionOne';
import { AccordionComp } from './Varients/Basic';

interface iDfxAccordionItems {
  value: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  disabled?: boolean;
}
interface iDfxAccordion {
    type?: 'single' | 'multiple';
    collapsible?: boolean;
    className?: string;
    items: Array<iDfxAccordionItems>;
    itemClassName?: string;
    itemTriggerClassName?: string;
    itemContentClassName?: string;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    dir?: 'ltr' | 'rtl';
    orientation?: 'horizontal' | 'vertical';
    varient: 'basic' | 'one'
}

const DfxAccordion = ({
    type = 'single',
    collapsible = true,
    className,
    items,
    itemClassName,
    itemTriggerClassName,
    itemContentClassName,
    defaultValue,
    value,
    onValueChange,
    disabled,
    dir,
    orientation,
    varient
}: iDfxAccordion) => {

  if (varient === 'basic') {
    return (
      <AccordionComp
        type={type}
        collapsible={collapsible}
        className={className}
        items={items}
        itemClassName={itemClassName}
        itemTriggerClassName={itemTriggerClassName}
        itemContentClassName={itemContentClassName}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        dir={dir}
        orientation={orientation}
      />
    );
  }
  if(varient === 'one') {
    return (
      <AccordionOne
        type={type}
        collapsible={collapsible}
        className={className}
        items={items}
        itemClassName={itemClassName}
        itemTriggerClassName={itemTriggerClassName}
        itemContentClassName={itemContentClassName}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        dir={dir}
        orientation={orientation}
      />
    );
  }

  return null;
};

export {
  DfxAccordion,
  AccordionComp,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
};
