import { Observable } from 'rxjs';
import { CatalogoFilmesService } from './../services/catalogo-filmes.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    public catalogoFilmesService: CatalogoFilmesService, private router: Router) {
  }

  stringSearch = '';

  public url_img = 'https://image.tmdb.org/t/p/w500';
  public data: any | any[];
  public arrPosters: any[] = [];


 ngOnInit() {
    this.loadInicial();
  }

  async loadInicial() {
    await this.catalogoFilmesService.getTreding().subscribe(filmes => {
      this.data = filmes.results;
      console.log('teste -> ', this.data);
    });

  }

   search() {
    this.data = [];
     this.catalogoFilmesService.search_(this.stringSearch).subscribe(filmes => {
      this.data = filmes.results;
      console.log('busca -> ', this.data);
    });
  }

}


