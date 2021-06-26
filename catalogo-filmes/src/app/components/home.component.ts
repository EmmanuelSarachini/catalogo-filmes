import { Observable } from 'rxjs';
import { CatalogoFilmesService } from './../services/catalogo-filmes.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


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

   await this.CatalogoFilmesService.search_('Alien').subscribe(filmes => {
      this.data = filmes.results;
      console.log('teste -> ', this.data);
      if (this.data !== null) {
        this.data.forEach((item: { poster_path: String; }) => {
          this.arrPosters.push(item.poster_path);
        });
        console.log(this.arrPosters);
      }
    });

  }

}
