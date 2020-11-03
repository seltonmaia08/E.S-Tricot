import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeProductsPage } from './see-products.page';

describe('SeeProductsPage', () => {
  let component: SeeProductsPage;
  let fixture: ComponentFixture<SeeProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
