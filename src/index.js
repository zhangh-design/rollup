/* import foo from './foo.js';
export default function () {
  console.log(foo);
} */
import { version } from '../package.json';

export default function () {
  const hello = 'hello world';
  const aFruitList = ['apple', 'banana', 'pear', 'pineapple'];
  for (let [index, elem] of aFruitList.entries()) {
    console.log(index, elem);
  }
  const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('hello-promise');
    }, 3000);
  });
  p1.then((result) => console.warn(result));
  console.log('version ' + version + hello);
}
