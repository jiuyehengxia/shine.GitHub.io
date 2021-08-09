export const viewHeight = document.body.clientHeight;
export const viewWidth = document.body.clientWidth;

export const COMMONROUTER = "/shine.GitHub.io";
export const HOMEPAGE = `${COMMONROUTER}/`;
export const ACUPUNCTURE = `${COMMONROUTER}/acupuncture`;
export const DETAILPAGE = `${COMMONROUTER}/detail::id`;
export const getDetailUrl = (id: number): string =>
  `${COMMONROUTER}/detail:${id}`;
