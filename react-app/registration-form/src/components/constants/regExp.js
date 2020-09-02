export const nameRex = RegExp(/^[a-zA-Z\s]{1,15}$/);
export const emailRex = RegExp(/^\w+([-]?\w+)*@\w+([-]\w+)*(\.\w{2,3})$/);
export const phoneRex = RegExp(
  /^(([+][358]{3})[-\s]?([4|5][\d]{1})[-\s]?([\d]{6}))$/g
);
export const addressRex = RegExp(/^[a-zA-Z\s]{7,40}$/);
