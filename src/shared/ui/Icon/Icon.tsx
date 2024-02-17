import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

type SvgVariant = 'normal' | 'inverted';

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    variant?: SvgVariant;
}

interface NonClickableIconBaseProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconBaseProps | ClickableIconBaseProps;

const Icon = memo((props: IconProps) => {
    const {
        className = '',
        Svg,
        width = 32,
        height = 32,
        variant = 'normal',
        clickable,
        ...otherProps
    } = props;

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(cls.button, {}, [className])}
                onClick={props.onClick}
                style={{ height, width }}
            >
                <Svg
                    className={classNames(cls.Icon, {}, [cls[variant]])}
                    width={width}
                    height={height}
                    {...otherProps}
                    onClick={undefined}
                />
            </button>
        );
    }

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className, cls[variant]])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );
});

Icon.displayName = 'Icon';

export { Icon };
