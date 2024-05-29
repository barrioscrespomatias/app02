import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireService } from '../../services/angular-fire.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  public isLogged: boolean = false;
  isVertical = false;

  constructor(public angularFireService: AngularFireService, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      // Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches)
        this.isVertical = false;      
      else
        this.isVertical = true;  
    });
    this.checkLoggedIn();
  }

  async checkLoggedIn() {
    this.isLogged = await this.angularFireService.isLoggedIn();
  }

  SignIn() {
    this.angularFireService.SignIn(this.email?.value, this.password?.value);
    setTimeout(() => {
      this.form.controls['email'].setValue('');
      this.form.controls['password'].setValue('');
    }, 500);
  }

  GoogleAuth() {
    this.angularFireService.GoogleAuth();
  }

  SignUp() {
    this.angularFireService.SignUp(this.email?.value, this.password?.value);
  }

  AccesoRapido(mail: string, password: string) {
    this.email?.setValue(mail);
    this.password?.setValue(password);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.pattern(
          '^[a-zA-Z0-9\\s!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?]+$'
        ),
        Validators.minLength(4),
        Validators.required,
      ]),
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}