import { DfxSidebar } from '@/layout/DfxSidebar';
import { cn } from '@/lib/utils';
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
  libraryType: 'react' | 'next';
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  scrollAreaClassName?: string;
  profilePath?: string;
  sidebarFooter?: JSX.Element;
}
export const LayoutThree = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  children,
  libraryType,
  profileImage,
  profileName,
  profileDescription,
  scrollAreaClassName,
  profilePath,
  sidebarFooter,
}: iLayoutComp) => {
  return (
    <div className="flex h-screen w-screen">
      <DfxSidebar
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        variant="three"
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        libraryType={libraryType}
        profilePath={profilePath}
        sidebarFooter={sidebarFooter}
      />
      <div className="max-h-screen w-full">
        <div
          className={cn(
            'w-full px-6 py-12 pt-8 overflow-y-auto h-[calc(100vh)]',
            scrollAreaClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
