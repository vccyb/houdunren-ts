
class User {
  public name: string
  public age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
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

console.log(hd.name);


export {}