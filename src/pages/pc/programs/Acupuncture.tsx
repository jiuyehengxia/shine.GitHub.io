/*
 *
 * created time: 2021/8/9 0009
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOMEPAGE } from "../../constants";

export default (props: any) => {
  const {} = props;

  const [] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      Acupuncture<Link to={HOMEPAGE}>返回首页</Link>
    </div>
  );
};
