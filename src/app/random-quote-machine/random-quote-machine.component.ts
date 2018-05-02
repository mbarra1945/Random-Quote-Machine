import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

export interface randomResponse {
  author: string;
  id: number;
  quote: string;
  permalink: string;
}

var colors = [
  '#8b0000', '#83ffa4', '#6897bb', '#0099cc', '#3399ff',
  '#ff7f50', '#f0bff4', '#ffab7f', '#fbcf9c', '#f4bfde',
  '#f4d5bf', '#52f8ab', '#f091e7', '#8adcbb', '#16ba78'
];

@Component({
  selector: 'app-random-quote-machine',
  templateUrl: './random-quote-machine.component.html',
  styleUrls: ['./random-quote-machine.component.css']
})
export class RandomQuoteMachineComponent implements OnInit {
  data: randomResponse;
  loading: boolean;

  twitter_link: string;

  constructor(private http: Http) { }

  ngOnInit() {
    this.makeRequest();
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://quotes.stormconsultancy.co.uk/random.json')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;

      this.twitter_link = `https://twitter.com/intent/tweet?hashtags=quotes&related=encofreecodecamp&text=${encodeURI(this.data.quote + ' - ' + this.data.author)}`;
      var color = Math.floor(Math.random() * colors.length);
      $('html body').animate({
        backgroundColor: colors[color]
      }, 1000);
      $('.buttons a').animate({
        backgroundColor: colors[color]
      }, 1000);
      $('.buttons button').animate({
        backgroundColor: colors[color]
      }, 1000);
    });
  }
}
