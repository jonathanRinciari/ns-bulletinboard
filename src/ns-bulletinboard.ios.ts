import { Common } from './ns-bulletinboard.common';
import { ios as iosApp } from "tns-core-modules/application";
import { View } from 'tns-core-modules/ui/content-view'

export class NsBulletinboard extends Common {
  constructor() {
    super();
    let d = new BLTNPageItem({title: 'Test'});
    d.dismissalHandler = function(a) {
      console.log('TEST');
    }

    d.actionHandler = (p1) => {

      console.log('MAYBE');
    };

    d.actionButtonTitle = "Subscribe";



    let a = new BLTNItemManager({
      rootItem: d
    });
    a.backgroundViewStyle = BLTNBackgroundViewStyle.blurredDark;
    a.showBulletinAboveViewControllerAnimatedCompletion(iosApp.rootController, true, () => {})

    
    
  }
}
