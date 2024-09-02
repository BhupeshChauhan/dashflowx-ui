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
}: iLayoutComp) => {
  return (
    <div className="flex h-screen w-screen bg-white">
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
      />
      <div className="max-h-screen w-full">
        <div
          className={cn(
            'w-full p-6 bg-slate-100 overflow-y-scroll h-[calc(100vh)]',
            scrollAreaClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
