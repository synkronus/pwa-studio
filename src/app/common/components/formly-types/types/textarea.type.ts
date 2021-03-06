import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'primeng-textarea',
  template: `<textarea
    pInputTextarea
    [placeholder]="to.placeholder"
    [autoResize]="to.autoResize || false"
    [disabled]="to.disabled || false"
    [rows]="to.rows || 5"
    [cols]="to.cols || 20"
    (onResize)="to.onResize && to.onResize(field, $event)"
    [formControl]="formControl"
    [formlyAttributes]="field"
  ></textarea>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaPrmNg extends FieldType {}
