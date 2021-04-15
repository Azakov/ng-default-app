import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RequestService {
    constructor(private _httpClient: HttpClient) {}
    private _cahche = {};

    public get(url: string, cahceName?: string): Observable<any> {
        if (this._cahche[cahceName]) {
            return of(this._cahche[cahceName]);
        }
        return this._httpClient.get(url, { observe: 'response' });
    }

    public post(data: any, url: string, cacheName?: string): Observable<any> {
        return this._httpClient.post(data, url, { observe: 'response' });
    }

}
