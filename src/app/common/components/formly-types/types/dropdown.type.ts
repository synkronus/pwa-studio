import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { PrimengComponentType } from './prime-base.type';

@Component({
  selector: 'primeng-dropdown',
  template: `
    <p-dropdown
      appendTo="body"
      [placeholder]="to.placeholder"
      [style]="{ width: '100%' }"
      [options]="to.options | async"
      [disabled]="to.disabled"
      [showClear]="to.showClear || false"
      [filter]="to.filter || false"
      [filterValue]="to.filterValue || null"
      [filterBy]="to.filterBy || null"
      [filterMatchMode]="to.filterMatchMode || 'contains'"
      [filterPlaceholder]="to.filterPlaceholder || null"
      [filterLocale]="to.filterLocale || undefined"
      (onClick)="to.onClick && to.onClick(field, $event)"
      (onChange)="to.onChange && to.onChange(field, $event)"
      (onFilter)="to.onFilter && to.onFilter(field, $event)"
      (onFocus)="to.onFocus && to.onFocus(field, $event)"
      (onBlur)="to.onBlur && to.onBlur(field, $event)"
      (onShow)="to.onShow && to.onShow(field, $event)"
      (onHide)="to.onHide && to.onHide(field, $event)"
      (onClear)="to.onClear && to.onClear(field, $event)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-dropdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownPrmNg extends PrimengComponentType {
  @ViewChild(Dropdown) dropdown!: Dropdown;
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
