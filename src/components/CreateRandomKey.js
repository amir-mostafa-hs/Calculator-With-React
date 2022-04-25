const ranKey = () => {
  const randomNumber = Number(String(Math.random()).slice(2));
  const getDateNumber = Date.now();
  const convertString = `${randomNumber}${getDateNumber}`;
  const createKey = [];
  for (let index = 0; index < convertString.length; index += 2) {
    const num = Number(convertString.substring(index, index + 2));
    createKey.push(
      num >= 48
        ? String.fromCharCode(num)
        : convertString.substring(index, index + 2)
    );
  }
  return createKey.join("");
};

export default ranKey;
