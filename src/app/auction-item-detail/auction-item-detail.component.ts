import { Component, OnInit } from '@angular/core';
import { AuctionItemService } from '../auction-item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item'
@Component({
  selector: 'app-auction-item-detail',
  templateUrl: './auction-item-detail.component.html',
  styleUrls: ['./auction-item-detail.component.css']
})
export class AuctionItemDetailComponent implements OnInit {
  
  currItem: Item;
  constructor(
    private itemService: AuctionItemService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItemDetail();
    this.getItemDetail();
  }

  getItemDetail(): void {
    var itemID = this.route.snapshot.paramMap.get('id')
    console.log(itemID)
    this.itemService.getItem(itemID)
                    .subscribe(item => this.currItem = item)
  }

}
