import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListTaskComponent } from './show-list-task.component';

describe('ShowListTaskComponent', () => {
  let component: ShowListTaskComponent;
  let fixture: ComponentFixture<ShowListTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
