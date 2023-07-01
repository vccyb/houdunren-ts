let a: string = "houdunren.com"

let b: "xxx" = 'xxx'
b = "xxx"
const c = "后盾"

let d: true

let e = true as const

const arr = ['123',456] as const

let x1 = "xxx"
let x2 = 123
const arr2 = [x1, x2] as const


const obj = {
  name: "chenyubo",
  other: x2
} as const
export {}