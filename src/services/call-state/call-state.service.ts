import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { callStateSucceed } from 'src/mocks/data/callState';
import { CallState } from 'src/types/callState';

@Injectable({
  providedIn: 'root'
})
export class CallStateService {

  constructor() { }
  
  public get(id: string): Observable<CallState> {
    return of(callStateSucceed);
  }
}
