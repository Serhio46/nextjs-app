import cls from './Footer.module.css';

type Props = {};

export const Footer = (props: Props) => {
    return (
        <div className={cls.header}>
            <div className={cls.container}>Logo</div>

            <nav className={cls.navigation}>
                <div>Unsub link</div>
                <div>Preferences</div>
            </nav>
        </div>
    );
};
