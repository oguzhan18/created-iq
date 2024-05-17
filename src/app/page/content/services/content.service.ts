import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private apiUrl = 'https://business-name-backend.vercel.app/business-name';


  constructor(private http: HttpClient) { }

  generateLogo(companyName: string): Observable<any> {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://business-name-backend.vercel.app/business-name';
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Content-Length': '<calculated when request is sent>',
      'Host': '<calculated when request is sent>',

      'Accept': '*/*',
      'scheme': 'https',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9,tr-TR;q=0.8,tr;q=0.7',
      'access-control-allow-origin': '*',


      'Connection': 'keep-alive'
    });

    return this.http.post(proxyUrl + targetUrl, { description : companyName }, { headers });

  }
}
