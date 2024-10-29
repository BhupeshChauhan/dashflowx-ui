import { HeroOne } from './variants/HeroOne';
import { HeroTwo } from './variants/HeroTwo';
import { HeroThree } from './variants/HeroThree';
import { HeroFour } from './variants/HeroFour';
import { HeroFive } from './variants/HeroFive';
import { HeroSix } from './variants/HeroSix';
import { HeroComp } from './variants/Basic';
import HeroSeven from './variants/HeroSeven';

interface iDHeroOneProps {
  heroImage?: JSX.Element;
  actions?: JSX.Element;
  heading: JSX.Element;
  caption: JSX.Element;
  variant: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'basic' | "seven";
  subElement?: JSX.Element;
  textSecClassName?: string;
  className?: string;
}

export const DfxHero = ({
  heroImage,
  className,
  actions,
  heading,
  caption,
  variant,
  subElement,
  textSecClassName,
}: iDHeroOneProps) => {
  if (variant === 'basic') {
    return (
      <HeroComp
        heroImage={heroImage}
        className={className}
        actions={actions}
        heading={heading}
        caption={caption}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'one') {
    return (
      <HeroOne
        heroImage={heroImage}
        className={className}
        actions={actions}
        heading={heading}
        caption={caption}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'two') {
    return (
      <HeroTwo
        heroImage={heroImage}
        className={className}
        actions={actions}
        heading={heading}
        caption={caption}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'three') {
    return (
      <HeroThree
        actions={actions}
        heading={heading}
        caption={caption}
        className={className}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'four') {
    return (
      <HeroFour
        actions={actions}
        heading={heading}
        caption={caption}
        className={className}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'five') {
    return (
      <HeroFive
        actions={actions}
        heading={heading}
        caption={caption}
        className={className}
        subElement={subElement}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'six') {
    return (
      <HeroSix
        actions={actions}
        heading={heading}
        caption={caption}
        className={className}
        subElement={subElement}
        textSecClassName={textSecClassName}
      />
    );
  }
  if (variant === 'seven') {
    return (
      <HeroSeven />
    );
  }
};
