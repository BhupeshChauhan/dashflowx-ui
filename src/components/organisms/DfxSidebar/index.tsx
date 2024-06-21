import { iDfxMenu } from '@/components/molecules/DfxMenuList';
import { SidebarComp } from './variants/Basic';
import { SidebarOne } from './variants/SidebarOne';
import { SidebarTwo } from './variants/SidebarTwo';

interface iDfxSidebar {
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  logo: JSX.Element;
  variant: 'basic' | 'one' | 'two';
  menuType: any;
  profileCard?: JSX.Element
  libraryType?: 'react' | 'next';
  footerActions?: JSX.Element;
}

export const DfxSidebar = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  variant,
  menuType,
  profileCard,
  libraryType,
  footerActions
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
        profileCard={profileCard}
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
        profileCard={profileCard}
        libraryType={libraryType || 'react'}
        footerActions={footerActions}
      />
    );
  }
  return null;
};
