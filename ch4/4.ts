
class User<T> {
  user = null
  public constructor(private _user: T) {
  }

  public get() {
    return this._user
  }
}

interface UserInterface {
  name: string,
  age: number
}

const obj = new User<UserInterface>({name: 'chen', age: 12})

console.log(obj.get().age)

export {}