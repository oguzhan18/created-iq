import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoService } from './services/content.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './content.component.html',
  providers: [LogoService],

  styleUrl: './content.component.scss'
})
export class ContentComponent {
  companyName: string = '';
  loading: boolean = false;
  logos: any[] = [];
  skeletonArray = Array(3).fill(0); // 3 Skeleton card

  constructor(private logoService: LogoService) { }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.loading = true;
    this.logos = [];

    this.logoService.generateLogo(this.companyName)
      .subscribe(
        (response: any) => {
          this.logos = response.data;
          this.loading = false;
        },
        (error: any) => {
          console.error('Error:', error);
          this.loading = false;
        }
      );
  }
}
