import { Observable } from 'rxjs';
import { CatalogoFilmesService } from './../services/catalogo-filmes.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    public CatalogoFilmesService: CatalogoFilmesService, private router: Router) {
  }

  title = 'Home';
  public url_img = 'https://image.tmdb.org/t/p/w500';
  public data: any | any[];
  public arrPosters: any[] = [];


  public async ngOnInit() {
    this.loadInicial();

  }

  async loadInicial() {
    await this.CatalogoFilmesService.getTreding().subscribe(filmes => {
      this.data = filmes.results;
      console.log('teste -> ', this.data);
    });

  }

  async search($event: any) {
    console.log($event);
  }

}


