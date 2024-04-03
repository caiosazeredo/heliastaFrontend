import React, { createContext, useContext, useState, ReactNode, SyntheticEvent } from 'react';

interface AppContextProps {
    valueTabMenuContext: number;
    handleChangeTabMenuContext: (event: SyntheticEvent, newValue: number) => void;
}

const TabMenuContext = createContext<AppContextProps | undefined>(undefined);

export const TabMenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [valueTabMenuContext, setValueTabMenuContext] = useState(0);

    const handleChangeTabMenuContext = (event: SyntheticEvent, newValue: number) => {
        setValueTabMenuContext(newValue);
    };

    return (
        <TabMenuContext.Provider value={{ valueTabMenuContext, handleChangeTabMenuContext }}>
            {children}
        </TabMenuContext.Provider>
    );
};

export const useTabMenuContext = () => {
    const context = useContext(TabMenuContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
