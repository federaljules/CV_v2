import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router){}

    signOut(){
      this.afAuth.auth.signOut().then(() => {     //Sign out function for icon in toolbar
       this.router.navigateByUrl('/login');       
      });
    }
}
