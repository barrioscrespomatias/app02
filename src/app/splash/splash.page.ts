import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(()=>{
        this.router.navigateByUrl('');
    },6000);

  }

  ionViewDidEnter(){
    SplashScreen.hide();
  }

  ngOnInit() {
  }

}
