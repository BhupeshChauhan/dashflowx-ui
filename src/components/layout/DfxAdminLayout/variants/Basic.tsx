import { iDfxMenu } from "@/components/molecules/DfxMenuList";
import { DfxNavBar } from "@/components/organisms/DfxNavBar";
import { DfxSidebar } from "@/components/organisms/DfxSidebar"

interface iLayoutComp {
  logo: JSX.Element;
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  menuType: any;
  children: JSX.Element;
  NavActions: JSX.Element;
  libraryType: "react" | "next";
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
          />
          <div className="w-full h-[calc(100vh-60px)] p-6 bg-slate-50">
            {children}
          </div>
        </div>
      </div>
  )
}