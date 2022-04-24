import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {

  showPassword  = false;
  showPassword1 = false;
  showPassword2 = false;


  passwordToggleIcon  = 'eye';
  passwordToggleIcon2  = 'eye';
  passwordToggleIcon3  = 'eye';

  constructor() { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  
    if (this.passwordToggleIcon === 'eye' ) {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  togglePassword2(): void {
    this.showPassword1 = !this.showPassword1;


    if (this.passwordToggleIcon2 === 'eye' ) {
      this.passwordToggleIcon2 = 'eye-off';
    } else {
      this.passwordToggleIcon2 = 'eye';
    }
  }

  togglePassword3(): void {
    this.showPassword2 = !this.showPassword2;

    if (this.passwordToggleIcon3 === 'eye' ) {
      this.passwordToggleIcon3 = 'eye-off';
    } else {
      this.passwordToggleIcon3 = 'eye';
    }
  }
 

}
