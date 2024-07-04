import { cn } from '@/lib/utils';
import { MenuList } from '@dashflowx/core';
import { ArrowRight } from 'lucide-react';

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
  menuType: any;
  libraryType: 'react' | 'next';
}

export const SidebarComp = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  libraryType,
}: iDfxSidebar) => {
  return (
    <aside
      id="side-bar"
      className={cn(
        expanded
          ? 'flex flex-col w-96 h-screen px-8 py-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'
          : 'relative flex flex-col items-start z-50 w-20 px-2 h-screen py-4 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700'
      )}
    >
      {logo}
      <div className="fixed top-4 z-50 flex flex-col items-start justify-between h-full flex-1 mt-16 w-full min-w-[500px]">
        <div className="absolute z-50 h-full w-full">
          <MenuList
            showText={expanded}
            library={libraryType}
            variant="basic"
            menuArrays={menuArrays}
            type={menuType}
            linkClassName="w-full"
            className="w-full"
            tooltipClassName="bg-white"
          />
        </div>
        <div className="absolute w-full bottom-0 flex items-center justify-center px-4 py-4 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <button
            onClick={toggleExpand}
            className={cn(
              'flex items-center justify-center w-full',
              expanded ? 'rotate-180 duration-75' : 'duration-75'
            )}
          >
            <ArrowRight className={cn('w-6 h-6')} />
          </button>
        </div>
      </div>
    </aside>
  );
};
