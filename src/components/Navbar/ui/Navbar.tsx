'use client';
import { useState } from 'react';
import { routeConfig, AppRoutes } from '@/shared/config/routeConfig/routeConfig';
import NavLink from '@/components/NavLink';
import cls from './Navbar.module.css';
import Link from 'next/link';

export const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };
    //TEMPORARRY MOCK
    const isAuth = true;
    const isAdmin = !true;

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
            {isAuth && <button className={cls.logout}>Logout</button>}
        </nav>
    );
    return (
        <header className={cls.header}>
            <Link href='/' className={cls.logo}>
                Logo
            </Link>
            {renderMenu()}
            <button className={cls.menuButton} onClick={onToggle}>
                Burger
            </button>
            {collapsed && renderMenu(true)}
        </header>
    );
};
