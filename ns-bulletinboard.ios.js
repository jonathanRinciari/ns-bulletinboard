"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ns_bulletinboard_common_1 = require("./ns-bulletinboard.common");
var application_1 = require("tns-core-modules/application");
var NsBulletinboard = (function (_super) {
    __extends(NsBulletinboard, _super);
    function NsBulletinboard() {
        var _this = _super.call(this) || this;
        var d = new BLTNPageItem({ title: 'Test' });
        d.dismissalHandler = function (a) {
            console.log('TEST');
        };
        d.actionHandler = function (p1) {
            console.log('MAYBE');
        };
        d.actionButtonTitle = "Subscribe";
        var a = new BLTNItemManager({
            rootItem: d
        });
        a.backgroundViewStyle = BLTNBackgroundViewStyle.blurredDark;
        a.showBulletinAboveViewControllerAnimatedCompletion(application_1.ios.rootController, true, function () { });
        return _this;
    }
    return NsBulletinboard;
}(ns_bulletinboard_common_1.Common));
exports.NsBulletinboard = NsBulletinboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnMtYnVsbGV0aW5ib2FyZC5pb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJucy1idWxsZXRpbmJvYXJkLmlvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUFtRDtBQUNuRCw0REFBNkQ7QUFHN0Q7SUFBcUMsbUNBQU07SUFDekM7UUFBQSxZQUNFLGlCQUFPLFNBdUJSO1FBdEJDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLFVBQVMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQTtRQUVELENBQUMsQ0FBQyxhQUFhLEdBQUcsVUFBQyxFQUFFO1lBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBRUYsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQztRQUlsQyxJQUFJLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQztZQUMxQixRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7UUFDNUQsQ0FBQyxDQUFDLGlEQUFpRCxDQUFDLGlCQUFNLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxjQUFPLENBQUMsQ0FBQyxDQUFBOztJQUk1RixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBMUJELENBQXFDLGdDQUFNLEdBMEIxQztBQTFCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbiB9IGZyb20gJy4vbnMtYnVsbGV0aW5ib2FyZC5jb21tb24nO1xuaW1wb3J0IHsgaW9zIGFzIGlvc0FwcCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXcnXG5cbmV4cG9ydCBjbGFzcyBOc0J1bGxldGluYm9hcmQgZXh0ZW5kcyBDb21tb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGxldCBkID0gbmV3IEJMVE5QYWdlSXRlbSh7dGl0bGU6ICdUZXN0J30pO1xuICAgIGQuZGlzbWlzc2FsSGFuZGxlciA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdURVNUJyk7XG4gICAgfVxuXG4gICAgZC5hY3Rpb25IYW5kbGVyID0gKHAxKSA9PiB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNQVlCRScpO1xuICAgIH07XG5cbiAgICBkLmFjdGlvbkJ1dHRvblRpdGxlID0gXCJTdWJzY3JpYmVcIjtcblxuXG5cbiAgICBsZXQgYSA9IG5ldyBCTFROSXRlbU1hbmFnZXIoe1xuICAgICAgcm9vdEl0ZW06IGRcbiAgICB9KTtcbiAgICBhLmJhY2tncm91bmRWaWV3U3R5bGUgPSBCTFROQmFja2dyb3VuZFZpZXdTdHlsZS5ibHVycmVkRGFyaztcbiAgICBhLnNob3dCdWxsZXRpbkFib3ZlVmlld0NvbnRyb2xsZXJBbmltYXRlZENvbXBsZXRpb24oaW9zQXBwLnJvb3RDb250cm9sbGVyLCB0cnVlLCAoKSA9PiB7fSlcblxuICAgIFxuICAgIFxuICB9XG59XG4iXX0=