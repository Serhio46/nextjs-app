'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cls from './NavLink.module.css';

type Props = {
    path: string;
    children: string;
};

const NavLink = ({ path, children }: Props) => {
    const pathName = usePathname();
    console.log(pathName === path);
    return (
        <Link href={path} className={`${cls.container} ${pathName === path && cls.active}`}>
            {children}
        </Link>
    );
};

export default NavLink;
