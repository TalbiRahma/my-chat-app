import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageZoneComponent } from './message-zone.component';

describe('MessageZoneComponent', () => {
  let component: MessageZoneComponent;
  let fixture: ComponentFixture<MessageZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
