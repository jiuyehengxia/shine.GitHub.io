/*
 *
 * created time: 2021/8/9 0009
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import { HOMEPAGE } from "../../constants";
import { DetailPropsType } from "../../type";

export default (props: DetailPropsType) => {
  const { match } = props;

  const {
    params: { id = "" },
  } = match;

  const [] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      detail id: {id}
      <Link to={HOMEPAGE}>返回首页</Link>
    </div>
  );
};
