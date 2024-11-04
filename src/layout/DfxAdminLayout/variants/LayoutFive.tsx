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
  scrollAreaClassName?: string;
  sidebarFooter?: JSX.Element;
  hideExpand?: boolean;
}
export const LayoutFive = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  children,
  libraryType,
  scrollAreaClassName,
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
        <div
          className={cn(
            'overflow-y-auto max-h-[calc(100vh-20px)] w-full',
            scrollAreaClassName
          )}
        >
          {children}
        </div>
    </div>
  );
};
