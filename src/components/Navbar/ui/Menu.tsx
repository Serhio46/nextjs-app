'use client';

import { useState } from 'react';
import { Session } from 'next-auth';
import { routeConfig, AppRoutes } from '@/shared/config/routeConfig/routeConfig';
import NavLink from '@/components/NavLink';
import { handleGitHubLogout } from '@/shared/lib/authActions';

import cls from './Navbar.module.css';

type ExtendedSession = Session & {
    user: {
        isAdmin?: boolean;
    };
};

type MenuProps = {
    session: ExtendedSession | null;
};

export const Menu = ({ session }: MenuProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    const isAuth = !!session;
    const isAdmin = session?.user?.isAdmin;

    const renderMenu = (isBurger: boolean = false) => (
        <nav className={`${isBurger ? cls.mobileLinks : cls.navigation}`}>
            {routeConfig.map(route => {
                if (route.role === 'admin' && !isAdmin) return null;
                if ((route.path === AppRoutes.LOGIN || route.path === AppRoutes.REGISTER) && isAuth) return null;
                return (
                    <NavLink key={route.path} path={route.path}>
                        {route.title}
                    </NavLink>
                );
            })}
            {isAuth && (
                <form action={handleGitHubLogout}>
                    <button className={cls.logout}>Logout</button>
                </form>
            )}
        </nav>
    );

    return (
        <>
            {renderMenu()}
            <button className={cls.menuButton} onClick={onToggle}>
                Burger
            </button>
            {collapsed && renderMenu(true)}
        </>
    );
};
