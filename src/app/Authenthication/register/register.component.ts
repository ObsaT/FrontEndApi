import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelregister = new EventEmitter();
  model: any = {};
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }
Register()
{
this.service.Register(this.model).subscribe(
  res => {
console.log('registered successfully');
  },
  err => {
    console.log(err);
  }
);
}
Cancel(){
this.cancelregister.emit(false);
}
}
