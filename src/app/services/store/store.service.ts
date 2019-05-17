import {Injectable} from '@angular/core';
import {ICallData} from '../../types/callData';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private currCallData: ICallData = null;

  public get = () => this.currCallData;

  public setPartial = (callDataPart: Partial<ICallData>) => {

    if (!callDataPart) {
      return;
    }
    if (!this.currCallData) {
      this.currCallData = {} as any;
    }
    const keys = Object.keys(callDataPart);
    keys.forEach(key => this.currCallData[key] = callDataPart[key]);
    if (!this.currCallData) {
      this.currCallData = {} as any;
    }

  }

  public reset = () => this.currCallData = null;
}
