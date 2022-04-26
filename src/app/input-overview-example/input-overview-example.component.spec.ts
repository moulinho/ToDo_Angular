import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOverviewExampleComponent } from './input-overview-example.component';

describe('InputOverviewExampleComponent', () => {
  let component: InputOverviewExampleComponent;
  let fixture: ComponentFixture<InputOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOverviewExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
