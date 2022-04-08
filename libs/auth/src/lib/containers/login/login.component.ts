import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { Authenticate } from '@async/auth';

@Component({
  selector: 'async-login',
  template: `
    <async-login-form (submit)="login($event)"></async-login-form>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login(authenticate:any) {
    console.log(authenticate);
  }
}
