import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { environment } from '../../environments/environment';
// import { resolve } from 'dns';


@Injectable()
export class UserService {
    apiUrl = environment.apiUrl;
    constructor(private http: Http) { }
    search(data) {
        let promise = new Promise((resolve, reject) => {
            let apiURL = `${this.apiUrl}getFeedRateHistoryReport?startDate=${data.start}&endDate=${data.end}&machineId=${data.machine}&shift=${data.shift}`;
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => { // Success
                        resolve(res.json());
                    },
                    msg => {
                        // Error
                        reject(msg);
                    }
                );
        });
        return promise;
    }

    //http://localhost:3010/users
    getUsers() {
        return new Promise((resolve, reject) => {
            let url = `${this.apiUrl}users`;
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

    addUser(data) {
        console.log('data---',data)
        return new Promise((resolve, reject) => {
            let url = `${this.apiUrl}users`;
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