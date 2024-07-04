import { cn } from '@/lib/utils';
import { MenuList, TypographyComp } from '@dashflowx/core';
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
  profileImage?: string;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  libraryType: 'react' | 'next';
}

export const SidebarTwo = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  profileImage,
  profileName,
  profileDescription,
  profilePath,
  libraryType = 'react',
}: iDfxSidebar) => {
  return (
    <aside
      id="side-bar"
      className={cn(
        expanded
          ? 'flex flex-col w-96 h-screen px-8 py-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'
          : 'flex flex-col items-center w-20 h-screen py-4 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700'
      )}
    >
      {logo}
      <TypographyComp
        as={menuType}
        className={cn(
          expanded
            ? 'flex gap-3 items-center mt-6 -mx-2'
            : 'flex items-center justify-center'
        )}
        {...(libraryType === 'react' && {
          to: { profilePath },
        })}
        {...(libraryType === 'next' && {
          href: { profilePath },
        })}
      >
        {profileImage && (
          <img
            className={cn(
              expanded
                ? 'w-14 h-14 aspect-square mx-2 rounded-full'
                : 'object-cover w-8 h-8 rounded-full'
            )}
            src={profileImage}
            alt="avatar"
          />
        )}
        <div className={expanded ? 'block' : 'hidden'}>
          {profileName && (
            <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200">
              {profileName}
            </h4>
          )}
          {profileDescription && (
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              {profileDescription}
            </p>
          )}
        </div>
      </TypographyComp>
      <div className="flex flex-col justify-between flex-1 mt-6 w-full">
        <MenuList
          showText={expanded}
          library={libraryType}
          variant="basic"
          menuArrays={menuArrays}
          type={menuType}
          tooltipClassName="z-50"
          className="absolute z-50"
        />
        <div className="absolute bottom-0 flex items-center justify-center px-4 py-4 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
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
