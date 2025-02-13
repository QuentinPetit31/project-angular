import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UselessfactComponent } from './uselessfact.component';

describe('UselessfactComponent', () => {
  let component: UselessfactComponent;
  let fixture: ComponentFixture<UselessfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UselessfactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UselessfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
