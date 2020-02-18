import * as React from 'react';
import { FC } from 'react';

import { IHelloWorldProps } from './IHelloWorldProps';
import { useWebPartContext } from '../../../hooks/useWebPartContext';
import { MSGraphClientFactory } from '@microsoft/sp-http';
import ClassComponent from "./ClassComponent";

const HelloWorld: FC<IHelloWorldProps> = (props) => {
  const [name, setName] = React.useState('');
  /*
  * Use cases:
  */

  // get single property
  const webPartId = useWebPartContext(context => context.instanceId);

  // or complex object
  const ctx = useWebPartContext(context => ({
    webPartId: context.instanceId,
    loginName: context.pageContext.user.loginName,
    msGraphClientFactory: context.serviceScope.consume(MSGraphClientFactory.serviceKey)
  }));

  // or just the whole context
  const wpContext = useWebPartContext();

  // get data using ms graph:
  React.useEffect(() => {
    async function process() {
      const client = await ctx.msGraphClientFactory.getClient();
      client
        .api('/me')
        .get((error, user: any, rawResponse?: any) => {
          setName(user.displayName);
        });
    }

    process();
  }, []);

  return <div>
    <div>
      Legacy page context: <pre>{JSON.stringify(wpContext.pageContext.legacyPageContext)}</pre>
    </div>
    <div>
      Web Part id: {webPartId}
    </div>
    <div>
      Login name: {ctx.loginName}
    </div>
    <div>
      User name: {name}
    </div>
    <br />
    <ClassComponent />
  </div>;
};

export default HelloWorld;
