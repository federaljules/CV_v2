import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(public menuCtrl: MenuController,
    public afAuth: AngularFireAuth,
    public router: Router){}

  ngOnInit() { 
    this.menuCtrl.enable(true);                   //Enable side menu in tabs only, not in register and login pages
   }
}
