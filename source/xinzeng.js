/**
 * @author        alice <531311582@qq.com>
 * @date          2024-05-08 01:56:41
 * Copyright © YourCompanyName All rights reserved
 */
const fangdou = (fn, delay, immediate) => {
  let timer = null;
  let callNow = true;
  return (...args) => {
    clearTimeout(timer);
    if (immediate && callNow) {
      fn(...args);
      callNow = flase;
    } else {
      timer = setTimeout(() => {
        fn(...args);
        callNow = true;
      }, delay);
    }
  };
};
