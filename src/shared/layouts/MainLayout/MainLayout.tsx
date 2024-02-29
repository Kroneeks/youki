import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { type ReactElement, memo } from 'react';
import useDeviceDetection from '@/shared/lib/hooks/useDeviceDetection/useDeviceDetection';

interface MainLayoutProps {
    className?: string;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

const MainLayout = memo((props: MainLayoutProps) => {
    const { className = '', content, sidebar, toolbar } = props;
    const device = useDeviceDetection();

    if (device === 'Desktop') {
        return (
            <div className={classNames(cls.MainLayout, {}, [className])}>
                <div className={cls.toolbar}>{toolbar}</div>
                <div className={cls.content}>{content}</div>
                <div className={cls.sidebar}>{sidebar}</div>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.MainLayout, {}, [className, cls.tablet])}
        >
            <div className={cls.toolbar}>{toolbar}</div>
            <div className={cls.content}>{content}</div>
        </div>
    );
});

MainLayout.displayName = 'MainLayout';

export { MainLayout };
