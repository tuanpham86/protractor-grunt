var space_page = function () {
    this.clickEmail = function () {
        element(by.buttonText('Use Email Address')).click();
        return require('./welcome_page.js');
    };
};

module.exports = new space_page();