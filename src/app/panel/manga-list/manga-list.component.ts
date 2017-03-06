import { Component, OnInit } from '@angular/core';
import { MangaEdenService } from '../../service/manga-eden.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  selectedItem: any;
  icons: string[];
  mangaList: Array<{ title: string, note: string, icon: string }>;

  constructor(public mangaService: MangaEdenService) {
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    // Let's populate this page with some filler content for funzies
    this.mangaList = [];
    try {
      var ml = await this.mangaService.loadMangaList();
      ml.manga.forEach((m) => {
        this.mangaList.push({
          title: m.t,
          note: m.i,
          icon: m.im
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

}
