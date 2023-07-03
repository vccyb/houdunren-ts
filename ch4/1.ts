



// let a: string = 'houdunren.com'
// console.log(a);


function dump<T>(arg: T): T {
  return arg
}

let x = dump('qqq')
let y = dump(true)

let y2 = dump<boolean>(true)


export {}