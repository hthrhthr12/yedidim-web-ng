import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ICallData} from '../../types/callData';

@Injectable({
  providedIn: 'root'
})
export class CallDataService {

  constructor() {
  }

  public cancel(id: string): Observable<boolean> {
    return of(true);
  }

  public create(callData: ICallData): Observable<string> {
    return of('1231313');
  }
}
