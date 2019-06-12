import React from "react";

export default function(ctx) {
  const msg = ctx.message;
  switch (msg.type) {
    case "text":
      ctx.ItemComopnent = <p>textCom</p>;
      break;
    case "image":
      ctx.ItemComopnent = <p>ImgCom</p>;
      break;
    default:
      ctx.ItemComopnent = "";
  }
}
