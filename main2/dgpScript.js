
describe('demo brandintelle test', function(){

it ('Login Test', function(){
  browser.manage().window().maximize();
  browser.get('https://qa.m-net.in/login');
  browser.sleep(4000)

});

it('Login Module Test', function(){
  element(by.name('username')).sendKeys('Pranild@mediawareonline.com');
  element(by.xpath('//*[@id="m_login"]/div/div[1]/div/div[2]/div/div/div/div/div/m-login/div[2]/label/span')).click();
  element(by.xpath('//*[@id="m_login"]/div/div[1]/div/div[2]/div/div/div/div/div/m-login/div[3]/m-spinner-button/button')).click();
  browser.sleep(4000);
  element(by.name('password')).sendKeys('Pranil@123$');
  element(by.xpath('//*[@id="m_login"]/div/div[1]/div/div[2]/div/div/div/div/div/m-login/div[3]/m-spinner-button/button')).click();

});

it('Application launch Test', function(){
  browser.sleep(8000);
  browser.ignoreSynchronization=true
  element(by.xpath('//body/m-modules[1]/div[1]/div[1]/div[1]/m-dashboard[1]/div[1]/div[1]/div[1]/m-application-list-card[1]/m-portlet[1]/div[1]/div[3]/perfect-scrollbar[1]/div[1]/div[1]/div[1]/div[1]/div[1]')).click();
  browser.sleep(4000);
  browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
  browser.sleep(8000);

  browser.actions().mouseMove(element(by.cssContainingText('.title','New request'))).click().perform()
  browser.sleep(3000);
  browser.actions().mouseMove(element(by.cssContainingText('.title','NewDirect'))).click().perform()

  //browser.actions().click()).perform()

  browser.sleep(10000);

  
});

});