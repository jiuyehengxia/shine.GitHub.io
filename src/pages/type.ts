import * as H from "history";

export type CommonStarType = {
  rate?: number;
  posX?: number;
  posY?: number;
  bgColor?: string;
  displaySpeed?: number;
};
export type ContentItemType = { name: string; detailId: number };

export interface SingleOuterWrapperType extends CommonStarType {}
export interface SingleStarPropsType extends CommonStarType {}
export interface StarsMetaPropsType {}

export interface CommonHistoryType {
  history: H.History;
}
export interface HomePropsType {}
export interface DetailPropsType {
  match: {
    params: { id: string };
  };
}
