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
  profileImage?: string;
  profileName?: string;
  profileDescription?: string;
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
}: iDfxSidebar) => {
  if (variant === 'basic') {
    return (
      <SidebarComp
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
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
      />
    );
  }
  return null;
};
