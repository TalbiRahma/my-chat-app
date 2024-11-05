import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomPageComponent } from './chatroom-page.component';

describe('ChatroomPageComponent', () => {
  let component: ChatroomPageComponent;
  let fixture: ComponentFixture<ChatroomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatroomPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
