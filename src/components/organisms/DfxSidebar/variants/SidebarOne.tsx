import { DfxMenuList, iDfxMenu } from '@/components/molecules/DfxMenuList';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface iDfxSidebar {
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  logo: JSX.Element;
  menuType: any;
  profileCard?: JSX.Element
  libraryType: 'react' | 'next';
}

export const SidebarOne = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  profileCard,
  libraryType = 'react',
}: iDfxSidebar) => {
  return (
    <aside
      id="side-bar"
      className={cn(
        expanded
          ? 'flex flex-col w-96 h-screen px-8 py-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'
          : 'flex flex-col items-center px-2 w-20 h-screen py-4 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700'
      )}
    >
      {logo}
      {profileCard}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <DfxMenuList
          showText={expanded}
          variant="basic"
          menuArrays={menuArrays}
          type={menuType}
          library={libraryType}
        />
        <div className="flex items-center justify-center px-4 py-4 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-t-2 border-gray-200">
          <button
            onClick={toggleExpand}
            className={cn(expanded ? 'rotate-180 duration-75' : 'duration-75')}
          >
            <ArrowRight className={cn('w-6 h-6')} />
          </button>
        </div>
      </div>
    </aside>
  );
};
