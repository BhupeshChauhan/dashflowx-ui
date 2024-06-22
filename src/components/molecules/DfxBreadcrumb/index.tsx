import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/atoms/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu';

interface iDfxBreadcrumbItemChild {
  title: string | JSX.Element;
  href?: string;
}
interface iDfxBreadcrumbItem {
  id: string;
  type: 'item' | 'dropdown';
  title: string | JSX.Element;
  href?: string;
  children?: iDfxBreadcrumbItemChild[];
  separator?: boolean;
}
interface iDfxBreadcrumb {
  breadcrumbList: iDfxBreadcrumbItem[];
  className?: string;
  listClassName?: string;
  itemClassName?: string;
}
export const DfxBreadcrumb = ({
  breadcrumbList,
  className,
  listClassName,
  itemClassName,
}: iDfxBreadcrumb) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className={listClassName}>
        {breadcrumbList.map((breadcrumb, index) => {
          return (
            <>
              {breadcrumbList.length - 1 === index && (
                <BreadcrumbItem className={itemClassName} key={breadcrumb.id}>
                  <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
              {breadcrumbList.length - 1 !== index &&
                breadcrumb.type === 'item' && (
                  <BreadcrumbItem className={itemClassName} key={breadcrumb.id}>
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              {breadcrumb.type === 'dropdown' && (
                <BreadcrumbItem className={itemClassName} key={breadcrumb.id}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {breadcrumb?.children?.map((child) => (
                        <DropdownMenuItem className={itemClassName}>
                          {child.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
              )}
              {breadcrumb.separator && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
