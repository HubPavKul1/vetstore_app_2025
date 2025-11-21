"use client";

import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu() {
  const pathname = usePathname();
  // const segment = useSelectedLayoutSegment(); //пример pathname: /users/test-author1; segment: users

  // console.log("pathname", pathname);
  // console.log("segment", segment);
  return (
    <nav className="flex gap-6">
      {/* {MENU.map(item => <MenuItem key={item.href} menuItem={item} isActive={pathname === item.href}/>)} */}
      {MENU.map((item) => (
        <MenuItem
          key={item.href}
          menuItem={item}
          isActive={!!match(item.href)(pathname)}
        />
      ))}
    </nav>
  );
}