import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router){}

    signOut(){
      this.afAuth.auth.signOut().then(() => {                     //Sign out function for icon in toolbar
       this.router.navigateByUrl('/login');
      });
    }
}
