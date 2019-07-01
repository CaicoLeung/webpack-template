export const createCtx = (containerSelector: string, width: number, height: number) => {
  const container = document.querySelector(containerSelector);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.style.borderWidth = '1px';
  canvas.style.borderStyle = 'solid';
  canvas.style.borderColor = 'red';
  container.appendChild(canvas);
  return canvas.getContext('2d');
};
