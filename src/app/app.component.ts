import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ui-test-app'; // {{ edit_1 }}
  users: string[] = ['Alice', 'Bob', 'Charlie'];

  onUserAdded(newUser: string) {
    this.users.push(newUser);
  }
}
