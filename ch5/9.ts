
const showDecorator: MethodDecorator = (
  target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor ) => {
 // console.log(args[2].value());

 // args[2].value = () => {
   // console.log('改造')
 // }

 descriptor.value = () => {
   console.log('houdurne');s
 }
 
}

class User  {
 @showDecorator
 public static  show() {
   console.log('12');
   
 }
}

User.show()