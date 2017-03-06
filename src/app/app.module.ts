import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MangaEdenService} from './service/manga-eden.service';
import { MainComponent } from './panel/main/main.component';
import { MangaListComponent } from './panel/manga-list/manga-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MangaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [MangaEdenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
