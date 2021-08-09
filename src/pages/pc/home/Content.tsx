/*
 *
 * created time: 2021/8/9 0009
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getDetailUrl } from "../../constants";
import { ContentPropsType, ContentItemType } from "../../type";
import { ContentItemWrappper } from "../../style";

const mockData = [
  { name: "条目一", detailId: 1 },
  { name: "条目二", detailId: 2 },
  { name: "条目三", detailId: 3 },
  { name: "条目四", detailId: 4 },
];

const Content = (props: ContentPropsType) => {
  const {} = props;

  const [] = useState();

  useEffect(() => {}, []);

  const handleItemClick = (id: number) => {
    const { history } = props;

    history.push(getDetailUrl(id));
  };

  const getContent = (data: ContentItemType[]) => {
    return data?.map((item: ContentItemType) => {
      const { name, detailId } = item;

      return (
        <ContentItemWrappper onClick={() => handleItemClick(detailId)}>
          {name}
        </ContentItemWrappper>
      );
    });
  };

  return <div>{getContent(mockData)}</div>;
};

export default withRouter(Content);
