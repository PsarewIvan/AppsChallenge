import React, { useState } from 'react';
import { Content } from './components/Content';
import { Nav } from './components/Nav';

import s from './styles/App.module.scss';
import { APPS } from './utils/appsData';

function App() {
    const [activeAppId, setActiveAppId] = useState(0);

    return (
        <div className={s.wrapper}>
            <Nav onClick={setActiveAppId} activeId={activeAppId} />
            <Content path={APPS[activeAppId].path} />
        </div>
    );
}

export default App;
