import { Observable } from 'tns-core-modules/data/observable';
import { NsBulletinboard } from 'nativescript-ns-bulletinboard';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsBulletinboard: NsBulletinboard;

  constructor() {
    super();

    this.nsBulletinboard = new NsBulletinboard();
    this.message = this.nsBulletinboard.message;
  }
}
