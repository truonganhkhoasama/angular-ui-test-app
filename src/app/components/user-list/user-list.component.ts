import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: string[] = []; // Accept users as input

  // New method to handle user addition
  onUserAdded(newUser: string) {
    this.users.push(newUser);
  }
}