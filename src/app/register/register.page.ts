import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = ""
  password: string = ""
  cpassword: string = ""
  constructor(public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public menuCtrl: MenuController,
    public toastController: ToastController) { }

    ngOnInit() { 
      this.menuCtrl.enable(false);      //Register page does not let user use side menu
     }

  async register() {
    const {username, password, cpassword} = this          //Register system with firebase, check is passwords match
    if(password !== cpassword){
      this.showToastErr("Error!", "Passwords don't match")    //If passwords do not match show red toast with error message
      return console.error("Passwords don't match")
    }
    
    try{
    const res = await this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(username + '@gmail.com',password);
    console.log(res);
    this.showToastSucc("Success!", "Your registration is successfull.")
    this.router.navigate(['/login'])                                    //If passwords match and register information is correct show green toast with error message
  }catch(error) {
    console.dir(error);
    if(error.code == "auth/weak-password"){                           //If password too weak, show red toast and error message
    this.showToastErr("Error!", "Current password is too weak")
  }
  if(error.code == "auth/invalid-email"){
    this.showToastErr("Error!", "Invalid e-mail address")             //If invalid email address, show red toast and error message
  }
  }
  }


  async showToastErr(header: string, message: string){
    const toast = await this.toastController.create({         //Create error toast 
      header,
      message,
     position: 'top',
     cssClass: "toast-err",

    })
    await toast.present()                                    // Set when toast dissapears from screen 
    setTimeout(()=>{
      toast.dismiss();
  }, 2500);
  }
  async showToastSucc(header: string, message: string){       //Create success toast 
    const toast = await this.toastController.create({
      header,
      message,
     position: 'top',
     cssClass: "toast-succ",

    })
    await toast.present()
    setTimeout(()=>{                                         // Set when toast dissapears from screen 
      toast.dismiss();
  }, 3500);
  }


}
