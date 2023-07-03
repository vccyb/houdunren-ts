
class User {
  name: string
  age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }

  info() {
    return `${this.name}的年龄是：${this.age}`
  }
}

const hd = new User("chen",2)
console.log(hd.info());

const users: User[] = []

users.push(hd)

console.log(users);

export {}
