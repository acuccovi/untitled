import {Component} from '@angular/core';
import {HttpBinJsonResponse} from './http-bin-json-response';
import {HttpClient} from '@angular/common/http';
import {HttpBinJsonResponseSlideshow} from './http-bin-json-response-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  slideshow: HttpBinJsonResponseSlideshow;

  constructor(private http: HttpClient) {
    http.get('https://httpbin.org/json').subscribe((res: HttpBinJsonResponse) => {
      console.log(res);
      this.slideshow = res.slideshow;
    });
  }
}
