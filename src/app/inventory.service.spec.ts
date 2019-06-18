import { TestBed } from '@angular/core/testing';

import { InventoryItemsService } from './inventory.service';

describe('InventoryItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryItemsService = TestBed.get(InventoryItemsService);
    expect(service).toBeTruthy();
  });
});
