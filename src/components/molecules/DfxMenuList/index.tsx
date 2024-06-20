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
}

export const DfxMenuList = ({
  menuArrays,
  library,
  type,
  variant,
  className,
}: iDfxMenuList) => {
  if (variant === 'basic') {
    return (
      <MenuListComp menuArrays={menuArrays} library={library} type={type} className={className} />
    );
  }
  if (variant === 'one') {
    return (
      <MenuListOne menuArrays={menuArrays} library={library} type={type} className={className} />
    );
  }
  return null
};
