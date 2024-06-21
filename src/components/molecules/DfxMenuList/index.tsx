import { MenuListComp } from './variants/Basic';
import { MenuListOne } from './variants/MenuListOne';

export interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iDfxMenuList {
  menuArrays: iDfxMenu[];
  library: 'react' | 'next';
  type: any;
  variant: 'basic' | 'one';
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
}

export const DfxMenuList = ({
  menuArrays,
  library,
  type,
  variant,
  className,
  showIcon,
  showText
}: iDfxMenuList) => {
  if (variant === 'basic') {
    return (
      <MenuListComp showIcon={showIcon} showText={showText} menuArrays={menuArrays} library={library} type={type} className={className} />
    );
  }
  if (variant === 'one') {
    return (
      <MenuListOne menuArrays={menuArrays} library={library} type={type} className={className} />
    );
  }
  return null
};
