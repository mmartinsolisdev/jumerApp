import { JumerAppPage } from './app.po';

describe('jumer-app App', () => {
  let page: JumerAppPage;

  beforeEach(() => {
    page = new JumerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
