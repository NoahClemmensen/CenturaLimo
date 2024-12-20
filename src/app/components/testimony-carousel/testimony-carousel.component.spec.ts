import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyCarouselComponent } from './testimony-carousel.component';

describe('TestimonyCarouselComponent', () => {
  let component: TestimonyCarouselComponent;
  let fixture: ComponentFixture<TestimonyCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonyCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
