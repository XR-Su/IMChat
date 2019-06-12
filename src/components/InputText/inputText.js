/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-11
 */
import React, { Component } from "react";
import style from "./style/inputText.less?modules";

export default class extends Component {
  render() {
    const { handleSendText } = this.props;
    return (
      <div className={style.container}>
        <input type="text" />
        <button onClick={handleSendText}>click</button>
      </div>
    );
  }
}
