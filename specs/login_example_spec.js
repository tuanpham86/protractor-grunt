describe('meshwork homepage', function () {

    //beforeEach(function () {
    //    browser.get('http://meshwork.tma.com.vn');
    //});
    browser.get('http://meshwork.tma.com.vn');
    
    var home_page = require('../page/home_page.js');
    var welcome_page = require('../page/welcome_page.js');
    
    it("should load successfully the home page", function () {
        expect(browser.getTitle()).toBe('Meshwork');
    });
    
    
    it('should login successfully', function () {
        home_page.clickLogin();
        expect(element(by.buttonText('Get Started')).isPresent()).toBe(true);
    });
});