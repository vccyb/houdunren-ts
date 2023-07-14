

const MusicDecoratorFactory = (type: string): ClassDecorator => {
  console.log(type);
  
  return (target: Function) => {
    target.prototype.playMusic = (): void => {
      console.log('播放音乐');
      
    }
  }
}


@MusicDecoratorFactory('tank')
class Tank {

}

const t = new Tank()
t.playMusic()

export {}