export interface Item {
    ItemId: number;
    ItemTitle: string;
    ItemSubtitle: string;
    ItemContent: string; 
    ItemCurrentBid: number;
    ItemTotalBids: number
    ItemStartDate: number;
    ItemEndDate: number;
    ItemHasReserve: number; // Note will be a 0 or 1
    ItemReserve: number; // might not ever need this 
}