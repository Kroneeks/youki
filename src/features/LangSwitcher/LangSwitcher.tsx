import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = memo(
    ({ className = '' }: LangSwitcherProps): React.ReactElement => {
        const { t, i18n } = useTranslation();

        const toggle = (): void => {
            void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <button className={className} onClick={toggle}>
                {t('Язык')}
            </button>
        );
    },
);

LangSwitcher.displayName = 'LangSwitcher';

export { LangSwitcher };
