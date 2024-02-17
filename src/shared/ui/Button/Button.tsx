import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {
    type ButtonHTMLAttributes,
    type ReactNode,
    forwardRef,
    type ForwardedRef,
} from 'react';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'outline_red';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonRadius = 'noneRadius' | 'smRadius' | 'mRadius';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    children?: ReactNode;
    square?: boolean;
    size?: ButtonSize;
    radius?: ButtonRadius;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

const Button = forwardRef(
    (
        props: ButtonProps,
        ref: ForwardedRef<HTMLButtonElement>,
    ): React.ReactElement => {
        const {
            className = '',
            children,
            variant = 'outline',
            color = 'normal',
            radius = 'noneRadius',
            size = 'm',
            square = false,
            disabled = false,
            fullWidth = false,
            addonLeft,
            addonRight,
            ...otherProps
        } = props;

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddonLeft]: Boolean(addonLeft),
            [cls.withAddonRight]: Boolean(addonRight),
        };

        return (
            <button
                type="button"
                disabled={disabled}
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                    cls[color],
                    cls[size],
                    cls[radius],
                ])}
                ref={ref}
                {...otherProps}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);

Button.displayName = 'Button';

export { Button };
