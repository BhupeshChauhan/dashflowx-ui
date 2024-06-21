import { iDfxMenu } from "@/components/molecules/DfxMenuList";
import { DfxNavBar } from "@/components/organisms/DfxNavBar";
import { DfxSidebar } from "@/components/organisms/DfxSidebar"
import { cn } from "@/lib/utils";

interface iLayoutComp {
  logo: JSX.Element;
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  menuType: any;
  children: JSX.Element;
  NavActions: JSX.Element;
  libraryType: "react" | "next";
  navClassName?: string;
  scrollAreaClassName?: string;
}
export const LayoutComp = ({
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
}: iLayoutComp) => {
  return (
    <div className="flex h-screen w-screen bg-white">
        <DfxSidebar
          logo={logo}
          expanded={expanded}
          menuArrays={menuArrays}
          toggleExpand={toggleExpand}
          menuType={menuType}
          variant="basic"
        />
        <div className="max-h-screen w-full">
          <DfxNavBar
            libraryType={libraryType}
            actions={NavActions}
            variant="basic"
            navClassName={navClassName}
          />
          <div className={cn(
            'w-full p-6 bg-slate-100 overflow-y-scroll h-[calc(100vh-120px)]',
            scrollAreaClassName
          )}>
            {children}
          </div>
        </div>
      </div>
  )
}