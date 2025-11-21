import Link from "next/link";
import type { IMenuItem } from "./menu.data";
import { NavbarItem } from "@heroui/react";

interface Props {
  menuItem: IMenuItem;
  isActive: boolean;
}

export function MenuItem({ menuItem, isActive }: Props) {
  return (
    <div>
      <NavbarItem>
        <Link className={isActive ? "text-blue/400" : "text-grey/400"} href={menuItem.href}>
          {menuItem.name}
        </Link>
      </NavbarItem>
    </div>
  );
}
