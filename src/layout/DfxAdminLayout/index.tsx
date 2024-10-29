import { LayoutComp } from './variants/Basic';
import { LayoutFive } from './variants/LayoutFive';
import { LayoutFour } from './variants/LayoutFour';
import { LayoutOne } from './variants/LayoutOne';
import { LayoutThree } from './variants/LayoutThree';
import { LayoutTwo } from './variants/LayoutTwo';

interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iLayoutComp {
  logo: JSX.Element;
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  menuType: any;
  children: JSX.Element;
  NavActions?: JSX.Element;
  libraryType: 'react' | 'next';
  variant: 'basic' | 'one' | 'two' | 'three' | 'four' | "five";
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  prefixNavBar?: JSX.Element;
  sidebarFooter?: JSX.Element;
  hideExpand?: boolean;
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
  profileImage,
  profileName,
  profileDescription,
  profilePath,
  prefixNavBar,
  sidebarFooter,
  hideExpand
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
        prefixNavBar={prefixNavBar}
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
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        prefixNavBar={prefixNavBar}
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
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        prefixNavBar={prefixNavBar}
      >
        {children}
      </LayoutTwo>
    );
  }
  if (variant === 'three') {
    return (
      <LayoutThree
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType}
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        sidebarFooter={sidebarFooter}
      >
        {children}
      </LayoutThree>
    );
  }
  if (variant === 'four') {
    return (
      <LayoutFour
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType}
        NavActions={NavActions}
        prefixNavBar={prefixNavBar}
        sidebarFooter={sidebarFooter}
        hideExpand={hideExpand}
      >
        {children}
      </LayoutFour>
    );
  }
  if (variant === 'five') {
    return (
      <LayoutFive
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType}
        sidebarFooter={sidebarFooter}
        hideExpand={hideExpand}
      >
        {children}
      </LayoutFive>
    );
  }
  return null;
};
