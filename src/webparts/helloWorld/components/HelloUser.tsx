import * as React from 'react';
import { MSGraphClientFactory, MSGraphClient } from '@microsoft/sp-http';
import { useEffect, useState, useContext } from 'react';
import AppContext from '../common/AppContext';

const HelloUser: React.FunctionComponent = () => {

    const [name, setName] = useState('');
    const { serviceScope } = useContext(AppContext);

    useEffect(() => {
        const msGraphClientFactory = serviceScope.consume(MSGraphClientFactory.serviceKey);
        msGraphClientFactory.getClient()
            .then((client: MSGraphClient): void => {
                client
                    .api('/me')
                    .get((error, user: any, rawResponse?: any) => {
                        setName(user.displayName);
                    });
            });
    }, []);

    return (
        <div>
            {name &&
                <span>Hello {name}</span>
            }
        </div>
    );
};

export default HelloUser;