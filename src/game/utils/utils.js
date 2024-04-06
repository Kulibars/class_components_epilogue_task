export const checkDraw = (copyField) => {
  let x = copyField.every((el) => {
    return el !== "";
  });
  console.log(x);
  return x;
};
