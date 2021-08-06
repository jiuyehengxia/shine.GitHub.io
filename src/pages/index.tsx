/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState } from "react";
import PCHome from "./pc";
import MobileHome from "./mobile";
import { judgeIsMobile } from "./utils";
import { PagesOuterWrapper } from "./style";

export default (props: any) => {
  const {} = props;

  const [] = useState();

  const isMobile = judgeIsMobile(window.navigator.userAgent.toLowerCase());

  return (
    <PagesOuterWrapper>
      {isMobile ? <MobileHome /> : <PCHome />}
      content
    </PagesOuterWrapper>
  );
};
