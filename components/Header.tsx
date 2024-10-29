"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" color="foreground">
          <p className="font-bold text-inherit">StudyScape</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-8" justify="start">
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
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <User name="Hanako Mihon" description="1-A hanako@example.com" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
