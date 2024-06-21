import { iDfxMenu } from '@/components/molecules/DfxMenuList';
import { LayoutComp } from './variants/Basic';
import { LayoutOne } from './variants/LayoutOne';
import { LayoutTwo } from './variants/LayoutTwo';

interface iLayoutComp {
  logo: JSX.Element;
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  menuType: any;
  children: JSX.Element;
  NavActions: JSX.Element;
  libraryType: "react" | "next";
  variant: 'basic' | 'one' | 'two';
  profileCard?: JSX.Element;
}

export const DfxAdminLayout = ({
  NavActions,
  libraryType,
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  variant,
  menuType,
  children,
  profileCard
}: iLayoutComp) => {
  if (variant === 'basic') {
    return (
      <LayoutComp
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType}
        NavActions={NavActions}
      >
        {children}
      </LayoutComp>
    );
  }
  if (variant === 'one') {
    return (
      <LayoutOne
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType}
        NavActions={NavActions}
        profileCard={profileCard}
      >
        {children}
      </LayoutOne>
    );
  }
  if (variant === 'two') {
    return (
      <LayoutTwo
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType}
        NavActions={NavActions}
        profileCard={profileCard}
      >
        {children}
      </LayoutTwo>
    );
  }
  return null
};
