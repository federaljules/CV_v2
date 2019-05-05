import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { AlertController } from '@ionic/angular'
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nextPage=TabsPage;
  username: string = ""
  password: string = ""
  constructor(public afAuth: AngularFireAuth,
    public alert: AlertController, 
    public router:Router,
    public menuCtrl: MenuController,
    public toastController: ToastController) { 
    
    }
    ngOnInit() { 
      this.menuCtrl.enable(false); //Login page does not let user use side menu
     
     }

  go(){
    this.router.navigate(['register'])  //Creating redirect for register button to go to register page
  }


  async login(){
    const {username, password} = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)  //Login system with firebase, gets username and password 
                                                                                                        //from input fields and checks if they match any username and password
      this.showToastSucc("Success!", "Login is succesfull") //If login successfull show green toast and redirect to first tab
      this.router.navigate(['/tabs/tab2'])
    }catch(err) {
      console.dir(err)
      if(err.code == "auth/user-not-found"){                //If login not successfull show red toast with error message
        this.showToastErr("Error!", "User not found")
      }
      else if(err.code == "auth/wrong-password"){           //If login not successfull show red toast with error message
        this.showToastErr("Error!", "Password is invalid!")
      }
    }
  }

  async showToastErr(header: string, message: string){
    const toast = await this.toastController.create({      //Create error toast 
      header,
      message,
     position: 'top',
     cssClass: "toast-err",

    })
    await toast.present()
    setTimeout(()=>{                                       // Set when toast dissapears from screen 
      toast.dismiss();
  }, 2500);
  }

  async showToastSucc(header: string, message: string){
    const toast = await this.toastController.create({      //Create success toast 
      header,
      message,
     position: 'top',
     cssClass: "toast-succ",

    })
    await toast.present()                                 // Set when toast dissapears from screen 
    setTimeout(()=>{
      toast.dismiss();
  }, 3500);
  }

 
}
