# IDEA 사업단 웹사이트 (리뉴얼)

명지대학교 인공지능 융합 디자인-엔지니어링 사업단(IDEA) 웹사이트입니다.
React + Vite + Motion으로 만든 다중 페이지 사이트입니다.

## 페이지
| 파일 | 내용 |
|---|---|
| `index.html` | 메인 (비눗방울 Hero, 미션·비전, 인재상, 참여학과, 마이크로디그리, 프로그램, 소식, 오시는 길) |
| `about.html` | 사업단소개 |
| `people.html` | 참여인력 |
| `programs.html` | 특성화계획 |
| `career.html` | 진로·산학협력 |
| `news.html` | 사업단소식 (공지·자료실·갤러리) |

## 운영 메모
- **사업단소식 데이터**는 기존 사이트(`ideamyongji.github.io/data/*.json`)에서 실시간으로 불러옵니다.
  글·사진은 기존 `admin.html`에서 올리면 이 사이트에도 바로 반영됩니다.
- **라운지 예약**은 기존 Firebase 예약 시스템(`ideamyongji.github.io/reserve.html`)으로 연결됩니다.
- 페이지 주소 연결은 `src/links.ts` 한 곳에서 관리합니다.
- 교수진 사진: `public/people/<이름>.jpg`에 넣고 `src/pages/PeoplePage.tsx`의 `PHOTOS`에 이름을 추가합니다.

## 개발
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성
```
`main` 브랜치에 push하면 GitHub Actions가 빌드해 GitHub Pages로 배포합니다.
