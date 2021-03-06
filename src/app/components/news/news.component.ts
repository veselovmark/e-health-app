import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../shared/services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any;
  show: number = 6;
  allnews: number;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.firebaseService.getNews()
      .subscribe(news => {
        //console.log(news);
        this.news = news;
        this.allnews = news.length;
      })
  }


}
