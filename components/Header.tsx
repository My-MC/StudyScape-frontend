"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import Account from "./Account";

export default function Header() {
  return (
    <Navbar height="10%">
      <NavbarBrand>
        <Link href="/" color="foreground">
          <p className="font-bold text-inherit">StudyScape</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-8 sm:flex" justify="start">
        <NavbarItem>
          <Link href="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pe" color="foreground">
            P.E.
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/board" color="foreground">
            掲示板
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Account />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
