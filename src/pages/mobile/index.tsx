/*
 *
 * created time: 2021/8/6 0006
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import Head from "./head";
import StarsMeta from "../../components/StarsMeta";
import { OuterWrapper } from "./style";

export default (props: any) => {
  const {} = props;

  const [] = useState();

  useEffect(() => {}, []);

  return (
    <OuterWrapper>
      <StarsMeta />
      <Head />
    </OuterWrapper>
  );
};
