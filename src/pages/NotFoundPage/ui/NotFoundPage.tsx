import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = (className: NotFoundPageProps): React.ReactElement => {
    const { t } = useTranslation('notfound');

    return (
        <div className={classNames(cls.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
};

export { NotFoundPage };
