/*
 *
 * created time: 2021/8/9 0009
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import { HomePropsType } from "../../type";

export default (props: HomePropsType) => {
  const {} = props;

  const [] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
