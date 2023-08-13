import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerComponent implements OnInit {

  categories: any[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.get(environment.BASE_API_PATH + "Category/GetAll").subscribe(res => {
      this.categories = res.data;
    });
  }

}
