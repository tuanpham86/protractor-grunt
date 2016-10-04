var signin_page = function () {
    this.clickEmail = function () {
        element(by.buttonText('Use Email Address')).click();
        return require('./welcome_page.js');
    };

    this.clickLogin = function () {
        //element(by.id('btnSignIn')).click();
        element(by.name('go')).click();
        return require('./welcome_page.js');
    }

    this.keyin = function () {
        //element(by.id('email')).sendKeys('phamvantuan@tma.com.vn');
        //element(by.id('confirmPassword')).sendKeys('123456xX');
        element(by.name('userName')).sendKeys('phamvantuan@tma.com.vn');
        element(by.name('password')).sendKeys('123456xX');
        return require('./welcome_page.js');
    }
};

module.exports = new signin_page();