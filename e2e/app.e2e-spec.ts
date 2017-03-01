import { MangaReaderPage } from './app.po';

describe('manga-reader App', () => {
  let page: MangaReaderPage;

  beforeEach(() => {
    page = new MangaReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
