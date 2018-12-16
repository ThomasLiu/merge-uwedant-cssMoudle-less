module.exports = path => {
  const uWebPath = path.match(/src(.*)/)[1].replace('.less', '');
  const arr = uWebPath
    .split('/')
    .map(a => a.replace(/([A-Z])/g, '-$1'))
    .map(a => a.toLowerCase());
  return `u_webant${arr.join('-')}-`.replace(/--/g, '-');
};
