import { LangSwitcher } from '@/features/LangSwitcher';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const App = memo(() => {
    const { t } = useTranslation();

    return (
        <div id="app">
            {t('Приложение')}
            <LangSwitcher />
        </div>
    );
});

App.displayName = 'App';

export default App;
