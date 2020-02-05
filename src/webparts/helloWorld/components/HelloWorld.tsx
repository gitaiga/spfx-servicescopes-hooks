import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import AppContext from '../common/AppContext';
import HelloUser from "./HelloUser";


const HelloWorld: React.FunctionComponent<IHelloWorldProps> = (props) =>
  <AppContext.Provider value={{ serviceScope: props.serviceScope }}>

    <div>

      {/*HelloUser and any other nested components will have the serviceScope property filled.
  Even if the components are deeply nested*/}

      <HelloUser />

    </div>

  </AppContext.Provider>;

export default HelloWorld;