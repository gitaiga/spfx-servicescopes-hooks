import * as React from "react";
import { withWpContext } from "../../../hoc/withWpContext";
import { WebPartContext } from "@microsoft/sp-webpart-base";

const mapContext = (ctx: WebPartContext) => ({
  webPartd: ctx.instanceId,
  email: ctx.pageContext.user.email
});

interface IProps {
  wpContext: ReturnType<typeof mapContext>;
}

class ClassComponent extends React.Component<IProps, {}> {
  public render(): React.ReactElement {
    return (
      <div>
        <div>Class based component: </div>
        <div>web part id: {this.props.wpContext.webPartd}</div>
        <div>email: {this.props.wpContext.email}</div>
      </div>);
  }
}

export default withWpContext(ClassComponent, mapContext);
