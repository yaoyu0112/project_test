import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // 假設在這裡處理登入邏輯，並在登入成功後導航到平台頁面
    if (this.loginSuccessful()) {
      this.router.navigate(['/main/platform']);
    }
  }

  private loginSuccessful(): boolean {
    // 實際登入邏輯判斷
    return true; // 或者根據實際情況返回 true 或 false
  }

}
