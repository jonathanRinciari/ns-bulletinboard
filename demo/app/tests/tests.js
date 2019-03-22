var NsBulletinboard = require("nativescript-ns-bulletinboard").NsBulletinboard;
var nsBulletinboard = new NsBulletinboard();

describe("greet function", function() {
    it("exists", function() {
        expect(nsBulletinboard.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nsBulletinboard.greet()).toEqual("Hello, NS");
    });
});