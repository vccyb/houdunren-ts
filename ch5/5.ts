


const moveDecorator: ClassDecorator = (target: Function) => {
  // console.log(target);
  target.prototype.getPosition = (): {x:number, y:number} => {
    return {x: 100, y: 200}
  }
  
}


const MusicDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = (): void => {
    console.log('播放音乐');
    
  }
}
@MusicDecorator
@moveDecorator
class Tank {
   
}

const t = new Tank()
console.log(
  (t as any).getPosition()
);
t.playMusic()

@moveDecorator
class Player {

}

const p = new Player()
console.log(
  (<any>p).getPosition()
);


// moveDecorator(Tank)

export {}