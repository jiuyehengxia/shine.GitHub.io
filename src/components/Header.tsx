/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React from "react";
import { withRouter, Link } from "react-router-dom";
import { ACUPUNCTURE, HOMEPAGE } from "../pages/constants";
import {
  HeaderOuterWrapper,
  HeaderInner,
  HeaderLogoWrapper,
  HeaderNav,
  NavItem,
  HeaderLogo,
  HeaderSlogan,
} from "../pages/style";

const navData = [
  { title: "导航一", url: "www.baidu.com" },
  { title: "导航二", url: "www.kks.com" },
  { title: "导航三", url: "www.baidudfs.com" },
  { title: "导航四", url: "www.baiddfasdfu.com" },
];

const HomeHeader = (props: any) => {
  const {} = props;

  const handleLogoClick = () => {
    const { history } = props;

    history.push(HOMEPAGE);
  };

  const getNavItem = (data: { title: string; url: string }[]) => {
    return data?.map((item) => {
      const { title = "", url = "" } = item;

      return (
        <Link to={ACUPUNCTURE}>
          <NavItem>{title}</NavItem>
        </Link>
      );
    });
  };

  return (
    <HeaderOuterWrapper>
      <HeaderInner>
        <HeaderLogoWrapper>
          <HeaderLogo onClick={handleLogoClick}>这里是logo</HeaderLogo>
          <HeaderSlogan>健康快乐每一天</HeaderSlogan>
        </HeaderLogoWrapper>
        <HeaderNav>{getNavItem(navData)}</HeaderNav>
      </HeaderInner>
    </HeaderOuterWrapper>
  );
};

export default withRouter(HomeHeader);
