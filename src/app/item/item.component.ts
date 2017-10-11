import { Component, Input, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  @Input() item;

  constructor(private _hackerNewsAPIService: HackernewsApiService) {}

  ngOnInit() {
    if (this.itemID){
      this._hackerNewsAPIService.fetchItem(this.itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + this.itemID));
    }
  }

}
