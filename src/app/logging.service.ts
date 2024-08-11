import { Injectable } from '@angular/core';

export class LoggingService {

  constructor(private prefix: string) {}
  
  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
