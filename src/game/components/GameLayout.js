import { Field } from "./Field/Field";
import { Information } from "./Information/Information.js";
import { Component } from "react";

export class GameLayout extends Component {
  render() {
    return (
      <>
        <div className="gemeLuyoutContaner">
          <Information />
          <Field />
        </div>
      </>
    );
  }
}
