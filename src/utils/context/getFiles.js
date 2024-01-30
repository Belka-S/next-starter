export const getFiles = context => {
  let arr = [];

  context.keys().forEach((item, id) => {
    const name = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(`./`, '')
      .replace(`${id + 1}-`, '')
      .replace(`0${id + 1}-`, '');

    const file = context(item).default;

    arr.push({ id, name, file });
  });

  arr = arr.filter(({ name }) => !name.includes('src/'));

  return arr;
};
