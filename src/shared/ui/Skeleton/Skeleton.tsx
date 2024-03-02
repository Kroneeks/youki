import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { type CSSProperties } from 'react';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderR?: string;
}

const Skeleton = (props: SkeletonProps) => {
    const { className = '', height, width, borderR } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: borderR,
    };

    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
};

export { Skeleton };
