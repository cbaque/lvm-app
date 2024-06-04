import { titleFont } from "@/config/fonts";
import { MenuStore, useSideBarStore, userStore } from "@/store";
import { Avatar, Tooltip } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";

const TopMenu = () => {

  const openSideMenu = useSideBarStore( state => state.openSideMenu );

  const menu = MenuStore((state) => state.menu);
  const user = userStore((state) => state.userData);

  const menuSelected = menu.filter(menu => menu.tab);

  useEffect(() => {
    MenuStore.persist.rehydrate();
    userStore.persist.rehydrate();
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Lia Visual Medic
          </span>
        </Link>
      </div>

      <div className="hidden sm:block">
        {
          menuSelected.map( menuItem => (
            <Link
              key={menuItem.id}
              className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
              href={"/dashboard/" + menuItem.link || "#"}
            >
              {menuItem.name}
            </Link>            
          ))
        }
      </div>

      <div className="flex items-center">
        <Tooltip placement="bottom" title={user.user}>
          <Avatar size="small">{user.user?.charAt(0).toUpperCase()}</Avatar>
        </Tooltip>
        <button onClick={ openSideMenu } className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>
      </div>
    </nav>
    
  );
};

export default TopMenu;
