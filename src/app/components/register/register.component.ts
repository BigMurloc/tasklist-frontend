import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  register(loginForm: NgForm): void {
    this.userService.save(loginForm).subscribe();
  }
}
