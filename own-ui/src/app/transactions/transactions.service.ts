import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { environment } from '../../environments/environment';
// import { resolve } from 'dns';


@Injectable()
export class TransactionService {
    apiUrl = environment.apiUrl;
    constructor(private http: Http) { }
    //http://localhost:3010/users
    getTransactions() {
        return new Promise((resolve, reject) => {
            let url = `${this.apiUrl}transactions`;
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

    addTranstaction(data) {
        return new Promise((resolve, reject) => {
            let url = `${this.apiUrl}transactions`;
            this.http.post(url,data)
            .toPromise()
            .then(res=>{
                resolve(res.json())
            },msg=>{
                reject(msg)
            })
        })
    }
}