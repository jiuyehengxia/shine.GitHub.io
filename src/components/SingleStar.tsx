/*
 *
 * created time: 2021/8/5 0005
 * by Shine_Lee, e-mail: wangyi_lixian@163.com
 *
 */

import React, { useState, useEffect, useRef } from "react";
import { viewWidth, viewHeight } from "../pages/constants";
import {
  generatePosByWidth,
  generateNewValue,
  generateColorString,
  getStarRate,
  changeTenToSixteen,
} from "../pages/utils";
import { SingleStar } from "../pages/style";
import { SingleStarPropsType } from "../pages/type";

export default (props: SingleStarPropsType) => {
  const {
    posX: defaultPosX = 0,
    posY: defaultPosY = 0,
    rate: defalutRate = 1,
    displaySpeed = 2,
    bgColor: defaultBgColor = "#eee",
  } = props;

  const [posX, setPosX] = useState(defaultPosX);
  const [posY, setPosY] = useState(defaultPosY);
  const [rate, setRate] = useState(defalutRate);
  const [bgColor, setBgColor] = useState(`${defaultBgColor}00`);

  const dropFlagRef = useRef(0);

  useEffect(() => {
    const dropTimer = setInterval(() => {
      if (dropFlagRef.current <= 255) {
        dropFlagRef.current = dropFlagRef.current + displaySpeed;
      }

      changeVerticalPos();
    }, 200);

    return () => {
      dropTimer && clearInterval(dropTimer);
    };
  }, []);

  const changeVerticalPos = () => {
    setPosY((oldPosY) => {
      if (oldPosY >= viewHeight) {
        dropFlagRef.current = 0;
        reInitStateExcludeHeight();

        return generateNewValue(30);
      }

      if (dropFlagRef.current >= 255) {
        return getNewPosition(oldPosY);
      }

      const opacityValue = changeTenToSixteen(dropFlagRef.current);

      setBgColor(`${defaultBgColor}${opacityValue}`);
      return oldPosY;
    });
  };
  const reInitStateExcludeHeight = () => {
    setPosX(generatePosByWidth(viewWidth));
    setBgColor(`${generateColorString()}00`);
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
