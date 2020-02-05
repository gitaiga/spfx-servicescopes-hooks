import { ServiceScope } from '@microsoft/sp-core-library';
import { createContext } from 'react';

export interface AppContextProps {
    serviceScope: ServiceScope;
}

const AppContext = createContext<AppContextProps>(undefined);

export default AppContext;