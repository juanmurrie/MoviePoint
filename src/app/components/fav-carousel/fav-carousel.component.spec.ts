import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCarouselComponent } from './fav-carousel.component';

describe('FavCarouselComponent', () => {
  let component: FavCarouselComponent;
  let fixture: ComponentFixture<FavCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
