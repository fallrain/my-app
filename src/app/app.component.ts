import {Component} from '@angular/core';

export class LoginForm {
  strUserName: string;
  strUserPassword: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './login/login.html',
  styleUrls: ['./login/login.css'],
  /*template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`*/
})
export class AppComponent {
  title = 'My First Angular App';
  hero = 'Windstorm';
  loginForm: LoginForm = {
    strUserName: 'zhang',
    strUserPassword: ''
  };
}


