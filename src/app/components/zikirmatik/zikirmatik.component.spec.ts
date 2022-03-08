import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZikirmatikComponent } from './zikirmatik.component';

describe('ZikirmatikComponent', () => {
  let component: ZikirmatikComponent;
  let fixture: ComponentFixture<ZikirmatikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZikirmatikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZikirmatikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
