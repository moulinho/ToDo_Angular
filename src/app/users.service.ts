import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersChanged = new Subject<Users[]>();
  private users: Users[] = [
    new Users('tache', 'debute', 'homme', false),
    new Users('tache', 'coco', 'femme', false),
  ];

  constructor() {}
  getUsers() {
    return this.users.slice();
  }
  addUsers(user: Users) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }
  updateUser(index: number, newUser: Users) {
    this.users[index] = newUser;
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}
