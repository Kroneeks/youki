import { memo } from 'react';

const App = memo(() => {
    return <div id="app">App</div>;
});

App.displayName = 'App';

export default App;
