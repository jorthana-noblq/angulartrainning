import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetitleComponent } from './pagetitle.component';

describe('PagetitleComponent', () => {
  let component: PagetitleComponent;
  let fixture: ComponentFixture<PagetitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagetitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagetitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
