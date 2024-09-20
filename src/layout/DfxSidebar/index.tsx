import { SidebarComp } from './variants/Basic';
import { SidebarFive } from './variants/SidebarFive';
import { SidebarFour } from './variants/SidebarFour';
import { SidebarOne } from './variants/SidebarOne';
import { SidebarThree } from './variants/SidebarThree';
import { SidebarTwo } from './variants/SidebarTwo';

interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iDfxSidebar {
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  logo: JSX.Element;
  variant: 'basic' | 'one' | 'two' | 'three' | 'four' | 'five';
  menuType: any;
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  libraryType?: 'react' | 'next';
  sidebarFooter?: JSX.Element;
  hideExpand?: boolean;
}

export const DfxSidebar = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  variant,
  menuType,
  profileImage,
  profileName,
  profileDescription,
  profilePath,
  libraryType,
  sidebarFooter,
  hideExpand
}: iDfxSidebar) => {
  if (variant === 'basic') {
    return (
      <SidebarComp
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        libraryType={libraryType || 'react'}
      />
    );
  }
  if (variant === 'one') {
    return (
      <SidebarOne
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        libraryType={libraryType || 'react'}
      />
    );
  }
  if (variant === 'two') {
    return (
      <SidebarTwo
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        libraryType={libraryType || 'react'}
      />
    );
  }
  if (variant === 'three') {
    return (
      <SidebarThree
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        libraryType={libraryType || 'react'}
        sidebarFooter={sidebarFooter}
      />
    );
  }
  if (variant === 'four') {
    return (
      <SidebarFour
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        profilePath={profilePath}
        libraryType={libraryType || 'react'}
      />
    );
  }
  if (variant === 'five') {
    return (
      <SidebarFive
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        hideExpand={hideExpand}
        libraryType={libraryType || 'react'}
      />
    );
  }

  return null;
};
