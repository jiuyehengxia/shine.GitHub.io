/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import StarsMeta from "../../components/StarsMeta";
import Acupuncture from "./programs";
import { HOMEPAGE, ACUPUNCTURE, DETAILPAGE } from "../constants";
import { PagesOuterWrapper } from "../style";

export default (props: any) => {
  const {} = props;

  const [] = useState();

  return (
    <PagesOuterWrapper>
      <StarsMeta />
      <BrowserRouter>
        <Route path={HOMEPAGE} exact component={Home} />
        <Route path={DETAILPAGE} component={Detail} />
        <Route path={ACUPUNCTURE} component={Acupuncture} />
      </BrowserRouter>
    </PagesOuterWrapper>
  );
};
