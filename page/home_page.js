require ('../page/welcome_page.js');

var home_page = function () {
    this.clickLogin = function() {
        element(by.linkText('Sign In')).click();
        //return require('./welcome_page.js');
    };
};

module.exports = new home_page();