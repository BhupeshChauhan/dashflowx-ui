import { useState } from 'react';
import NavbarComp from './variants/Basic';
import { NavbarOne } from './variants/NavbarOne';

interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iDfxNavBarProps {
  logo?: JSX.Element;
  menuArrays?: iDfxMenu[];
  actions?: JSX.Element;
  menuIcon?: JSX.Element;
  navClassName?: string;
  navItemClassName?: string;
  variant?: 'basic' | 'one';
  libraryType?: 'react' | 'next';
  style?: any;
  menuType?: string;
}

export const DfxNavBar: React.FC<iDfxNavBarProps> = ({
  menuArrays,
  actions,
  logo,
  menuIcon,
  navClassName,
  navItemClassName,
  variant,
  style,
  libraryType = 'react',
  menuType,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenutoggle = () => {
    setOpenMenu(!openMenu);
  };
  const hideMenuIcon = menuArrays && menuArrays?.length > 0 ? false : true;
  if (variant === 'basic') {
    return (
      <NavbarComp
        menuArrays={menuArrays}
        actions={actions}
        logo={logo}
        menuIcon={menuIcon}
        navClassName={navClassName}
        navItemClassName={navItemClassName}
        libraryType={libraryType}
        style={style}
        menuType={menuType}
        hideMenuIcon={hideMenuIcon}
        handleMenutoggle={handleMenutoggle}
        openMenu={openMenu}
      />
    );
  }
  if (variant === 'one') {
    return (
      <NavbarOne
        menuArrays={menuArrays}
        actions={actions}
        logo={logo}
        menuIcon={menuIcon}
        navClassName={navClassName}
        navItemClassName={navItemClassName}
        libraryType={libraryType}
        style={style}
        menuType={menuType}
        hideMenuIcon={hideMenuIcon}
        handleMenutoggle={handleMenutoggle}
        openMenu={openMenu}
      />
    );
  }
  return null;
};
