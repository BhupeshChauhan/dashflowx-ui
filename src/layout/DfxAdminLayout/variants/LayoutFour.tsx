import { DfxNavBar } from '@/layout/DfxNavBar';
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
  NavActions?: JSX.Element;
  libraryType: 'react' | 'next';
  navClassName?: string;
  scrollAreaClassName?: string;
  prefixNavBar?: JSX.Element;
  sidebarFooter?: JSX.Element;
  hideExpand?: boolean;
}
export const LayoutFour = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  children,
  NavActions,
  libraryType,
  navClassName,
  scrollAreaClassName,
  prefixNavBar,
  sidebarFooter,
  hideExpand
}: iLayoutComp) => {
  return (
    <div className="flex w-[calc(100vw-20px)] h-[calc(100vh-20px)] bg-white m-[10px] rounded-3xl">
      <DfxSidebar
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        variant="five"
        hideExpand={hideExpand}
        libraryType={libraryType}
        sidebarFooter={sidebarFooter}
      />
      <div className="max-h-screen w-full">
        <DfxNavBar
          libraryType={libraryType}
          actions={NavActions}
          variant="two"
          navClassName={navClassName}
          logo={prefixNavBar}
        />
        <div
          className={cn(
            'm-2 overflow-y-auto h-[calc(100vh-120px)]',
            scrollAreaClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
