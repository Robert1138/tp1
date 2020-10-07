import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemDetailComponent } from './auction-item-detail.component';

describe('AuctionItemDetailComponent', () => {
  let component: AuctionItemDetailComponent;
  let fixture: ComponentFixture<AuctionItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
