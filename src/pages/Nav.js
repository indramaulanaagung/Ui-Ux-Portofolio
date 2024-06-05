import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import LightModeToggle from "../Darkmode/LightModeToogle";
import { useTheme } from "../Darkmode/ThemeContext";

export default function Nav() {
  const { isLightMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Category", "Product", "Blog", "About"];
  useEffect(() => {
    document.body.className = isLightMode ? "" : "bg-white";
  }, [isLightMode]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed z-[99999]"
      
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">INDRA MAULANA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Category
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LightModeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden "
      />
      <NavbarMenu className="z-[9999]">
      <LightModeToggle />
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"foreground"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
