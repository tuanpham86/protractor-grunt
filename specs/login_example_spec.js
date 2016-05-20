describe('login from meshwork homepage', function () {

    beforeEach(function () {
        browser.get('http://meshwork.tma.com.vn');
    });
    //browser.get('http://meshwork.tma.com.vn');

    var home_page = require('../page/home_page.js');
    var welcome_page = require('../page/welcome_page.js');
    var signin_page = require('../page/signin_page.js');
    
    it('should login successfully', function () {
        expect(browser.getTitle()).toBe('Meshwork');
        
        home_page.clickLogin();
        expect(element(by.buttonText('Get Started')).isPresent()).toBe(true);
        
        welcome_page.clickLink();
        expect(element(by.buttonText('Use Email Address')).isPresent()).toBe(true);
        
        signin_page.clickEmail();
        expect(element(by.id('btnSignIn')).isPresent()).toBe(true);
        
        //signin_page = require('../page/signin_page.js');
        signin_page.keyin();
        signin_page.clickLogin();
        
        //expect(element(by.css('view-header')).isPresent()).toBe(true);
        var space = browser.findElement(by.css('div.view-title.ng-binding'));
        expect(space.getText()).toBe('Spaces');
        //expect(element(by.css('.view-header .view-title')).isPresent()).tobe(true);
    });
});