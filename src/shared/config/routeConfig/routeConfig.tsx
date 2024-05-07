export type AppRoute = {
    title: string;
    path: string;
    role?: string;
};

export const enum AppRoutes {
    HOME = '/',
    ABOUT = '/about',
    CONTACT = '/contact',
    BLOG = '/blog',
    LOGIN = '/login',
    REGISTER = '/register',
    ADMIN = '/admin',
    NOT_FOUND = 'not-found',
}

export const routesPath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CONTACT]: '/contact',
    [AppRoutes.BLOG]: '/blog',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.NOT_FOUND]: 'not-found',
};

export const routeConfig: AppRoute[] = [
    {
        title: 'Home',
        path: routesPath[AppRoutes.HOME],
    },
    {
        title: 'About',
        path: routesPath[AppRoutes.ABOUT],
    },
    {
        title: 'Contact',
        path: routesPath[AppRoutes.CONTACT],
    },
    {
        title: 'Blog',
        path: routesPath[AppRoutes.BLOG],
    },
    {
        title: 'Login',
        path: routesPath[AppRoutes.LOGIN],
    },
    {
        title: 'Register',
        path: routesPath[AppRoutes.REGISTER],
    },
    {
        title: 'Admin',
        path: routesPath[AppRoutes.ADMIN],
        role: 'admin',
    },
];
