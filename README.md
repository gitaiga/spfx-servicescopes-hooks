# SPFX Service Scopes Hooks

This fork takes the great example provided by [@garrytrinder](https://twitter.com/garrytrinder) (who forked and added "full hooks" to the great example provided by [@vrdmn](https://twitter.com/vrdmn)) and adds `useWebPartContext` React hook to simplify working with SPFx web part properties on any level deep in the React components tree. 

## How to use

1. Change top level React render so that it injects current web part context via [React Context](https://reactjs.org/docs/context.html):
   ```
   const element: React.ReactElement = React.createElement(
      AppContext.Provider,
      {
        value: this.context
      },
      React.createElement(HelloWorld, { description: this.properties.description })
    );
   ``` 
2. Use `useWebPartContext` hook in any child component (it preserves type checking). Use only subset of properties if you don't need the whole context (good for unit testing):
   ```
   const ctx = useWebPartContext(context => ({
     webPartId: context.instanceId,
     loginName: context.pageContext.user.loginName,
     msGraphClientFactory: context.serviceScope.consume(MSGraphClientFactory.serviceKey)
   }));
   ```
