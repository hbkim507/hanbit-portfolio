// ============================================================
// 포트폴리오 콘텐츠 데이터
// 이 파일 하나만 수정하면 사이트의 모든 텍스트가 바뀝니다.
// 모든 텍스트는 { ko, en } 쌍으로 작성합니다 (한글 아래 영어 병기).
// ※ 경력·프로젝트의 세부 수치/기간은 "예시"입니다. 실제 내용으로 교체하세요.
// ============================================================

// 화면 노출 플래그
// showProjects: false → 프로젝트 탭·프로젝트 보기 버튼·홈 프로젝트 섹션·/projects 페이지를 숨깁니다.
// 나중에 true로 바꾸면 모두 똑같은 위치에 그대로 다시 표시됩니다.
export const flags = {
  showProjects: false,
}

export const site = {
  name: { ko: '김한빛', en: 'Kim Hanbit' },
  role: { ko: '멀티플랫폼 개발자', en: 'Multiplatform Developer' },
  email: 'hbkim507@gmail.com',
  location: { ko: '대한민국', en: 'South Korea' },
  // 예시 링크 — 실제 계정으로 교체하세요
  links: [
    { label: 'GitHub', url: 'https://github.com/hbkim507/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
}

export const nav = [
  { href: '/#about', label: { ko: '소개', en: 'About' } },
  { href: '/#skills', label: { ko: '기술', en: 'Skills' } },
  { href: '/#career', label: { ko: '경력', en: 'Career' } },
  { href: '/projects', label: { ko: '프로젝트', en: 'Projects' } },
  { href: '/contact', label: { ko: '연락', en: 'Contact' } },
]

export const themes = [
  { id: 'editorial', label: { ko: '에디토리얼', en: 'Editorial' } },
  { id: 'light', label: { ko: '미니멀', en: 'Minimal' } },
  { id: 'neon', label: { ko: '네온', en: 'Neon' } },
]

export const hero = {
  eyebrow: { ko: '멀티플랫폼 개발자 · 김한빛', en: 'Multiplatform Developer · Kim Hanbit' },
  title: {
    ko: '앱에서 서버, 데이터베이스까지 — 플랫폼에 맞는 최적의 답을 만듭니다.',
    en: 'From apps to servers and databases — I build the right answer for every platform.',
  },
  sub: {
    ko: 'iOS·Android 네이티브와 하이브리드 앱, C# 데스크탑 애플리케이션, 서버·API 설계와 데이터베이스 운영, 그리고 AI 기반 업무 자동화까지. 경계를 두지 않고 서비스 전체를 설계하고 구현합니다.',
    en: 'Native and hybrid apps for iOS and Android, C# desktop applications, server & API design, database operations, and AI-powered automation — I design and build entire services without drawing lines between platforms.',
  },
  ctaProjects: { ko: '프로젝트 보기', en: 'View Projects' },
  ctaContact: { ko: '연락하기', en: 'Get in Touch' },
  marquee: ['iOS', 'Android', 'Hybrid Apps', 'C# Desktop', 'Server & API', 'Database', 'AI Automation'],
}

export const about = {
  no: '01',
  id: 'about',
  heading: { ko: '소개', en: 'About' },
  title: {
    ko: '플랫폼에 국한되지 않는 문제 해결형 개발자입니다.',
    en: 'A problem-solver who works across every platform.',
  },
  paragraphs: [
    {
      ko: '어떤 플랫폼이든 그에 맞는 최적의 서비스를 설계하고 구현합니다. 모바일 앱 하나를 만들더라도 화면 너머의 서버, API, 데이터베이스까지 전체 흐름을 그리며 개발합니다.',
      en: 'I design and build the optimal service for any platform. Even when building a single mobile app, I map out the entire flow — the server, APIs, and database behind the screen.',
    },
    {
      ko: 'iOS·Android 네이티브 및 하이브리드 앱, C# 기반 데스크탑 애플리케이션, 서버·API 설계와 데이터베이스 운영까지 폭넓은 실무 경험을 쌓아 왔습니다. 현장의 요구를 빠르게 이해하고, 가장 알맞은 기술을 골라 끝까지 책임지고 완성합니다.',
      en: 'My hands-on experience spans native and hybrid apps for iOS and Android, C# desktop applications, and server & API design with database operations. I quickly grasp real-world requirements, choose the right technology, and see things through to the end.',
    },
    {
      ko: '최근에는 AI를 개발 워크플로우에 적극적으로 도입해 개발 생산성을 높이고, 반복적인 업무를 자동화하는 파이프라인을 만들며 일하는 방식 자체를 개선하고 있습니다.',
      en: 'Recently, I have been bringing AI deep into my development workflow — boosting productivity and building automation pipelines that remove repetitive work, improving not just what I build but how I work.',
    },
  ],
  highlights: [
    {
      title: { ko: '모바일', en: 'Mobile' },
      desc: {
        ko: 'iOS·Android 네이티브와 하이브리드 앱을 개발·운영합니다.',
        en: 'Building and operating native & hybrid apps for iOS and Android.',
      },
    },
    {
      title: { ko: '데스크탑', en: 'Desktop' },
      desc: {
        ko: 'C# 기반 데스크탑 애플리케이션을 설계하고 개발합니다.',
        en: 'Designing and building C#-based desktop applications.',
      },
    },
    {
      title: { ko: '서버', en: 'Server' },
      desc: {
        ko: '데스크탑·모바일·웹, 각 플랫폼을 위한 서버와 API, 데이터베이스를 설계·운영합니다.',
        en: 'Designing and operating servers, APIs, and databases for desktop, mobile, and web clients.',
      },
    },
    {
      title: { ko: 'AI 자동화', en: 'AI Automation' },
      desc: {
        ko: 'AI로 개발 생산성을 높이고 반복 업무를 자동화합니다.',
        en: 'Raising productivity and automating repetitive work with AI.',
      },
    },
  ],
}

export const skills = {
  no: '02',
  id: 'skills',
  heading: { ko: '기술', en: 'Skills' },
  title: {
    ko: '화면부터 데이터까지, 서비스 전체를 다룹니다.',
    en: 'From the screen to the data — the whole service.',
  },
  categories: [
    {
      name: { ko: '모바일', en: 'Mobile' },
      items: ['iOS (Swift)', 'Android (Kotlin · Java)', 'Hybrid App (WebView Bridge)', 'App Store · Google Play 배포'],
    },
    {
      name: { ko: '데스크탑', en: 'Desktop' },
      items: ['C#', '.NET', 'WPF', 'WinForms'],
    },
    {
      name: { ko: '서버 & 데이터', en: 'Server & Data' },
      items: ['REST API 설계·운영', 'MSSQL', 'MySQL', 'Windows/Linux Server 운영'],
    },
    {
      name: { ko: '클라우드 & 인프라', en: 'Cloud & Infra' },
      items: ['AWS EC2 · RDS', 'S3 · CloudFront', 'Route 53', 'CodePipeline · CodeBuild · CodeDeploy'],
    },
    {
      name: { ko: 'AI & 자동화', en: 'AI & Automation' },
      items: ['Claude Code · Cursor · OpenAI API', '업무 자동화 파이프라인', '개발 생산성 도구 구축'],
    },
    {
      name: { ko: '협업 & 도구', en: 'Collaboration & Tools' },
      items: ['Git', 'CI/CD', '이슈 트래킹 · 문서화'],
    },
  ],
}

export const career = {
  no: '03',
  id: 'career',
  heading: { ko: '경력', en: 'Career' },
  title: {
    ko: '현장의 문제를 기술로 풀어 온 시간들.',
    en: 'Years of solving real-world problems with technology.',
  },
  // ※ 기간·수치는 예시입니다. 실제 경력으로 교체하세요.
  entries: [
    {
      company: { ko: '동화기업', en: 'Dongwha Enterprise' },
      role: { ko: '모바일 & 백엔드 개발', en: 'Mobile & Back-end Development' },
      period: { ko: '2024. 12 — 현재', en: '2024. 12 — Present' },
      bullets: [
        {
          ko: '사내 iOS·Android 하이브리드 앱 개발 및 운영',
          en: 'Developed and operated in-house hybrid apps for iOS and Android',
        },
        {
          ko: '모바일 앱을 위한 서버·API 설계 및 운영',
          en: 'Designed and operated servers & APIs for mobile apps',
        },
        {
          ko: '국내 최대 모바일 플랫폼사 기반 시스템을 사내 앱으로 내재화하여 외부 의존 없이 전환',
          en: 'Migrated a system built on Korea\'s largest mobile platform into the in-house app, eliminating the external dependency',
        },
        {
          ko: 'S3 기반 모바일 앱 리소스 OTA 시스템을 처음부터 단독 설계·구축',
          en: 'Solely designed and built an S3-based OTA resource update system for the mobile app from the ground up',
        },
        {
          ko: 'AI 도구를 도입해 개발 생산성 향상 및 반복 업무 자동화',
          en: 'Introduced AI tooling to boost productivity and automate repetitive work',
        },
      ],
    },
    {
      company: { ko: '이전 회사', en: 'Beyond Inc' },
      role: { ko: '소프트웨어 개발', en: 'Software Development' },
      period: { ko: '2023. 04 — 2024. 12', en: '2023. 04 — 2024. 12' },
      bullets: [
        {
          ko: '모바일/데스크탑(C#) 애플리케이션 리뉴얼 구축 및 개발 참여',
          en: 'Contributed to rebuilding and developing renewed mobile and C# desktop applications',
        },
        {
          ko: '데스크탑·웹 클라이언트를 위한 서버·API 개발',
          en: 'Developed servers & APIs for desktop and web clients',
        },
        {
          ko: '데이터베이스 설계 및 운영',
          en: 'Designed and operated databases',
        },
        {
          ko: '사내 시스템 유지보수 및 기능 개선',
          en: 'Maintained and improved internal systems',
        },
      ],
    },
  ],
}

export const projectsSection = {
  no: '04',
  id: 'projects',
  heading: { ko: '프로젝트', en: 'Projects' },
  title: {
    ko: '플랫폼마다 다른 답을 찾아낸 기록.',
    en: 'A record of finding the right answer on every platform.',
  },
  viewAll: { ko: '전체 프로젝트 보기', en: 'View All Projects' },
  backToList: { ko: '프로젝트 목록으로', en: 'Back to Projects' },
  metaLabels: {
    type: { ko: '유형', en: 'Type' },
    role: { ko: '역할', en: 'Role' },
    period: { ko: '기간', en: 'Period' },
    stack: { ko: '기술 스택', en: 'Tech Stack' },
  },
  overview: { ko: '개요', en: 'Overview' },
  features: { ko: '주요 작업', en: 'Key Work' },
  achievements: { ko: '성과', en: 'Achievements' },
}

// ※ 프로젝트 내용은 예시 틀입니다. 실제 프로젝트로 교체하세요.
export const projects = [
  {
    slug: 'drms-mobile-app',
    title: { ko: '원재료 수급 관리 모바일 앱 (DRMS)', en: 'Raw Material Supply Mobile App (DRMS)' },
    tagline: {
      ko: '외부 플랫폼 레거시를 걷어내고, React Native로 다시 세우다.',
      en: 'Legacy platform swapped out — rebuilt on React Native.',
    },
    type: { ko: '모바일 · React Native', en: 'Mobile · React Native' },
    role: { ko: '설계 · 개발 · 운영', en: 'Design, Development & Operations' },
    period: { ko: '2025 — 현재', en: '2025 — Present' },
    stack: ['React Native (Expo)', 'TypeScript', 'Redux Toolkit · React Query', 'Swift · Kotlin Native Module', 'FCM Push', 'AWS S3 (OTA)'],
    summary: {
      ko: '국내 1위 모바일 플랫폼 기반 레거시 하이브리드 앱을 React Native로 완전히 재구축해 내재화한 원재료 수급 관리 앱입니다. 계근·입고·공급업체 관리 업무를 iOS·Android 단일 코드베이스로 제공하며, 사내 SSO 네이티브 연동과 S3 기반 번들 OTA 시스템을 처음부터 직접 설계했습니다.',
      en: 'A raw material supply management app, fully rebuilt on React Native to internalize a legacy hybrid app running on Korea\'s leading mobile platform. Serves weighbridge, warehousing, and supplier workflows from a single iOS/Android codebase, with native SSO integration and an S3-based bundle OTA system designed from scratch.',
    },
    features: [
      {
        ko: '레거시 앱의 화면·API·데이터 모델을 React Native로 완전 이식 — 서버 무수정 전환',
        en: 'Ported the legacy app\'s screens, APIs, and data models to React Native with zero server changes',
      },
      {
        ko: 'S3 기반 JS 번들 OTA + 바이너리 강제 업데이트 이중 전략 단독 설계·구현',
        en: 'Solely designed a dual update strategy: S3-based JS bundle OTA plus forced binary updates',
      },
      {
        ko: '사내 SSO 앱과의 네이티브 토큰 공유 모듈 개발 (iOS Keychain · Android ContentProvider)',
        en: 'Built native SSO token sharing with the company auth app (iOS Keychain / Android ContentProvider)',
      },
      {
        ko: 'FCM 기반 silent/data-only 푸시 분기 처리 및 배지 동기화 구현',
        en: 'Implemented FCM silent/data-only push branching with badge synchronization',
      },
    ],
    achievements: [
      {
        ko: '유료 외부 플랫폼 의존을 제거하고 자체 기술 스택으로 전환 완료',
        en: 'Eliminated the paid external platform dependency, completing the move to an in-house stack',
      },
      {
        ko: '한국어·영어·베트남어 3개 국어, 21개 업무 화면 운영 — OTA로 스토어 심사 없이 기능 배포',
        en: 'Operates 21 screens in three languages, shipping features without store review via OTA',
      },
    ],
  },
  {
    slug: 'meetingroom-kiosk',
    title: { ko: '회의실 현황 키오스크 (앱 + 서버)', en: 'Meeting Room Kiosk (App + Server)' },
    tagline: {
      ko: '회의실 앞 아이패드부터 API 서버까지, 풀스택으로.',
      en: 'From the iPad at the door to the API server — full-stack.',
    },
    type: { ko: '풀스택 · iPad 키오스크', en: 'Full-stack · iPad Kiosk' },
    role: { ko: '단독 설계 · 개발 · 배포 (클라이언트 & 서버)', en: 'Solo Design, Development & Deployment (Client & Server)' },
    period: { ko: '2025 — 현재', en: '2025 — Present' },
    stack: ['React Native (iPad)', 'Swift Native Module', 'Java 21 · Spring Boot 3', 'AWS CodeBuild · CodeDeploy', 'S3 OTA'],
    summary: {
      ko: '회의실 앞 아이패드에 상시 표시되는 예약 현황 키오스크 앱과, 사내 시설 시스템을 중계하는 API 서버를 클라이언트부터 서버·배포 파이프라인까지 직접 설계·구축했습니다. 레거시 웹뷰 앱을 React Native로 재구축하고, 서버는 무DB 프록시 아키텍처로 가볍게 유지하며 AWS CodeBuild·CodeDeploy로 배포합니다.',
      en: 'A kiosk app running on iPads outside meeting rooms with live reservation timelines, built end to end — from the React Native client to the Spring Boot API server and its deploy pipeline. The legacy WebView app was rebuilt on React Native; the server stays lean as a DB-less proxy, deployed via AWS CodeBuild/CodeDeploy.',
    },
    features: [
      {
        ko: '회의실 예약 타임라인 시각화 및 실시간 현재 시각 인디케이터 구현',
        en: 'Built the reservation timeline view with a live current-time indicator',
      },
      {
        ko: 'Java 21 · Spring Boot 3 기반 무DB 프록시 API 서버 단독 설계·구축',
        en: 'Solely designed and built a DB-less proxy API server on Java 21 / Spring Boot 3',
      },
      {
        ko: '슬라이딩 윈도우 Rate Limiting + IP 자동 블랙리스트 보안 필터 구현',
        en: 'Implemented sliding-window rate limiting with automatic IP blacklisting',
      },
      {
        ko: 'AWS CodeBuild · CodeDeploy 기반 서버 배포 파이프라인 구성',
        en: 'Set up the server deployment pipeline on AWS CodeBuild / CodeDeploy',
      },
    ],
    achievements: [
      {
        ko: '클라이언트 · 서버 · 배포 파이프라인까지 1인 풀스택으로 완성',
        en: 'Delivered client, server, and deploy pipeline as a one-person full-stack project',
      },
      {
        ko: '키오스크 특성에 맞춘 설계 — 상시 표시, 불필요한 푸시·DB 제거로 운영 부담 최소화',
        en: 'Purpose-built for kiosk duty — always-on display, no push, no DB, minimal operational load',
      },
    ],
  },
  {
    slug: 'hybrid-webview-platform',
    title: { ko: '웹뷰 하이브리드 앱 공통 플랫폼 (3종)', en: 'Shared WebView Hybrid App Platform (3 Apps)' },
    tagline: {
      ko: '하나의 아키텍처로 물류 · ITSM · 세일즈 앱 세 개를.',
      en: 'One architecture powering logistics, ITSM, and sales apps.',
    },
    type: { ko: '모바일 · 하이브리드', en: 'Mobile · Hybrid' },
    role: { ko: '아키텍처 설계 · 개발 · 운영', en: 'Architecture, Development & Operations' },
    period: { ko: '2025 — 현재', en: '2025 — Present' },
    stack: ['React Native (Expo)', 'TypeScript', 'WebView Bridge (양방향 IPC)', 'FCM Push · Deep Link', 'OTA 웹 번들', 'i18n'],
    summary: {
      ko: '운송 관리(TMS) · IT 서비스 관리(ITSM) · 디지털 세일즈, 세 개의 사내 앱을 하나의 웹뷰 하이브리드 아키텍처로 설계해 운영합니다. 네이티브↔웹 양방향 IPC 브리지, OTA 웹 번들 업데이트, 푸시·딥링크를 공통 모듈화해 코드 재사용률 70% 이상을 달성했습니다.',
      en: 'Three in-house apps — transport management, IT service management, and digital sales — run on one shared WebView hybrid architecture. A bidirectional native-web IPC bridge, OTA web bundle updates, and push/deep-link handling are shared modules, achieving 70%+ code reuse.',
    },
    features: [
      {
        ko: '명령-응답 패턴의 네이티브↔웹 양방향 IPC 브리지 설계·구현',
        en: 'Designed a command-response bidirectional IPC bridge between native and web',
      },
      {
        ko: '서버에서 웹 번들을 내려받아 재설치 없이 반영하는 OTA 업데이트 구현',
        en: 'Built OTA updates that fetch web bundles from the server and apply them without reinstalling',
      },
      {
        ko: 'FCM 푸시 · 딥링크 · 다국어(i18n) · 세션 영속화 등 앱별 특화 기능 구현',
        en: 'Added per-app capabilities: FCM push, deep links, i18n, and session persistence',
      },
      {
        ko: 'QR 생성·갤러리 저장 등 네이티브 기능을 웹에 노출하는 핸들러 확장',
        en: 'Extended handlers exposing native features like QR generation and gallery saving to the web',
      },
    ],
    achievements: [
      {
        ko: '공통 아키텍처로 신규 앱 추가 비용 최소화 — 3개 앱 동시 운영',
        en: 'Shared architecture keeps the cost of adding apps low — three apps in production',
      },
      {
        ko: '레거시 안드로이드 전용 앱을 iOS · Android 동시 지원으로 확장',
        en: 'Expanded legacy Android-only apps to support both iOS and Android',
      },
    ],
  },
  {
    slug: 'desktop-field-system',
    title: { ko: 'C# 현장 업무 데스크탑 시스템', en: 'C# Desktop System for Field Operations' },
    tagline: {
      ko: '현장의 속도에 맞춘 데스크탑 애플리케이션.',
      en: 'A desktop application that keeps up with the field.',
    },
    type: { ko: '데스크탑 · Windows', en: 'Desktop · Windows' },
    role: { ko: '설계 · 개발 · 운영 (예시)', en: 'Design, Development & Operations (sample)' },
    period: { ko: '20XX — 20XX (예시)', en: '20XX — 20XX (sample)' },
    stack: ['C#', '.NET', 'WPF', 'MSSQL'],
    summary: {
      ko: '생산·물류 현장에서 사용하는 업무 시스템을 C#/.NET 기반으로 설계하고 구현했습니다. 현장 장비·데이터와 연동되는 실시간 화면을 제공하고, 오프라인 상황에서도 안전하게 동작하도록 로컬 캐시와 동기화 로직을 구성했습니다.',
      en: 'Designed and built a C#/.NET business system for production and logistics sites. Provided real-time views connected to field equipment and data, with local caching and sync logic for safe operation even when offline.',
    },
    features: [
      {
        ko: 'WPF 기반 실시간 현장 모니터링 화면 개발',
        en: 'Built real-time field monitoring screens with WPF',
      },
      {
        ko: '현장 장비·데이터 연동 인터페이스 구현',
        en: 'Implemented interfaces to field equipment and data sources',
      },
      {
        ko: '오프라인 대응 로컬 캐시 및 동기화 로직 설계',
        en: 'Designed offline-ready local caching and synchronization',
      },
      {
        ko: 'MSSQL 데이터 모델 설계 및 쿼리 최적화',
        en: 'Modeled MSSQL data structures and optimized queries',
      },
    ],
    achievements: [
      {
        ko: '수기·엑셀 중심 업무를 시스템화해 처리 시간 단축 (예시)',
        en: 'Systemized manual/Excel-based work, reducing processing time (sample)',
      },
      {
        ko: '현장 요구사항을 빠르게 반영하는 개선 사이클 정착 (예시)',
        en: 'Established a fast improvement cycle driven by field feedback (sample)',
      },
    ],
  },
  {
    slug: 'ai-automation',
    title: { ko: 'AI 업무 자동화 파이프라인', en: 'AI-Powered Work Automation Pipeline' },
    tagline: {
      ko: '반복 업무는 AI에게, 사람은 판단에 집중.',
      en: 'AI handles the repetition — people focus on judgment.',
    },
    type: { ko: 'AI · 자동화', en: 'AI · Automation' },
    role: { ko: '기획 · 구축 · 운영 (예시)', en: 'Planning, Build & Operations (sample)' },
    period: { ko: '20XX — 현재 (예시)', en: '20XX — Present (sample)' },
    stack: ['Claude Code', 'OpenAI API', 'Python/Script', 'Cloudflare Workers'],
    summary: {
      ko: 'AI를 개발 워크플로우와 사내 업무에 도입해 반복 작업을 자동화하는 파이프라인을 만들었습니다. 코드 리뷰·문서화·데이터 정리 같은 반복 업무를 자동화하고, AI 활용 사례를 팀에 전파하며 일하는 방식을 개선하고 있습니다.',
      en: 'Brought AI into the development workflow and internal operations, building pipelines that automate repetitive work — code review, documentation, data cleanup — and sharing AI practices across the team to improve how we work.',
    },
    features: [
      {
        ko: 'AI 기반 개발 보조 워크플로우 구축 (코드 리뷰·문서화 자동화)',
        en: 'Built AI-assisted development workflows (automated code review & documentation)',
      },
      {
        ko: '반복 업무 자동화 파이프라인 설계 및 운영',
        en: 'Designed and operated automation pipelines for repetitive tasks',
      },
      {
        ko: 'Cloudflare Workers 기반 경량 자동화 서비스 배포',
        en: 'Deployed lightweight automation services on Cloudflare Workers',
      },
      {
        ko: '사내 AI 활용 가이드 정리 및 전파',
        en: 'Documented and shared internal AI usage guides',
      },
    ],
    achievements: [
      {
        ko: '반복 업무 처리 시간 대폭 단축 (예시)',
        en: 'Significantly reduced time spent on repetitive work (sample)',
      },
      {
        ko: '팀 전체의 AI 활용 수준 향상에 기여 (예시)',
        en: 'Raised the whole team’s level of AI adoption (sample)',
      },
    ],
  },
]

export const contact = {
  heading: { ko: '함께 만들고 싶은 일이 있나요?', en: 'Have something to build together?' },
  body: {
    ko: '협업 제안, 채용 문의, 가벼운 기술 이야기까지 — 메일 한 통이면 충분합니다. 읽는 대로 답장드리겠습니다.',
    en: 'Collaboration, hiring, or just a casual tech conversation — one email is all it takes. I will reply as soon as I read it.',
  },
  emailCta: { ko: '메일 보내기', en: 'Send an Email' },
  copy: { ko: '주소 복사', en: 'Copy Address' },
  copied: { ko: '복사됨!', en: 'Copied!' },
  linksHeading: { ko: '링크', en: 'Links' },
}

export const footer = {
  note: {
    ko: '직접 설계하고 만들었습니다 — React · Vite · Cloudflare Workers',
    en: 'Designed & built by myself — React · Vite · Cloudflare Workers',
  },
}
