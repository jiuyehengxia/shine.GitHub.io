export type CommonStarType = {
  rate?: number;
  posX?: number;
  posY?: number;
  bgColor?: string;
  displaySpeed?: number;
};

export interface SingleOuterWrapperType extends CommonStarType {}
export interface SingleStarPropsType extends CommonStarType {}
export interface StarsMetaPropsType {}
