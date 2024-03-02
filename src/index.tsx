import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.scss';
import { StoreProvider } from './app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. Не удалось вмонтировать реакт приложение.',
    );
}

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
