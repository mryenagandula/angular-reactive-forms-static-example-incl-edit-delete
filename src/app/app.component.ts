import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public form: FormGroup;
  public registeredUsers = [
    {
      id:1,
      firstName: 'TEST',
      lastName: 'TEST',
      email: 'test@gmail.com',
      phone: '1122334455',
      company: 'test',
      gender: 'Male',
      dob: '1990-01-01',
      password: 'test1122',
      confirmPassword: 'test1122'
    },
    {
      id:2,
      firstName: 'TEST12',
      lastName: 'TEST12',
      email: 'test12@gmail.com',
      phone: '1122004455',
      company: 'test112',
      gender: 'Male',
      dob: '1990-01-01',
      password: 'test1100',
      confirmPassword: 'test1100',
      edited:true,
    },
    {
      id:3,
      firstName: 'TEST335',
      lastName: 'TEST3356',
      email: 'test356@gmail.com',
      phone: '1122008899',
      company: 'test2563',
      gender: 'Male',
      dob: '1990-01-01',
      password: 'test2233',
      confirmPassword: 'test223',
      edited:true,
    }
  ];

  constructor(private formBuilder:FormBuilder){
    this.formInit();
  }

  public ngOnInit(): void {
      
  }

  public formInit():void {
    this.form = this.formBuilder.group({
      firstName : [''],
      lastName:[''],
      email:[''],
      phone:[''],
      company:[''],
      gender:[''],
      dob:[''],
      password:[''],
      confirmPassword:[''],
      id:[null]
    });
  }

  public submitForm():void{  
    const user = this.form.getRawValue();
    if(user.id !== null){
      const users = this.registeredUsers.filter(({id})=> id !== user.id);
      users.push(user);
      this.registeredUsers = users;
    }
    else{
      this.form.get('id').setValue(this.registeredUsers.length+1);
      this.registeredUsers.push(this.form.getRawValue());
    }
    this.form.reset();
  }

  public editUser(index:number):void{
    const user = this.registeredUsers[index];
    this.form.patchValue(user);
  }

  public deleteUser(index:number):void{
    this.registeredUsers.splice(index,1);
  }
}
