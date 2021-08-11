import styled from "styled-components";
import { CommonStarType } from "../pages/type";

export const PagesOuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeaderOuterWrapper = styled.div`
  width: 100%;
  padding: 0 200px;
  height: 60px;
  border-bottom: 1px solid #eee;
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  algin-items: center;
`;
export const HeaderLogoWrapper = styled.div`
  width: 200px;
  min-width: 200px;
  height: 100%;
  display: flex;
  border: 1px solid #888;
`;
export const HeaderLogo = styled.div`
  width: 60px;
  height: 100%;
  cursor: pointer;
  border: 1px solid #888;
`;
export const HeaderSlogan = styled.div`
  height: 60px;
  line-height: 60px;
`;
export const HeaderNav = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavItem = styled.div`
  width: 90px;
  height: 35px;
  color: #333;
  font-size: 16px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 4px;
  user-select: none;
  &:hover {
    color: #fff;
    background-color: #ccc;
  }
`;

export const ContentItemWrappper = styled.div`
  height: 40px;
`;

const getMainStyle = (props: CommonStarType) => {
  const { posX = 0, posY = 0, rate = 1, bgColor = "#f9f9f9" } = props;

  return `
    top: ${posY}px;
    left: ${posX}px;
    border-right: ${rate * 100}px solid transparent;
    border-bottom: ${rate * 70}px solid ${bgColor};
    border-left: ${rate * 100}px solid transparent;
  `;
};
const getBeforeStyle = (props: CommonStarType) => {
  const { rate = 1, bgColor = "#f9f9f9" } = props;

  const topValue = rate * -45;

  return `
    top: ${topValue}px;
    left: ${rate * -65}px;
    border-bottom: ${rate * 80}px solid ${bgColor};
    border-left: ${rate * 30}px solid transparent;
    border-right: ${rate * 30}px solid transparent;
    
  `;
};
const getAfterStyle = (props: CommonStarType) => {
  const { rate = 1, bgColor = "#f9f9f9" } = props;

  return `
    top: ${rate * 3}px;
    left: ${rate * -105}px;
    border-right: ${rate * 100}px solid transparent;
    border-bottom: ${rate * 70}px solid ${bgColor};
    border-left: ${rate * 100}px solid transparent;
  `;
};
export const SingleStar = styled.div`
  position: fixed;
  display: block;
  color: red;
  width: 0px;
  height: 0px;
  -moz-transform: rotate(35deg);
  -webkit-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  -o-transform: rotate(35deg);
  ${getMainStyle}

  ::before {
    position: absolute;
    height: 0;
    width: 0;
    display: block;
    content: "";
    -webkit-transform: rotate(-35deg);
    -moz-transform: rotate(-35deg);
    -ms-transform: rotate(-35deg);
    -o-transform: rotate(-35deg);
    ${getBeforeStyle}
  }

  ::after {
    position: absolute;
    display: block;
    color: red;
    width: 0px;
    height: 0px;
    -webkit-transform: rotate(-70deg);
    -moz-transform: rotate(-70deg);
    -ms-transform: rotate(-70deg);
    -o-transform: rotate(-70deg);
    content: "";
    ${getAfterStyle}
  }
`;
