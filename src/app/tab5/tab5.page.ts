import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router){}

    signOut(){
      this.afAuth.auth.signOut().then(() => {                   //Sign out function for icon in toolbar
       this.router.navigateByUrl('/login');
      });
    }

}
