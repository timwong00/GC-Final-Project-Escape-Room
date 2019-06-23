import { Component, OnInit, HostListener } from "@angular/core";
import { TimerService } from "../timer.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";
import { Router } from "@angular/router";

@Component({
  selector: "headerComponent",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  // when escape is pressed; toggle menu
  @HostListener(`window: keydown.escape`) escapeEvent() {
    this.openMenu();
  }

  itemsToMatch: any[] = [];
  inventoryItems: any[];
  clickedMenu: boolean = false;
  cursorImage: any;

  constructor(
    public timerService: TimerService,
    public matchService: MatchService,
    public inventoryService: InventoryService,
    public router: Router
  ) { }

  ngOnInit() {
    // console.log(this.inventoryService.inventoryItems);
    this.inventoryItems = this.inventoryService.inventoryItems;
  }

  startTimer(): void {
    this.timerService.startTimer();
  }

  stopTimer(): void {
    this.timerService.stopTimer();
    // this.router.navigate(["/app-root"]);
  }

  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }

  closeMenu() {
    this.clickedMenu = false;
  }

  matchItems1(inventoryItem) {
    // console.log(inventoryItem);
    this.matchService.setInventoryItemToMatch(inventoryItem);
    // this.matchService.checkMatch(inventoryItem);
    // this.itemsToMatch.splice(0, 1, clickedItem1);
  }

  itemCursor(item) {
    console.log(item.item_image);
    
    // this.inventoryItems.itemCursor(item)
    // access inventory item that is clicked on
    //once item is clicked it calls the itemCursor method
    //method shows url image as the cursor
    // console.log(item);
    // console.log(this.inventoryItems);
    if (item.item_name === this.inventoryItems[0].item_name) {
      this.cursorImage = item.item_image;
      return this.cursorImage;
    }

  }
}
