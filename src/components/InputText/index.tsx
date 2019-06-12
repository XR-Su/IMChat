import * as React from "react";
import InputText from "./inputText.js";

export interface InputTextProps {
  handleSendText?: () => {};
}
interface InputTextState {}

export default class InputText extends React.Component<
  InputTextProps,
  InputTextState
> {
  constructor(props: InputTextProps) {
    super(props);
  }
  render() {
    const { handleSendText } = this.props;
    return <InputText {...{ handleSendText }} />;
  }
}
