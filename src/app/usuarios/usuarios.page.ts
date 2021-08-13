import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  items = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        this.items = res['results'];
        console.log(this.items)
    })
  }

}
