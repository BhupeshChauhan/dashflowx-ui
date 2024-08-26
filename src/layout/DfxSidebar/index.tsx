import { SidebarComp } from './variants/Basic';
import { SidebarOne } from './variants/SidebarOne';
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
  variant: 'basic' | 'one' | 'two';
  menuType: any;
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  libraryType?: 'react' | 'next';
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
  return null;
};
