import {Component} from '@angular/core';

export class LoginForm {
  strUserName: string;
  strUserPassword: string;
}

const users: LoginForm[] = [
  {strUserName: '11', strUserPassword: '123'},
  {strUserName: '12', strUserPassword: '123'},
  {strUserName: '13', strUserPassword: '123'},
  {strUserName: '14', strUserPassword: '123'},
  {strUserName: '15', strUserPassword: '123'},
  {strUserName: '16', strUserPassword: '123'}
];

function login() {
  alert();
}

@Component({
  selector: 'app-root',
  // templateUrl: './login/login.html',
  styleUrls: ['./base.css', './common.css', './login/login.css'],
  template: `<login></login>`
})

export class AppComponent {
  title = 'My First Angular App';
  hero = 'Windstorm';
  users = users;
  loginForm = users[0];
  login = login;
}


