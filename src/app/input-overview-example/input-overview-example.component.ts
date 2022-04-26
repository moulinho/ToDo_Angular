import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-input-overview-example',
  templateUrl: './input-overview-example.component.html',
  styleUrls: ['./input-overview-example.component.css'],
})
export class InputOverviewExampleComponent {
  users!: UsersService[];
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value);
    this.usersService.addUsers(f.value);
    this.router.navigate(['/showTask']);
  }
}
