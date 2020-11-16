import React, { useCallback, useMemo, useState } from 'react';

import { getBaseDataApi } from './api';
import { useApi } from './useApi';

export const appContext = React.createContext();

export function AppContextProvider({ children }) {

    const [config, setConfig] = useState();
    const [courts, setCourts] = useState();
    const [templates, setTemplates] = useState();

    const setBaseData = useCallback(getResult => {
        const { config, courts, templates } = getResult(null);
        setConfig(config);
        setCourts(courts);
        setTemplates(templates);
    }, []);

    const [getBaseDataState, getBaseData] = useApi(getBaseDataApi, setBaseData, true); 

    const value = useMemo(() => ({
        config,
        courts,
        templates,
        setConfig,
        setCourts,
        setTemplates,
        state: getBaseDataState,
        reload: getBaseData,
    }), [
        config,
        courts,
        templates,
        getBaseDataState,
        getBaseData,
    ]);

    return (
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    );
}