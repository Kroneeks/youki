import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { NavLink, type LinkProps } from 'react-router-dom';
import { type ForwardedRef, forwardRef } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: React.ReactNode;
    variant?: AppLinkVariant;
}

const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className = '',
            children,
            variant = 'primary',
            ...otherProps
        } = props;

        return (
            <NavLink
                to={to}
                className={classNames(cls.AppLink, {}, [
                    className,
                    cls[variant],
                ])}
                {...otherProps}
                ref={ref}
            >
                {children}
            </NavLink>
        );
    },
);

AppLink.displayName = 'AppLink';

export { AppLink };
