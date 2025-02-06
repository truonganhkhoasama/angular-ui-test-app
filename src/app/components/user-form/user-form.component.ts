import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  newUser: string = '';

  @Output() userAdded = new EventEmitter<string>();

  addUser() {
    if (this.newUser) {
      this.userAdded.emit(this.newUser);
      this.newUser = ''; // Clear the input after adding
    }
  }
}
