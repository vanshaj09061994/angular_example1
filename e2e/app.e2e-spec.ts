import { ButtonPage } from './app.po';

describe('button App', () => {
  let page: ButtonPage;

  beforeEach(() => {
    page = new ButtonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
