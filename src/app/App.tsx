import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';

const App = memo(() => {
    const { t } = useTranslation();

    return (
        <div id="app">
            <AppRouter />
        </div>
    );
});

App.displayName = 'App';

export default App;
