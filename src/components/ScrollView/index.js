/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-11
 */
import React, { Component } from "react";
import style from "./style/scrollView.less?modules";

const FULL_WIDTH = 750;

export default class ScrollView extends Component {
  scrollTo = options => {
    let x = parseInt(options.x);
    let y = parseInt(options.y);
    const scorllTop = this.scroller.scrollTop;
    const pixelRatio = document.documentElement.clientHeight / FULL_WIDTH;
    const offsetTop = this.scroller.clientHeight - this.container.clientHeight;
    offsetTop < 0 ? (this.scroller.scrollTop = -offsetTop) : null;
    // console.log(offsetTop);
    // console.log(this.scroller.scrollTop);
  };
  render() {
    const { children } = this.props;
    return (
      <div className={style.container} ref={node => (this.scroller = node)}>
        <div
          className={style.container_body}
          ref={node => (this.container = node)}
        >
          {children}
        </div>
      </div>
    );
  }
}
