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

const navData = [
  { title: "导航一", url: "www.baidu.com" },
  { title: "导航二", url: "www.kks.com" },
  { title: "导航三", url: "www.baidudfs.com" },
  { title: "导航四", url: "www.baiddfasdfu.com" },
];

export default (props: any) => {
  const {} = props;

  const [] = useState();

  const skipToTarget = (url: string) => {
    console.log("url__", url);
  };

  const getNavItem = (data: { title: string; url: string }[]) => {
    return data?.map((item) => {
      const { title = "", url = "" } = item;

      return <NavItem onClick={() => skipToTarget(url)}>{title}</NavItem>;
    });
  };

  return (
    <HeaderOuterWrapper>
      <HeaderInner>
        <HeaderLogoWrapper />
        <HeaderNav>{getNavItem(navData)}</HeaderNav>
      </HeaderInner>
    </HeaderOuterWrapper>
  );
};
