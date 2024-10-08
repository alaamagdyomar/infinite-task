// Utility function to determine the width and height based on window width
export const getImageSize = (windowWidth) => {
  if (windowWidth >= 1536) {
    return { width: 300, height: 10 }; // lview
  } else if (windowWidth >= 1281 && windowWidth <= 1535) {
    return { width: 250, height: 9 }; // Desktop
  } else if (windowWidth >= 1024 && windowWidth <= 1280) {
    return { width: 200, height: 8 }; // Laptop
  } else if (windowWidth >= 640 && windowWidth <= 1023) {
    return { width: 180, height: 7 }; // Tablet
  } else if (windowWidth >= 377 && windowWidth <= 639) {
    return { width: 100, height: 5 }; // Mobile
  } else {
    return { width: 100, height: 4 }; // smMobile
  }
};
