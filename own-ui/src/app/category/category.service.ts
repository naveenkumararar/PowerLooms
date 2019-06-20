import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class CategoryService {
  apiUrl = environment.apiUrl;

  constructor(private http: Http) { }

  getCategory() {
    return new Promise((resolve, reject) => {
      let url = `${this.apiUrl}category`;
      this.http.get(url)
        .toPromise()
        .then(res => {
          resolve(res.json())
        },
          msg => {
            reject(msg)
          });
    })
  }

  addCategory(data) {
    return new Promise((resolve, reject) => {
      let url = `${this.apiUrl}category`;
      this.http.post(url, data)
        .toPromise()
        .then(res => {
          resolve(res.json())
        }, msg => {
          reject(msg)
        })
    })
  }
}
