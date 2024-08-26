import { LayoutComp } from './variants/Basic';
import { LayoutOne } from './variants/LayoutOne';
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
  NavActions: JSX.Element;
  libraryType: 'react' | 'next';
  variant: 'basic' | 'one' | 'two';
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  prefixNavBar?: JSX.Element;
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
  return null;
};
