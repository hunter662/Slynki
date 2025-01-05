import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import ContentRules from './components/ContentRules';
import ContentTab from './components/ContentTab';
import AIModeration from './components/AIModeration';
import SettingsPanel from './components/SettingsPanel';
import Recommendations from './components/Recommendations';
import PlayButton from './components/PlayButton';

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const loadApp = async () => {
            // Simulate loading time
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false);
        };
        loadApp();
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div>
            <ContentRules />
            <ContentTab />
            <AIModeration />
            <SettingsPanel />
            <Recommendations />
            <PlayButton />
        </div>
    );
};

export default App;