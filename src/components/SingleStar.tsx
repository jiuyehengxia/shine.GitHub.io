/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect } from "react";
import { viewWidth, viewHeight } from "../pages/constants";
import {
  generatePosByWidth,
  generateNewValue,
  generateColorString,
  getStarRate,
} from "../pages/utils";
import { SingleStar } from "../pages/style";
import { SingleStarPropsType } from "../pages/type";

export default (props: SingleStarPropsType) => {
  const {
    posX: defaultPosX = 0,
    posY: defaultPosY = 0,
    rate: defalutRate = 1,
    bgColor: defaultBgColor = "#eee",
  } = props;

  const [posX, setPosX] = useState(defaultPosX);
  const [posY, setPosY] = useState(defaultPosY);
  const [rate, setRate] = useState(defalutRate);
  const [bgColor, setBgColor] = useState(defaultBgColor);

  useEffect(() => {
    const dropTimer = setInterval(() => {
      setPosY((oldPosY) => {
        if (oldPosY >= viewHeight) {
          reInitStateExcludeHeight();

          return generateNewValue();
        }

        return getNewPosition(oldPosY);
      });
    }, 200);

    return () => {
      dropTimer && clearInterval(dropTimer);
    };
  }, []);

  const reInitStateExcludeHeight = () => {
    setPosX(generatePosByWidth(viewWidth));
    setBgColor(generateColorString());
    setRate(getStarRate());
  };
  const getNewPosition = (posValue: number): number => {
    if (posValue <= 10) {
      return posValue + 1;
    }

    const posRate = posValue / viewHeight;

    return posValue + Math.pow(1 + posRate * 5, 3);
  };

  return (
    <div>
      <SingleStar posY={posY} posX={posX} rate={rate} bgColor={bgColor} />
    </div>
  );
};
