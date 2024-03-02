import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { type ReactNode, memo } from 'react';

interface PageProps {
    className?: string;
    children: ReactNode;
}

const Page = memo((props: PageProps) => {
    const { className = '', children } = props;

    return (
        <main className={classNames(cls.PageRedesigned, {}, [className])}>
            {children}
        </main>
    );
});

Page.displayName = 'Page';

export { Page };
