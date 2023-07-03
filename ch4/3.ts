class Collection<HD> {
  data: HD[] = []
  public push(...items: HD[]) {
    this.data.push(...items)
  }

  public shift(): HD | undefined {
    return this.data.shift()
  } 
}

const numberCollection = new Collection<number>()
numberCollection.push(1,2,3,4,5)

console.log(numberCollection.shift());

const stringCollection = new Collection<string>()
stringCollection.push('123','1','232')


type User = {
  name: string,
  age: number
}

const userCollection = new Collection<User>()
let user1: User = {name: 'chen', age: 18}
let user2: User = {name: 'chen2', age: 20}
userCollection.push(user1, user2)
console.log(userCollection.shift());
