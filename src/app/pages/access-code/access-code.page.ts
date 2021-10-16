import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatuscodeService } from 'src/app/api/statuscode.service';
import { AvclientService } from 'src/app/api/avclient.service';

@Component({
  selector: 'app-access-code',
  templateUrl: './access-code.page.html',
  styleUrls: ['./access-code.page.scss'],
})
export class AccessCodePage implements OnInit {
  disabledbutton;
  otpError = '';
  alertController: any;
  otpForm: FormGroup;
  first: ElementRef;
  second: ElementRef;
  third: ElementRef;
  four: ElementRef;
  five: ElementRef;
  singUp: ElementRef;
  data: string;
  results: any;

  constructor(
    private route: Router,
    public fb: FormBuilder,
    private toastctrl: ToastController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    public statuscodeService: StatuscodeService,
    public avclientService: AvclientService
  ) {
    this.createOTPForm();
  }

  @ViewChild('first', {
    static: false,
  })
  @ViewChild('second', {
    static: false,
  })
  @ViewChild('third', {
    static: false,
  })
  @ViewChild('four', {
    static: false,
  })
  @ViewChild('five', {
    static: false,
  })
  @ViewChild('singUp', {
    static: false,
  })
  ngOnInit() {
    fetch('./assets/inputFile/input.json')
      .then((res) => res.json())
      .then((json) => {
        this.results = json[0].access_code;
      });
  }

  getOtpValue() {
    return (
      this.otpForm.controls.first.value +
      this.otpForm.controls.second.value +
      this.otpForm.controls.third.value +
      this.otpForm.controls.four.value +
      this.otpForm.controls.five.value
    );
  }

  createOTPForm() {
    this.otpForm = this.fb.group({
      first: [null, Validators.required],
      second: [null, Validators.required],
      third: [null, Validators.required],
      four: [null, Validators.required],
      five: [null, Validators.required],
    });
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  focusNext(event, index) {
    if (index === 1) {
      console.log(event.which !== 8);
      if (event.which !== 8) {
        console.log(this.second);
        this.second.nativeElement.focus();
      }
      index = '';
    } else if (index === 2) {
      if (event.which !== 8) {
        console.log(this.second);
        this.third.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.first.nativeElement.focus();
      }
      index = '';
    } else if (index === 3) {
      if (event.which !== 8) {
        console.log(this.second);
        this.four.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.second.nativeElement.focus();
      }
      index = '';
    } else if (index === 4) {
      if (event.which !== 8) {
        console.log(this.second);
        this.five.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.third.nativeElement.focus();
        index = '';
      }
    } else {
      if (event.which === 8 && event.target.value.length <= 0) {
        this.four.nativeElement.focus();
      }
      index = '';
    }
  }

  async nextbtn() {
    const enteredOtp: string = this.getOtpValue();
    this.data = enteredOtp;
    if (this.data === '') {
      this.presentAlertEmpty();
    } else {
      this.disabledbutton = true;
      const loading = await this.loadingctrl.create({
        message: 'Check Authorization....',
      });
      await loading.present();

      return new Promise(() => {
        loading.dismiss();
        this.avclientService
          .validateAccessCode(this.data)
          .then(() => {
            this.route.navigate([
              '/before-you-finish',
              {
                code: this.data,
              },
            ]);
          })
          .catch((res) => {
            console.log('res', res);
            if (res === 'Error: call out of order error') {
              this.route.navigate(['/calloutoforder-access00002-error']);
            } else if (res === 'Error: access code expired') {
              this.route.navigate(['/code_expired_access00003_error']);
            } else if (res === 'Error: access code invalid') {
              this.route.navigate(['/code_invalid_access00004_error']);
            } else if (res === 'Error: network code') {
              this.route.navigate(['/check-network-access00005-error']);
            }
          });
        // this appears to be a function declaration, so I'm not entirely sure what it does
        // todo: figure out the original intent, implement accordingly, and remove the eslint disable
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        () => {
          loading.dismiss();
          this.disabledbutton = false;
          this.presentAlertConfirm('Timeout');
        };
      });
    }
  }
  async presentAlertEmpty() {
    const alert = await this.alertctrl.create({
      message: this.results.alert_msg,
      buttons: [
        {
          text: 'Retry',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
      ],
    });
    await alert.present();
  }

  async presentToast(a) {
    const toast = await this.toastctrl.create({
      message: a,
      duration: 3000,
      position: 'middle',
    });
    toast.present();
  }

  async presentAlertConfirm(a) {
    const alert = await this.alertController.create({
      header: a,
      backdropDissmiss: false,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });
    await alert.present();
  }
  backbtn() {
    this.route.navigate(['/request-access-code']);
  }
  numberOnlyValidation(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
