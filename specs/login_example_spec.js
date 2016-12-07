var home_page = require('../page/home_page.js');
var welcome_page = require('../page/welcome_page.js');
var signin_page = require('../page/signin_page.js');

describe('login from meshwork homepage', function () {

    beforeEach(function () {
        var width = 1280;
        var height = 800;
        browser.driver.manage().window().setSize(width, height);
        browser.get('https://meshworkappsit.herokuapp.com');
        browser.waitForAngular();
    });
    //browser.get('http://meshwork.tma.com.vn');
    
    it('should login successfully', function () {
        expect(browser.getTitle()).toBe('Meshwork');
        browser.sleep(10000);
        
        welcome_page.clickLink();
        expect(element(by.buttonText('Use Email Address')).isPresent()).toBe(true);
        
        //home_page.clickLogin();
        //home_page.clickSignUp();
        //expect(element(by.buttonText('Get Started')).isPresent()).toBe(true);
        
        signin_page.clickEmail();
        //expect(element(by.id('btnSignIn')).isPresent()).toBe(true);
        expect(element(by.name('go')).isPresent()).toBe(true);
        
        //signin_page = require('../page/signin_page.js');
        signin_page.keyin();
        signin_page.clickLogin();
        browser.waitForAngular();
        browser.sleep(10000);
        //expect(element(by.css('view-header')).isPresent()).toBe(true);
        var space = browser.findElement(by.css('.view-title.no-padding.float-left.width-cal-360.ng-binding'));
        expect(space.getText()).toBe('Spaces');
        //expect(element(by.css('.view-header .view-title')).isPresent()).tobe(true);
    });
});