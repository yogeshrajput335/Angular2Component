import { Angular2ComponentPage } from './app.po';

describe('angular2-component App', () => {
  let page: Angular2ComponentPage;

  beforeEach(() => {
    page = new Angular2ComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
