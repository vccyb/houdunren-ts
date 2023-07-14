
const highlightDecorator: MethodDecorator = (
  target: Object, 
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor ) => {
  
  const method = descriptor.value
  descriptor.value = () => {
    return `<div style="color:red;">${method()}</div>`
  }

 
}

class User  {
 @highlightDecorator
 public response() {
   return '1234'
 }
}

console.log(
  new User().response()
);

export {}