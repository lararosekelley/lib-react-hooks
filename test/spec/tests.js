var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var server = require('node-http-server');
var path = require('path');
var chai = require('chai');
var chaiDriver = require('chai-webdriver');

var expect = chai.expect;
var it = test.it;
var describe = test.describe;
var by = webdriver.By;

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

chai.use(chaiDriver(driver));

server.deploy(
    {
        port: 8000,
        root: path.resolve('./')
    }
);

describe('test suite for Kanye Ipsum jQuery plugin', function() {
    it('should go to index.html and set the window size', function() {
        driver.get('http://localhost:8000');
        driver.manage().window().setSize(480, 800);
    });
    
    //@TODO: Fill in tests
    //@ME: i don't want to u can't control me
    //@ME: it works i swear
    
    it('should close the browser', function() {
         driver.quit();
    });
});
