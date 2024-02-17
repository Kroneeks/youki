import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
    memo,
    type InputHTMLAttributes,
    useRef,
    useState,
    useEffect,
    type ReactNode,
} from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'type' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    type?: string;
    onChange?: (value: any) => void;
    readonly?: boolean;
    'data-testid'?: string;
    autofocus?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

const Input = memo((props: InputProps) => {
    const {
        className = '',
        value = '',
        label = '',
        type = 'text',
        onChange,
        readonly = false,
        'data-testid': dataTestId = '',
        autofocus = false,
        addonLeft,
        addonRight,
        size = 'm',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    // const mods: Mods = {
    // [cls.readonly]: readonly,
    // [cls.focused]: isFocused,
    // [cls.withAddonLeft]: Boolean(addonLeft),
    // [cls.withAddonRight]: Boolean(addonRight),
    // };

    const input = (
        <div
            className={classNames(
                cls.Input,
                { [cls.readonly]: readonly, [cls.focused]: isFocused },
                [className, cls[size]],
            )}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                onChange={onChangeHandler}
                data-testid={dataTestId}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});

Input.displayName = 'Input';

export { Input };
