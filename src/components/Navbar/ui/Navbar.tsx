import { useState } from 'react';
import { routeConfig, AppRoutes } from '@/shared/config/routeConfig/routeConfig';
import NavLink from '@/components/NavLink';
import cls from './Navbar.module.css';
import Link from 'next/link';
import { Menu } from './Menu';
import { auth } from '@/shared/lib/auth';

export const Navbar = async () => {
    const session = await auth();
    return (
        <header className={cls.header}>
            <Link href='/' className={cls.logo}>
                Logo
            </Link>
            <Menu session={session} />
        </header>
    );
};
