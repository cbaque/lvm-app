'use client';

import { MenuStore, tokenStore, useSideBarStore, userStore } from '@/store';
import { CloudUploadOutlined, FileOutlined, LogoutOutlined, SisternodeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Divider, Drawer } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const iconComponents:Record<string, JSX.Element> = {
  FileOutlined: <FileOutlined size={30} />,
  CloudUploadOutlined : <CloudUploadOutlined size={30}/>,
  SisternodeOutlined : <SisternodeOutlined size={30}/>,
  UserAddOutlined : <UserAddOutlined size={30}/>,
  LogoutOutlined : <LogoutOutlined size={30}/>,
};

export const Sidebar = () => {

  const isSideMenuOpen = useSideBarStore( state => state.isSideMenuOpen );
  const closeMenu = useSideBarStore( state => state.closeSideMenu );
  const menu = MenuStore((state) => state.menu);
  const resetUser = userStore(state => state.resetUser);
  const resetMenu = MenuStore(state => state.resetMenu);
  const resetToken = tokenStore(state => state.resetToken);
  const router = useRouter();

  const handleLogout = () => {
    resetUser();
    resetMenu();
    resetToken();
    router.push('/');
  };

  useEffect(() => {
    MenuStore.persist.rehydrate();
  }, []);

  return (
    <div>

      <Drawer title="Men&uacute;" open={isSideMenuOpen} onClose={closeMenu}>
        {
          menu.map(menu => {
            const IconComponent = menu.icon && iconComponents[menu.icon] ? iconComponents[menu.icon] : <FileOutlined />;
            return (
              <Link
              key={menu.id} 
              href={"/dashboard/" + menu.link || "#"}
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
              >
                {IconComponent} 
                <span className="ml-3 text-xl">{menu.name}</span>
              </Link>
            )
          })
        }

        <Divider />    

        <button
          onClick={handleLogout}
          className="w-full flex items-center p-2 hover:bg-gray-100 rounded transition-all"
        >
          <LogoutOutlined />
          <span className="ml-3 text-xl">Salir</span>
        </button>        

      </Drawer>

    </div>
  );
};