/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-09
 */
import React, { Component } from "react";
import ScrollView from "./components/ScrollView";
import InputText from "./components/InputText";
import Middleware from "./middlewares/middleware.ts";
import baseParser from "./middlewares/baseParser";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgList: []
    };
  }
  componentDidMount() {
    this.componentParser = new Middleware([baseParser]);
  }

  handleSendText = () => {};
  onMsg = () => {
    const { msgList } = this.state;
    const conversation = {};
    const msg = { type: "image" };
    this.componentParser.dispatch(msg, conversation).then(ctx => {
      // console.log(ctx.ItemComopnent);
      msgList.push(ctx.ItemComopnent);
      this.setState({ msgList }, () => {
        console.log(this.scrollView.scrollTo({ y: 0 }));
      });
    });
  };

  render() {
    const { msgList } = this.state;
    return (
      <div className="app">
        <ScrollView ref={node => (this.scrollView = node)}>
          {msgList}
        </ScrollView>
        <InputText handleSendText={this.onMsg} />
      </div>
    );
  }
}
