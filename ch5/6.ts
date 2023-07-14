

const MessageDecorator: ClassDecorator = (target: Function) => {
  target.prototype.message = (content: string) => {
    console.log(content);
    
  }
}


@MessageDecorator
class LoginController {
  public login() {
    console.log('登陆业务处理');
    this.message('122')
  }
}

new LoginController().login()