// https://github.com/rollup/plugins/blob/master/util/test.js
const getCode = async (bundle, outputOptions, allFiles = false) => {
  const { output } = await bundle.generate(
    outputOptions || { format: 'iife' },
  );
  if (allFiles) {
    return output.map(({ code, fileName, source, map }) => {
      return { code, fileName, source, map };
    });
  }
  const [{ code }] = output;
  return code;
};

module.exports = {
  getCode,
};
