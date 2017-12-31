import { Injectable } from '@angular/core';
import { Http ,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataCenterService {
  private requestOptions = new RequestOptions({ withCredentials: true });
  private server_api = environment.movies_api_server;
  private key_api = environment.movies_api_key;

  constructor( private http: Http ) { }

  private handleError (error: Response | any, name: string, toastrTitle?: string) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    let err: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      err = body.m_message || JSON.stringify(body);
      errMsg = `${body.status} - ${body.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.results || { };
  }


  public getMovieData() {
    const url = `${this.server_api}/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${this.key_api}`;

    return this.http.get(url)
                    .map(data => this.extractData(data))
                    .catch(err => this.handleError(err, 'get movie data', 'Get moviedata'));
  }

}
