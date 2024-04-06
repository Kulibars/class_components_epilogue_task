import { Component } from "react";

export class InformationLayout extends Component {
  render() {
    const { status } = this.props;
    return <div className="nformation">{status()}</div>;
  }
}

// export const InformationLayout = ({ status }) => {
//   return <div className={styles.nformation}>{status}</div>;
// };
