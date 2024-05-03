import { routeConfig, AppRoutes } from '@/shared/config/routeConfig/routeConfig';
import NavLink from '@/components/NavLink';
import cls from './Navbar.module.css';

export const Navbar = () => {
    //TEMPORARRY MOCK
    const isAuth = !true;
    const isAdmin = !true;
    return (
        <header className={cls.header}>
            <div className={cls.logo}>Logo</div>
            <nav className={cls.navigation}>
                {routeConfig.map(route => {
                    if (route.role === 'admin' && !isAdmin) return null;
                    if ((route.path === AppRoutes.LOGIN || route.path === AppRoutes.REGISTER) && isAuth) return null;
                    return (
                        <NavLink key={route.path} path={route.path}>
                            {route.title}
                        </NavLink>
                    );
                })}
                {isAuth && <button>Logout</button>}
            </nav>
        </header>
    );
};
