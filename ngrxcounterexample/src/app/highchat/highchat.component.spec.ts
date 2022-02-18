import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchatComponent } from './highchat.component';

describe('HighchatComponent', () => {
  let component: HighchatComponent;
  let fixture: ComponentFixture<HighchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
