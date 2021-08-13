import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para saber la ruta actual
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  id: string;
  item: any;

  constructor(private activateRouter: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.paramMap.get('id');
    this.http.get('https://rickandmortyapi.com/api/character/' + this.id)
      .subscribe(res => {
        this.item = res;
    });
  }

}
