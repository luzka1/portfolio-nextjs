export const item = {
  hidden: { scale: 2, opacity: 1 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export const itemHeader = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const itens = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const right = {
  hidden: { x: 500 },
  visible: {
    x: 0,
  },
};

export const top = {
  hidden: { y: -1500, rotateY: 360 },
  visible: {
    y: 0,
  },
};

export const initial = {
  opacity: 0,
  x: -100,
};

export const inView = {
  opacity: 1,
  x: 0,
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const anim = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const modalAnimation = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 10,
    opacity: 0,
  },
};
