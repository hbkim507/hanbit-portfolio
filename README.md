# 김한빛 포트폴리오 (Kim Hanbit Portfolio)

React + Vite 기반 개인 포트폴리오. Cloudflare **Workers** 정적 에셋으로 배포합니다.

## 특징

- **한/영 병기**: 모든 텍스트가 한글 아래 영어가 붙는 구조 (`{ ko, en }` 쌍)
- **2가지 디자인 테마**: 헤더의 색상 점으로 전환, 새로고침해도 유지
  - `neon` (기본) — 네온 테크 (블랙 + 시안/퍼플 그라디언트, 글래스 카드)
  - `light` — 웜 미니멀 라이트 (아이보리 + 딥그린, 여백 중심)
- **라우트**: `/` (소개·기술·경력·프로젝트), `/projects`, `/projects/:slug`, `/contact`

## 내용 수정하기

**`src/data/content.js` 파일 하나만 수정하면 됩니다.**
경력·프로젝트의 "(예시)" 표시된 내용을 실제 내용으로 교체하세요.
모든 텍스트는 `{ ko: '한글', en: 'English' }` 형태로 작성합니다.

## 개발 & 배포

```bash
npm install        # 의존성 설치
npm run dev        # 로컬 개발 서버
npm run build      # 프로덕션 빌드 (dist/)
npm run deploy     # Cloudflare Workers 배포 (사전 1회: npx wrangler login)
```

배포 설정은 `wrangler.jsonc` 참고 (SPA 폴백 포함).
