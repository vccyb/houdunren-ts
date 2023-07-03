
 
 class Test {
  private static instance: null | Test = null

  constructor(public name: string) {
    this.name = name
    console.log('go');
    
  }

  public static make(name: string): Test {
    if(Test.instance === null) {
      Test.instance = new Test(name)
    }
    return Test.instance
  }
 }

 let obj1 = Test.make('chen')
 let obj2 = Test.make('chen2')

 let obj3 = Test.make('chen3')

 console.log(obj1);
 console.log(obj2);
 console.log(obj3);
 
 
 


