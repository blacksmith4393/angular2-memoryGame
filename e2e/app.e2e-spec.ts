import { Angular2MemoryGamePage } from './app.po';

describe('angular2-memory-game App', function() {
  let page: Angular2MemoryGamePage;

  beforeEach(() => {
    page = new Angular2MemoryGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
