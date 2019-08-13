import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postRemoto: any;
// arreglo de objetos
  postLocal = [
    {
      titulo: 'Titulo1',
      cuerpo: 'changalalay hermosaaaaaaa'
  },
  {
    titulo: 'Titulo2',
    cuerpo: 'changalalay hermosaaaaaaa'
},
{
  titulo: 'Titulo3',
  cuerpo: 'changalalay hermosaaaaaaa'
}
];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postRemoto = this.dataService.getPosts();
    // this.dataService.getPosts().subscribe(posts => {
      // console.log(posts);
      // this.postRemoto = posts;
    // });
  }

  onClickPadre(id) {
    console.log(id);
  }

}
