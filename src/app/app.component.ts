import { Component, OnInit } from '@angular/core';
import { StaticService } from "./services/static.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "../app/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testCrud';
  values;
  userName;
  datas;

  registerForm: FormGroup;
  submitted = false;

  constructor(
    public staticServ: StaticService,
    private formBuilder: FormBuilder,
    private api: ApiService
  ){}

  ngOnInit() {
    console.log("valores",this.staticServ.values);
    this.values = this.staticServ.values;
    this.getDataServer()

    this.registerForm = this.formBuilder.group({
      nombre: ['',Validators.required],
      edad: ['',Validators.required],
      correo: ['',[Validators.required, Validators.email]]
    })    

    
  }

  get f (){
    return this.registerForm.controls
  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    console.log("Datos registrados",JSON.stringify(this.registerForm.value));
    
  }

  edirUser(item){
    console.log("modal");
    this.registerForm.setValue({
      nombre:item.nombre,
      edad:item.edad,
      correo:item.correo
    })
  }

  deleteUser(item){
    this.userName = item.nombre
  }

  getDataServer(){
    this.api.get().subscribe( res => {
      console.log("respuesta server", res);
      this.datas = res;
    })
  }
}
