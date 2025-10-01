import {Component, inject} from '@angular/core';
import {Auth} from '../../services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
})
export class Login {

  private authService : Auth = inject(Auth)
  private router: Router = inject(Router);

  onLogin(){
    this.authService.login();

    this.router.navigate(['/dashboard'])
  }

}
