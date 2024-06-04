import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //==================================< properties >=====================================
  length: number = 0;
  includingLetter: boolean = false;
  includingNumber: boolean = false;
  includingSymbols: boolean = false;
  passward: string = '';
  //===============================< change passwerd length >===============================
  changePasswordLength(value: any) {
    if (value) {
      if (!isNaN(parseInt(value.target.value))) {
        this.length = parseInt(value.target.value);
      }
    }
  }
  //=====================< including letters to the password >============================
  onChangeLetter() {
    this.includingLetter = !this.includingLetter;
  }
  //=====================< including numbers to the password >===========================
  onChangeNumber() {
    this.includingNumber = !this.includingNumber;
  }
  //=====================< including symbols to the password >===========================
  onChangeSymbols() {
    this.includingSymbols = !this.includingSymbols;
  }
  //=============================< generating password >=================================
  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFJHIGKLMNOBQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*';
    let validValue = '';
    if (this.includingLetter) {
      validValue += letters;
    }
    if (this.includingNumber) {
      validValue += numbers;
    }
    if (this.includingSymbols) {
      validValue += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validValue.length);
      generatedPassword += validValue[index];
    }
    this.passward = generatedPassword;
  }
}
