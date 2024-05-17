import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,FormsModule,    HttpClientModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  companyName: string = '';
  loading: boolean = false;
  logos: any[] = [];
  skeletonArray = Array(3).fill(0); // 3 Skeleton card

  constructor(private http: HttpClient) { }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.loading = true;
    this.logos = [];

    const headers = new HttpHeaders({
      'Accept': '*/*',
      'scheme':'https',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9,tr-TR;q=0.8,tr;q=0.7',
      'access-control-allow-origin':'*',
      'Content-Type': 'application/json',
      'Content-Length':'29',
       'Origin': 'https://business-name-backend.vercel.app',
      'Referer': 'https://business-name-backend.vercel.app/docs',
      'Priority':'u=1, i',
      'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"macOS"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Cookie':' _dd_s=logs=1&id=7cb9993d-adba-4a0f-bab8-9085a7afa281&created=1715962053816&expire=17159635096',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    });

    this.http.post('https://business-name-backend.vercel.app/business-name', { description: this.companyName }, { headers })
      .subscribe((response: any) => {
        this.logos = response.data;
        this.loading = false;
      });
  }
}
