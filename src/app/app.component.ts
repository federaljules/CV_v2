import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPage = [        //Here I create objects and icons to left side navigation with routes
    {
      title: 'Personal Profile',
      url: '/tabs/tab2',
      icon: 'person'
    },

    {
      title: 'Technical skills',
      url: '/tabs/tab3',
      icon: 'code-working'
    },

    {
      title: 'Soft skills',
      url: '/tabs/tab4',
      icon: 'people'
    },
    {
      title: 'Personal Projects',
      url: '/tabs/tab8',
      icon: 'folder-open'
    },

    {
      title: 'Team Projects',
      url: '/tabs/tab6',
      icon: 'folder'
    },
    {
      title: 'Extra activities',
      url: '/tabs/tab7',
      icon: 'walk'
    },
    {
      title: 'Contact information',
      url: '/tabs/tab5',
      icon: 'mail'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,


  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
