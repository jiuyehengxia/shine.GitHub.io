/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState } from "react";
import {
  HeaderOuterWrapper,
  HeaderInner,
  HeaderLogoWrapper,
  HeaderNav,
  NavItem,
} from "../../style";

export default (props: any) => {
  const {} = props;

  const [] = useState();

  return (
    <HeaderOuterWrapper>
      <HeaderInner>
        <HeaderLogoWrapper />
        <HeaderNav>
          <NavItem>导航一</NavItem>
          <NavItem>导航二</NavItem>
          <NavItem>导航三</NavItem>
          <NavItem>导航四</NavItem>
        </HeaderNav>
      </HeaderInner>
    </HeaderOuterWrapper>
  );
};
