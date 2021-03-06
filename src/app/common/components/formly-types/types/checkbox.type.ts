import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { PrimengComponentType } from './prime-base.type';

@Component({
  selector: 'primeng-checkbox',
  template: `
    <p-checkbox
      [binary]="to.binary || false"
      [label]="to.label"
      [tabindex]="to.tabindex || null"
      [disabled]="to.disabled || false"
      [required]="to.required || false"
      (onChange)="to.onChange && to.onChange(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    ></p-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxPrmNg extends PrimengComponentType {
  @ViewChild(Checkbox) checkbox!: Checkbox;
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
    },
  };
}
