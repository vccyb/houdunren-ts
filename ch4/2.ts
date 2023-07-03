
type hasLength = {
  length: number
}

function getLength<T extends hasLength>(arg: T): number {
  return arg.length
}

console.log(getLength('houdunren.com'));
console.log(getLength(['123','456']));
// console.log(getLength(18));

