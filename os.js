const _ = require("lodash");

const array = [1,[2,[3,[4,]]]];
const data = _.flattenDeep(array);
console.log(data);
