import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authenticate } from '@async/auth';


@Component({
  selector: 'async-login-form',
  template: `
    <mat-card>
        <mat-card-title>Login</mat-card-title>
        <mat-card-content>
            <form fxLayout="column" fxLayoutAlign="center none">
                <mat-form-field>
                    <input matInput placeholder="username" type="text" #username>
                </mat-form-field>
                <mat-form-field>
                    <input matInput placeholder="password" type="text" #password>
                </mat-form-field>
            </form>
            <button mat-raised-button (click)="login({username:username.value, password:password.value})">login</button>
        </mat-card-content>
    </mat-card>
  `,
  styles: [`
  `],
})
export class LoginFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Authenticate>();

  constructor() {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
