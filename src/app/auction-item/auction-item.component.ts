import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.component.css']
})
export class AuctionItemComponent implements OnInit {

  constructor() { }

  itemTitle = "";
  itemSubtitle = ""
  itemContent = ""
  ngOnInit(): void {
    this.itemTitle = "New Auction Item"
    this.itemSubtitle = "New Auction Subtitle"
    this.itemContent = "This item is new and up for sale.  You should buy it with your hard earned cash, you deserve it!  Not to say i am not biased but it would be nice if you bought this immediately"
  }

  setCardInfo(title: string, subtitle: string, content: string): void  { 
    this.itemTitle = title;
    this.itemSubtitle = subtitle;
    this.itemContent = content;
  }

}


