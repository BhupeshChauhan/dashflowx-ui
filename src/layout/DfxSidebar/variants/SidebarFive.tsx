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
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  libraryType: 'react' | 'next';
  sidebarFooter?: JSX.Element;
  hideExpand?: boolean;
}

export const SidebarFive = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  hideExpand,
  libraryType = 'react',
  sidebarFooter,
}: iDfxSidebar) => {
  return (
    <aside
      id="side-bar"
      className={cn(
        expanded
          ? 'flex bg-black flex-col w-96 h-[calc(100vh-20px)] overflow-y-auto rounded-l-3xl'
          : 'bg-black relative flex flex-col items-start w-16 h-[calc(100vh-20px)] overflow-y-auto rounded-l-3xl'
      )}
    >
      <div
        className={cn(
          expanded
            ? 'bg-black h-full w-full flex justify-between flex-col'
            : 'bg-black h-full w-full flex justify-between items-center flex-col'
        )}
      >
        <div>
          <div className="flex flex-col items-center mt-4">
            {logo}
          </div>
          <div
            className={cn(
              'flex flex-col items-start justify-between flex-1 w-full',
              expanded ? 'h-[70%]' : 'h-[70%]'
            )}
          >
            <div className={cn('w-full mx-auto', expanded ? 'max-w-60' : 'max-w-14')}>
              <MenuList
                showText={expanded}
                library={libraryType}
                variant="two"
                menuArrays={menuArrays}
                type={menuType}
                linkClassName="w-full"
                className="w-full"
                tooltipClassName="bg-white"
              />
            </div>
          </div>
        </div>
        <div>
          {sidebarFooter && <div
            className={cn(
              'w-full flex flex-col items-center justify-center px-2 py-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-400'
            )}
          >
            {sidebarFooter}
          </div>}
          {hideExpand && <div
            className={cn(
              'w-full mb-6 flex flex-col items-center justify-center px-2 py-2 text-slate-200 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
            )}
          >
            <button
              onClick={toggleExpand}
              className={cn(
                'flex items-center justify-center w-full',
                expanded ? 'rotate-180 duration-75' : 'duration-75'
              )}
            >
              <ArrowRight className={cn('w-6 h-6')} />
            </button>
          </div>}
        </div>
      </div>
    </aside>
  );
};
