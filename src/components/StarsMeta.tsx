/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import SingleStar from "./SingleStar";
import { viewWidth } from "../pages/constants";
import {
  generatePosByWidth,
  generateNewValue,
  generateColorString,
  getStarRate,
  generateValueBetween,
} from "../pages/utils";
import { StarsMetaPropsType, SingleOuterWrapperType } from "../pages/type";

function generateStarsMeta(widthValue: number): SingleOuterWrapperType[] {

  const newArr = new Array(10).fill({});

  return newArr.map(() => {
    return {
      rate: getStarRate(),
      posX: generatePosByWidth(widthValue),
      posY: generateNewValue(30),
      bgColor: generateColorString(),
      displaySpeed: generateValueBetween(2, 30),
    };
  });
}

export default (props: StarsMetaPropsType) => {
  const {} = props;

  const [starsMeta, setStarsMeta] = useState<SingleOuterWrapperType[]>([]);

  useEffect(() => {
    const newStarsMeta = generateStarsMeta(viewWidth);

    setStarsMeta(newStarsMeta);
  }, []);

  const getStars = (data: SingleOuterWrapperType[]) => {
    return data?.map((item: SingleOuterWrapperType) => {
      const {
        posX = 0,
        posY = 0,
        rate = 1,
        bgColor = "#eee",
        displaySpeed = 2,
      } = item;

      return (
        <SingleStar
          key={`${posX}-${rate}`}
          posX={posX}
          posY={posY}
          rate={rate}
          displaySpeed={displaySpeed}
          bgColor={bgColor}
        />
      );
    });
  };

  return <div>{getStars(starsMeta)}</div>;
};
