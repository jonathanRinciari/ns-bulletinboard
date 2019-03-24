import { Common } from './ns-bulletinboard.common';
import { ios as iosApp } from "tns-core-modules/application";
import { Color } from 'tns-core-modules/color';

export class NsBulletinboard extends Common {
  page: BLTNPageItem;
  manager: BLTNItemManager;

  constructor(title: string) {
    super();
    this.page = new BLTNPageItem({ title });
    this.manager = new BLTNItemManager({
      rootItem: this.page
    });
  }

  addActionButton(title: string, actionHandler: () => {}, options?: {borderColor?: string, borderWidth?: number, buttonColor?: string, borderRadius?: number, titleColor?: string}) {
    if (options.borderColor) {
      this.page.appearance.actionButtonBorderColor = new Color(options.borderColor).ios;
    }

    if (options.borderWidth) {
      
    }

    if (options.buttonColor) {
      this.page.appearance.actionButtonColor = new Color(options.buttonColor).ios;
    }

    if (options.borderRadius) {
      this.page.appearance.actionButtonCornerRadius = options.borderRadius;
    }

    if (options.titleColor) {
      this.page.appearance.actionButtonTitleColor = new Color(options.titleColor).ios;
    }
    this.page.appearance.actionButtonBorderWidth = options.borderWidth;
    this.page.actionHandler = actionHandler;
    this.page.actionButtonTitle = title;
  }

  show() {
    this.manager.showBulletinAboveViewControllerAnimatedCompletion(iosApp.rootController, true, () => {});
  }
}
