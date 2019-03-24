import { Observable } from 'tns-core-modules/data/observable';
import { NsBulletinboard } from 'nativescript-ns-bulletinboard';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsBulletinboard: NsBulletinboard;

  constructor() {
    super();

    this.nsBulletinboard = new NsBulletinboard('TEST');
    this.nsBulletinboard.addActionButton('Submit', () => {
      return {};
    }, {
      borderRadius: 10,
      borderColor: '#FFFFFF',
      titleColor: '#000000',
      buttonColor: '#FFFFFF'});
    this.nsBulletinboard.show();
    this.message = this.nsBulletinboard.message;
  }
}
