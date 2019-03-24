import { Common } from './ns-bulletinboard.common';
export declare class NsBulletinboard extends Common {
    page: BLTNPageItem;
    manager: BLTNItemManager;
    constructor(title: string);
    addActionButton(title: string, actionHandler: () => {}, options?: {
        borderColor?: string;
        borderWidth?: number;
        buttonColor?: string;
        borderRadius?: number;
        titleColor?: string;
    }): void;
    show(): void;
}
