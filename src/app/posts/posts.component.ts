import { Component, OnInit } from '@angular/core';
// import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private pageHeader = 'Posts';

  characters = [
    {id: 1, name: 'Angular2+', username: 'Bret', email: 'Sincere@april.biz'},
    {id: 2, name: 'ReactJS', username: 'Antonette', email: 'Shanna@melissa.tv'},
    {id: 3, name: 'NodeJS', username: 'Samantha', email: 'Nathan@yesenia.net'},
    {id: 4, name: 'Javascript', username: 'Karianne', email: 'Julianne.OConner@kory.org'},
    {id: 5, name: 'Jquery', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca'},
    {id: 6, name: 'Boostrap', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info'},
    {id: 7, name: 'HTML5', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz'},
    {id: 8, name: 'CSS3', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me'},
    {id: 9, name: 'SCSS', username: 'Delphine', email: 'Chaim_McDermott@dana.io'},
    {id: 10, name: 'Kishore', username: 'Kishore', email: 'Kishore@dana.io'}
  ];

  posts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }

}
