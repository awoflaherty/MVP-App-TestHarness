import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { SendingPage } from './sending.page';

describe('SendingPage', () => {
  let component: SendingPage;
  let fixture: ComponentFixture<SendingPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SendingPage],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(SendingPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
