import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show-list-task',
  templateUrl: './show-list-task.component.html',
  styleUrls: ['./show-list-task.component.css'],
})
export class ShowListTaskComponent implements OnInit, OnDestroy {
  users!: Users[];
  toggle!: boolean;
  idChangeSub!: Subscription;
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.idChangeSub = this.userService.usersChanged.subscribe(
      (users: Users[]) => {
        this.users = users;
      }
    );
  }

  // onUpdate(i: any, newuser: Users) {
  //   console.log(i, newuser);
  // }
  onFinish(i: any) {
    // if
    this.users[i].complet = !this.users[i].complet;
    // this.items[index].done = !this.items[index].done;
    // console.log('this.checked', this.checked);
  }
  onDelete(i: number) {
    this.userService.deleteUser(i);
    // this.router.navigate(['/AddTask']);
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }
}
