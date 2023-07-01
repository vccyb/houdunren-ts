function hd() {
  let a = "houdunren.com"
  let b = (x: number, y: number): number => x + y
  return [a, b] as const
}


const [n, m] = hd() as [string, (x:number, y:number) => number]

// let res = (m as Function)(1, 2)


console.log(res);


export {}