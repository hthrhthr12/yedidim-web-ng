import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CallState} from '../../types/callState';
import {callStateSucceed} from '../../mocks/data/callState';

@Injectable({
  providedIn: 'root'
})
export class CallStateService {

  constructor() { }

  public get(id: string): Observable<CallState> {
    return of(callStateSucceed);
  }
}
