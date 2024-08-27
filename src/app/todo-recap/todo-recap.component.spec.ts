import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRecapComponent } from './todo-recap.component';

describe('TodoRecapComponent', () => {
  let component: TodoRecapComponent;
  let fixture: ComponentFixture<TodoRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoRecapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
