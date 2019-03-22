
declare class BLTNActionItem extends NSObject implements BLTNItem {

	static alloc(): BLTNActionItem; // inherited from NSObject

	static new(): BLTNActionItem; // inherited from NSObject

	readonly actionButton: UIButton;

	actionButtonTitle: string;

	actionHandler: (p1: BLTNActionItem) => void;

	readonly alternativeButton: UIButton;

	alternativeButtonTitle: string;

	alternativeHandler: (p1: BLTNActionItem) => void;

	appearance: BLTNItemAppearance;

	dismissalHandler: (p1: BLTNItem) => void;

	interfaceBuilderType: typeof NSObject;

	presentationHandler: (p1: BLTNItem) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	dismissable: boolean; // inherited from BLTNItem

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	manager: BLTNItemManager; // inherited from BLTNItem

	nextItem: BLTNItem; // inherited from BLTNItem

	requiresCloseButton: boolean; // inherited from BLTNItem

	shouldRespondToKeyboardChanges: boolean; // inherited from BLTNItem

	shouldStartWithActivityIndicator: boolean; // inherited from BLTNItem

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionButtonTappedWithSender(sender: UIButton): void;

	alternativeButtonTappedWithSender(sender: UIButton): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	makeArrangedSubviews(): NSArray<UIView>;

	makeContentViewsWithInterfaceBuilder(interfaceBuilder: BLTNInterfaceBuilder): NSArray<UIView>;

	makeFooterViewsWithInterfaceBuilder(interfaceBuilder: BLTNInterfaceBuilder): NSArray<UIView>;

	onDismiss(): void;

	onDisplay(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setUp(): void;

	tearDown(): void;

	willDisplay(): void;
}

declare class BLTNBackgroundViewStyle extends NSObject {

	static alloc(): BLTNBackgroundViewStyle; // inherited from NSObject

	static blurredWithStyleIsDark(style: UIBlurEffectStyle, isDark: boolean): BLTNBackgroundViewStyle;

	static new(): BLTNBackgroundViewStyle; // inherited from NSObject

	static readonly blurredDark: BLTNBackgroundViewStyle;

	static readonly blurredExtraLight: BLTNBackgroundViewStyle;

	static readonly blurredLight: BLTNBackgroundViewStyle;

	static readonly dimmed: BLTNBackgroundViewStyle;

	static readonly none: BLTNBackgroundViewStyle;
}

declare var BLTNBoardVersionNumber: number;

declare var BLTNBoardVersionString: interop.Reference<number>;

declare class BLTNContainerView extends UIView {

	static alloc(): BLTNContainerView; // inherited from NSObject

	static appearance(): BLTNContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BLTNContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BLTNContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BLTNContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BLTNContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BLTNContainerView; // inherited from UIAppearance

	static new(): BLTNContainerView; // inherited from NSObject

	contentSize: CGSize;

	setChildViewConstraintsBuilder(childView: UIView, constraintsBuilder: (p1: BLTNContainerView, p2: UIView) => void): void;
}

declare class BLTNHighlightButtonWrapper extends UIView {

	static alloc(): BLTNHighlightButtonWrapper; // inherited from NSObject

	static appearance(): BLTNHighlightButtonWrapper; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BLTNHighlightButtonWrapper; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BLTNHighlightButtonWrapper; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BLTNHighlightButtonWrapper; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BLTNHighlightButtonWrapper; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BLTNHighlightButtonWrapper; // inherited from UIAppearance

	static new(): BLTNHighlightButtonWrapper; // inherited from NSObject

	readonly button: UIButton;
}

declare class BLTNInterfaceBuilder extends NSObject {

	static alloc(): BLTNInterfaceBuilder; // inherited from NSObject

	static new(): BLTNInterfaceBuilder; // inherited from NSObject

	readonly appearance: BLTNItemAppearance;

	item: BLTNItem;

	constructor(o: { appearance: BLTNItemAppearance; item: BLTNItem; });

	initWithAppearanceItem(appearance: BLTNItemAppearance, item: BLTNItem): this;

	makeActionButtonWithTitle(title: string): BLTNHighlightButtonWrapper;

	makeAlternativeButtonWithTitle(title: string): UIButton;

	makeDescriptionLabel(): UILabel;

	makeGroupStackWithSpacing(spacing: number): UIStackView;

	makeTextFieldWithPlaceholderReturnKeyDelegate(placeholder: string, returnKey: UIReturnKeyType, delegate: UITextFieldDelegate): UITextField;

	makeTitleLabel(): BLTNTitleLabelContainer;

	wrapViewWidthHeightPosition(view: UIView, width: number, height: number, position: BLTNViewPosition): BLTNContainerView;
}

interface BLTNItem extends NSObjectProtocol {

	dismissable: boolean;

	manager: BLTNItemManager;

	nextItem: BLTNItem;

	requiresCloseButton: boolean;

	shouldRespondToKeyboardChanges: boolean;

	shouldStartWithActivityIndicator: boolean;

	makeArrangedSubviews(): NSArray<UIView>;

	onDismiss(): void;

	onDisplay(): void;

	setUp(): void;

	tearDown(): void;

	willDisplay(): void;
}
declare var BLTNItem: {

	prototype: BLTNItem;
};

declare class BLTNItemAppearance extends NSObject {

	static alloc(): BLTNItemAppearance; // inherited from NSObject

	static new(): BLTNItemAppearance; // inherited from NSObject

	actionButtonBorderColor: UIColor;

	actionButtonBorderWidth: number;

	actionButtonColor: UIColor;

	actionButtonCornerRadius: number;

	actionButtonFontSize: number;

	actionButtonTitleColor: UIColor;

	alternativeButtonBorderColor: UIColor;

	alternativeButtonBorderWidth: number;

	alternativeButtonCornerRadius: number;

	alternativeButtonFontSize: number;

	alternativeButtonTitleColor: UIColor;

	buttonFontDescriptor: UIFontDescriptor;

	compactDescriptionFontSize: number;

	descriptionFontDescriptor: UIFontDescriptor;

	descriptionFontSize: number;

	descriptionTextColor: UIColor;

	imageViewTintColor: UIColor;

	shouldUseCompactDescriptionText: boolean;

	titleFontDescriptor: UIFontDescriptor;

	titleFontSize: number;

	titleTextColor: UIColor;

	makeActionButtonFont(): UIFont;

	makeAlternativeButtonFont(): UIFont;

	makeDescriptionFont(): UIFont;

	makeTitleFont(): UIFont;
}

declare class BLTNItemManager extends NSObject {

	static alloc(): BLTNItemManager; // inherited from NSObject

	static new(): BLTNItemManager; // inherited from NSObject

	allowsSwipeInteraction: boolean;

	backgroundColor: UIColor;

	backgroundViewStyle: BLTNBackgroundViewStyle;

	cardCornerRadius: number;

	edgeSpacing: BLTNSpacing;

	hidesHomeIndicator: boolean;

	readonly isShowingBulletin: boolean;

	statusBarAnimation: UIStatusBarAnimation;

	statusBarAppearance: BLTNStatusBarAppearance;

	constructor(o: { rootItem: BLTNItem; });

	dismissBulletinAnimated(animated: boolean): void;

	displayActivityIndicatorWithColor(color: UIColor): void;

	displayNextItem(): void;

	hideActivityIndicator(): void;

	initWithRootItem(rootItem: BLTNItem): this;

	popItem(): void;

	popToRootItem(): void;

	presentViewControllerAboveBulletinAnimatedCompletion(viewController: UIViewController, animated: boolean, completion: () => void): void;

	pushWithItem(item: BLTNItem): void;

	showBulletinAboveViewControllerAnimatedCompletion(presentingVC: UIViewController, animated: boolean, completion: () => void): void;

	showBulletinInApplicationAnimatedCompletion(application: UIApplication, animated: boolean, completion: () => void): void;
}

declare class BLTNPageItem extends BLTNActionItem {

	static alloc(): BLTNPageItem; // inherited from NSObject

	static new(): BLTNPageItem; // inherited from NSObject

	attributedDescriptionText: NSAttributedString;

	readonly descriptionLabel: UILabel;

	descriptionText: string;

	image: UIImage;

	imageAccessibilityLabel: string;

	readonly imageView: UIImageView;

	readonly title: string;

	readonly titleLabel: BLTNTitleLabelContainer;

	constructor(o: { title: string; });

	initWithTitle(title: string): this;

	makeHeaderViewsWithInterfaceBuilder(interfaceBuilder: BLTNInterfaceBuilder): NSArray<UIView>;

	makeViewsUnderDescriptionWithInterfaceBuilder(interfaceBuilder: BLTNInterfaceBuilder): NSArray<UIView>;

	makeViewsUnderImageWithInterfaceBuilder(interfaceBuilder: BLTNInterfaceBuilder): NSArray<UIView>;

	makeViewsUnderTitleWithInterfaceBuilder(interfaceBuilder: BLTNInterfaceBuilder): NSArray<UIView>;
}

declare class BLTNSpacing extends NSObject {

	static alloc(): BLTNSpacing; // inherited from NSObject

	static custom(value: number): BLTNSpacing;

	static new(): BLTNSpacing; // inherited from NSObject

	static readonly compact: BLTNSpacing;

	static readonly none: BLTNSpacing;

	static readonly regular: BLTNSpacing;
}

declare const enum BLTNStatusBarAppearance {

	Hidden = 0,

	Automatic = 1,

	LightContent = 2,

	DarkContent = 3
}

declare class BLTNTitleLabelContainer extends UIView {

	static alloc(): BLTNTitleLabelContainer; // inherited from NSObject

	static appearance(): BLTNTitleLabelContainer; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BLTNTitleLabelContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BLTNTitleLabelContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BLTNTitleLabelContainer; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BLTNTitleLabelContainer; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): BLTNTitleLabelContainer; // inherited from UIAppearance

	static new(): BLTNTitleLabelContainer; // inherited from NSObject

	readonly label: UILabel;
}

declare const enum BLTNViewPosition {

	Centered = 0,

	PinnedToEdges = 1
}
