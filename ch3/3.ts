
class User {
  public name: string
  public age: number
  protected sex: number // 保护的 父子类独行
  constructor(n: string, a: number, s:number = 1) {
    this.name = n
    this.age = a
    this.sex = s
  }

  // 方法是在原型上
  public info() {
    return `${this.name}的年龄是：${this.age}`
  }
}

const hd = new User("chen",2)
console.log(hd.info());

const users: User[] = []

users.push(hd)

console.log(users);

console.log(hd);


export {}