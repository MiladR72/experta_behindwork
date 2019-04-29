import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  questions=[
  'چگونه می شود تیم سازی خوبی کرد؟',
  'نکاتی درباره تیم سازی پیشنهاد دهید',
  'تجربیاتی که من در تیم سازی به دست خواهم آورد',
  ''];
  classification=[
    'تیم سازی',
    '',
    '',
    ''];
  Subjects=[
    '۱۲ راه برای از بین بردن مشکلات تیم سازی در استارتاپ ها',
    '۵ راه برای از بین بردن مشکلات تیم سازی در استارتاپ ها',
  ];

  constructor() { }
}
