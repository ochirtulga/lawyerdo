import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="inputContainer">
      <input
        class="input"
        [type]="type"
        [name]="name"
        (blur)="handleOnBlur($event)"
      />
    </div>
  `,
  styles: [
    `
      .inputContainer {
        position: relative;
        display: inline-block;
        height: 32px;
        width: 100%;
      }
      .input {
        height: 100%;
        width: 100%;
        padding: 0 7px;
        border-radius: 3px;
        border: 1px solid #ddd;
        background: #f4f5f7;
        color: #172b4d;
        transition: background 0.1s;
        font-size: 15px;
      }
      input:hover {
        background: #ebecf0;
      }
      input:focus {
        background: #fff;
        border: 1px solid #1b1f3c;
        box-shadow: 0 0 0 1px #1b1f3c;
        outline: none;
      }
      input::placeholder {
        font-size: 14px;
      }
      .invalid {
        border: 1px solid #e13c3c;
        box-shadow: none;
      }
      .invalid:focus {
        border: 1px solid #e13c3c;
        box-shadow: none;
      }
      .hasIcon {
        padding-left: 24px;
      }
      .inputIconContainer {
        position: absolute;
        width: 24px;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .inputContainer.flat {
        height: 40px;
      }
      .inputContainer.input {
        border: none;
        border-bottom: 2px solid #1b1f3c;
        font-size: 21px;
        background: #fff;
      }
      .inputContainer.input:focus {
        border: none;
        border-bottom: 2px solid #1b1f3c;
        box-shadow: none;
        background: #fff;
      }
      .inputContainer.input:hover {
        border: none;
        border-bottom: 2px solid #1b1f3c;
        box-shadow: none;
        background: #fff;
      }
      .inputContainer.input::placeholder {
        font-size: 21px;
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  @Input() icon = '';
  @Input() hasIcon = false;
  @Input() iconSize = 16;

  @Output() inputOnBlurEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() onChange = (e: Event) => {
    console.log(e);
  };
  @Input() type = 'text';
  @Input() name = '';

  constructor() {}

  ngOnInit(): void {}

  handleOnBlur(e: any) {
    this.inputOnBlurEvent.emit(e.target);
  }
}
