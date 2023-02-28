import { atom } from "recoil";

export const selectedFileState = atom({
  key: "selectedFileState",
  default: null,
});

export const captionState = atom({
  key: "captionState",
  default: "",
});

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const idCommentState = atom({
  key: "idCommentState",
  default: null,
});
