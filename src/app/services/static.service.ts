import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  public values = [
    {
      nombre:"nombre 1",
      edad:"12",
      correo:"asdf@asdf.com"
    },
    {
      nombre:"Nombre 2",
      edad:"12",
      correo:"asdf@asdf.com"
    },
    {
      nombre:"Nombre 3",
      edad:"12",
      correo:"asdf@asdf.com"
    }
  ]

  constructor() { }

  
}
