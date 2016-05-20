var welcome_page = function () {
    this.clickButton = function() {
        element(by.buttonText('Get Started')).click();
        return require('./welcome_page.js');
    };
};

module.exports = new welcome_page();