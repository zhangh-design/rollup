/* import foo from './foo.js';
export default function () {
  console.log(foo);
} */
import { version } from '../package.json';

export default function() {
  // eslint-disable-next-line no-unused-vars
  const b = '';
  const hello = 'hello world';
  const aFruitList = ['apple', 'banana', 'pear', 'pineapple'];
  for (const [index, elem] of aFruitList.entries()) {
    console.log(index, elem);
  }
  const P1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('hello-promise');
    }, 3000);
  });
  P1.then(result => {
    return console.log(result);
  }).catch(error => {
    throw new Error(error);
  });
  console.log('version ' + version + hello);
}
