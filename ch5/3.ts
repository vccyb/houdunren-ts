
const moveDecorator: ClassDecorator = (target: Function) => {
  // console.log(target);
  target.prototype.getPosition = (): {x:number, y:number} => {
    return {x: 100, y: 200}
  }
  
}

@moveDecorator
class Tank {
   
}

const t = new Tank()
console.log(
  (t as any).getPosition()
);

@moveDecorator
class Player {

}

const p = new Player()
console.log(
  (<any>p).getPosition()
);
