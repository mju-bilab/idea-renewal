// Single source of truth for page URLs. Pages not yet rebuilt in the new design point at the
// original site; flip each entry to its local file once that page ships.
export const ORIGIN = 'https://ideamyongji.github.io/'

export const LINKS = {
  home: './',
  about: './about.html',
  people: './people.html',
  programs: './programs.html',
  career: './career.html',
  news: './news.html',
  reserve: `${ORIGIN}reserve.html`, // stays on the original Firebase-backed system
  contact: './#contact',
  mju: 'https://www.mju.ac.kr',
  innov: 'https://innov.mju.ac.kr',
}
