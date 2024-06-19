import { Button } from '@/components/atoms/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu';

interface iDfxDropDownItemsSubChildren {
  title: string | JSX.Element;
}

interface iDfxDropDownItemsChildren {
  type: 'item' | 'subMenu';
  title: string | JSX.Element;
  shortcut?: string | JSX.Element;
  subChildren?: iDfxDropDownItemsSubChildren[];
}
interface iDfxDropDownItems {
  type: 'label' | 'seperator' | 'group';
  title?: string | JSX.Element;
  shortcut?: string | JSX.Element;
  children?: iDfxDropDownItemsChildren[];
}

interface iDfxDropDown {
  actionButton: string;
  dropdownItems: iDfxDropDownItems[];
}

export function DfxDropDown({ actionButton, dropdownItems }: iDfxDropDown) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{actionButton}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dropdownItems?.map((dropdownItem) => {
          if (dropdownItem.type === 'label') {
            return <DropdownMenuLabel>{dropdownItem.title}</DropdownMenuLabel>;
          }
          if (dropdownItem.type === 'seperator') {
            return <DropdownMenuSeparator />;
          }
          if (dropdownItem.type === 'group') {
            return (
              <DropdownMenuGroup>
                {dropdownItem?.children?.map((child) => (
                  <>
                    {child.type === 'item' && (
                      <DropdownMenuItem>
                        {child.title}
                        {child.shortcut && (
                          <DropdownMenuShortcut>
                            {child.shortcut}
                          </DropdownMenuShortcut>
                        )}
                      </DropdownMenuItem>
                    )}
                    {child.type === 'subMenu' && (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          {child.title}
                        </DropdownMenuSubTrigger>
                        {child.shortcut && (
                          <DropdownMenuShortcut>
                            {child.shortcut}
                          </DropdownMenuShortcut>
                        )}
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {child?.subChildren?.map((subChild) => (
                              <DropdownMenuItem>
                                {subChild.title}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    )}
                  </>
                ))}
              </DropdownMenuGroup>
            );
          }
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
