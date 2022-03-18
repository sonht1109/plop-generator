// import {NodePlopAPI} from 'plop' 
// import componentGenerator from './component'

// export default function plop (plop) {
//   plop.setGenerator('component', componentGenerator)
// }
const componentGenerator = require("./components/index.js");

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
};
