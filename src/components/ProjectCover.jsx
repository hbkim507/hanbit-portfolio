// 프로젝트 카드 커버 — 슬러그별 SVG 일러스트
// 사내 시스템 특성상 실제 스크린샷 대신, 프로젝트 성격을 추상화한 와이어프레임 커버를 사용합니다.
// 색상은 모두 CSS 변수를 참조하므로 테마 전환 시 자동으로 톤이 맞춰집니다.

const A = 'var(--accent)' // 강조 선·면
const M = 'var(--muted)' // 보조 선
const L = 'var(--line)' // 배경 점 그리드
const SOFT = 'var(--accent-soft)' // 강조 면 (연한 채움)
const CARD = 'var(--card-bg)' // 디바이스 화면 채움

// 공통 프레임: 점 그리드 배경 + 420×160 뷰박스
function Frame({ slug, children }) {
  return (
    <svg viewBox="0 0 420 160" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`dots-${slug}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill={L} />
        </pattern>
      </defs>
      <rect width="420" height="160" fill={`url(#dots-${slug})`} />
      {children}
    </svg>
  )
}

// 폰 실루엣 (children 좌표는 폰 좌상단 기준)
function Phone({ x, y, w = 56, h = 100, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="10" fill={CARD} stroke={M} strokeWidth="1.5" />
      <line x1={w / 2 - 7} y1="7.5" x2={w / 2 + 7} y2="7.5" stroke={M} strokeWidth="1.5" strokeLinecap="round" />
      {children}
    </g>
  )
}

// 지도 핀
function Pin({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0C-6-8-11-12-11-19a11 11 0 1 1 22 0C11-12 6-8 0 0Z" stroke={A} strokeWidth="1.5" fill={SOFT} />
      <circle cy="-19" r="4" fill={A} />
    </g>
  )
}

// 01 DRMS — 폰(리스트) + 수급 차트 + 원재료 박스
function DrmsCover({ slug }) {
  return (
    <Frame slug={slug}>
      <g stroke={M} strokeWidth="1.5">
        <rect x="52" y="110" width="20" height="20" rx="3" />
        <rect x="76" y="110" width="20" height="20" rx="3" />
        <rect x="64" y="88" width="20" height="20" rx="3" stroke={A} fill={SOFT} />
      </g>
      <Phone x={120} y={22} w={64} h={116}>
        <line x1="12" y1="26" x2="38" y2="26" stroke={A} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="12" y="38" width="40" height="12" rx="3" stroke={M} strokeWidth="1.5" />
        <rect x="12" y="56" width="40" height="12" rx="3" stroke={M} strokeWidth="1.5" />
        <rect x="12" y="74" width="40" height="12" rx="3" stroke={A} strokeWidth="1.5" fill={SOFT} />
      </Phone>
      <path d="M192 80H244" stroke={M} strokeWidth="1.5" strokeDasharray="4 5" />
      <g transform="translate(250 40)">
        <line y1="80" x2="110" y2="80" stroke={M} strokeWidth="1.5" />
        <rect x="10" y="48" width="14" height="32" stroke={M} strokeWidth="1.5" />
        <rect x="36" y="30" width="14" height="50" stroke={M} strokeWidth="1.5" />
        <rect x="62" y="56" width="14" height="24" stroke={M} strokeWidth="1.5" />
        <rect x="88" y="18" width="14" height="62" stroke={A} strokeWidth="1.5" fill={SOFT} />
      </g>
    </Frame>
  )
}

// 02 OTA 어드민 — 브라우저(업로드) → 번들 → 폰
function OtaCover({ slug }) {
  return (
    <Frame slug={slug}>
      <rect x="55" y="30" width="160" height="100" rx="8" fill={CARD} stroke={M} strokeWidth="1.5" />
      <line x1="55" y1="52" x2="215" y2="52" stroke={M} />
      <circle cx="68" cy="41" r="2.5" fill={M} />
      <circle cx="79" cy="41" r="2.5" fill={M} />
      <circle cx="90" cy="41" r="2.5" fill={M} />
      <rect x="70" y="62" width="130" height="38" rx="6" stroke={A} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M135 93V76M128 82l7-7 7 7" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="70" y1="114" x2="200" y2="114" stroke={M} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <line x1="70" y1="114" x2="152" y2="114" stroke={A} strokeWidth="3" strokeLinecap="round" />
      <path d="M222 80h70" stroke={A} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M285 73l8 7-8 7" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="248" y="58" width="14" height="14" rx="3" fill={SOFT} stroke={A} strokeWidth="1.5" />
      <Phone x={305} y={30} w={56} h={100}>
        <path d="M28 32v22M21 47l7 7 7-7" stroke={M} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 66v10h28V66" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Phone>
    </Frame>
  )
}

// 03 회의실 키오스크 — 가로 태블릿 + 예약 타임라인 + 현재 시각 라인
function KioskCover({ slug }) {
  return (
    <Frame slug={slug}>
      <rect x="100" y="32" width="220" height="96" rx="10" fill={CARD} stroke={M} strokeWidth="1.5" />
      <circle cx="110" cy="80" r="2" fill={M} />
      <line x1="122" y1="50" x2="168" y2="50" stroke={A} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="296" cy="52" r="9" stroke={M} strokeWidth="1.5" />
      <path d="M296 52v-5M296 52l4 2" stroke={M} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="146" y="64" width="60" height="12" rx="4" fill={SOFT} stroke={A} strokeWidth="1.5" />
      <rect x="216" y="64" width="34" height="12" rx="4" stroke={M} strokeWidth="1.5" />
      <rect x="158" y="84" width="44" height="12" rx="4" stroke={M} strokeWidth="1.5" />
      <rect x="236" y="84" width="52" height="12" rx="4" stroke={M} strokeWidth="1.5" />
      <rect x="146" y="104" width="30" height="12" rx="4" stroke={M} strokeWidth="1.5" />
      <rect x="190" y="104" width="60" height="12" rx="4" fill={SOFT} stroke={A} strokeWidth="1.5" />
      <line x1="228" y1="58" x2="228" y2="122" stroke={A} strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="228" cy="56" r="3" fill={A} />
    </Frame>
  )
}

// 04 웹뷰 하이브리드 플랫폼 — 폰 3대 + 공유 코어
function HybridCover({ slug }) {
  return (
    <Frame slug={slug}>
      <Phone x={148} y={36} w={50} h={84}>
        <line x1="12" y1="26" x2="38" y2="26" stroke={M} strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="36" width="26" height="24" rx="3" stroke={M} strokeWidth="1.5" />
      </Phone>
      <Phone x={222} y={36} w={50} h={84}>
        <line x1="12" y1="26" x2="38" y2="26" stroke={M} strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="36" width="26" height="24" rx="3" stroke={M} strokeWidth="1.5" />
      </Phone>
      <Phone x={185} y={24} w={50} h={92}>
        <line x1="12" y1="26" x2="38" y2="26" stroke={A} strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="36" width="26" height="30" rx="3" stroke={A} strokeWidth="1.5" fill={SOFT} />
      </Phone>
      <path d="M173 122l14 10M210 118v14M247 122l-14 10" stroke={M} strokeWidth="1.5" strokeDasharray="3 4" />
      <rect x="150" y="132" width="120" height="22" rx="11" fill={SOFT} stroke={A} strokeWidth="1.5" />
      <text x="210" y="147" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill={A}>
        {'</>'}
      </text>
    </Frame>
  )
}

// 05 라이더 앱 — 폰 속 지도 + 배달 경로와 핀
function RiderCover({ slug }) {
  return (
    <Frame slug={slug}>
      <Phone x={90} y={26} w={60} h={108}>
        <rect x="8" y="24" width="44" height="72" rx="4" stroke={M} strokeWidth="1.5" />
        <path d="M14 88c6-18 26-10 30-48" stroke={A} strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="88" r="3" fill={A} />
        <circle cx="44" cy="40" r="3" fill={A} />
      </Phone>
      <path d="M175 118c45 10 60-63 105-56s52 44 88-10" stroke={M} strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="175" cy="118" r="4" fill={SOFT} stroke={A} strokeWidth="1.5" />
      <Pin x={280} y={62} />
      <Pin x={368} y={52} />
    </Frame>
  )
}

// 06 배달 솔루션 앱군 — 가맹점(리스트) · 관리자(차트) · 관제(레이더)
function SolutionAppsCover({ slug }) {
  return (
    <Frame slug={slug}>
      <Phone x={108} y={34} w={52} h={96}>
        <line x1="10" y1="26" x2="34" y2="26" stroke={A} strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="36" width="32" height="10" rx="3" stroke={M} strokeWidth="1.5" />
        <rect x="10" y="52" width="32" height="10" rx="3" stroke={M} strokeWidth="1.5" />
        <rect x="10" y="68" width="32" height="10" rx="3" stroke={M} strokeWidth="1.5" />
      </Phone>
      <Phone x={184} y={24} w={52} h={108}>
        <line x1="10" y1="26" x2="30" y2="26" stroke={A} strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="94" x2="44" y2="94" stroke={M} strokeWidth="1.5" />
        <rect x="10" y="76" width="8" height="18" stroke={M} strokeWidth="1.5" />
        <rect x="22" y="62" width="8" height="32" stroke={M} strokeWidth="1.5" />
        <rect x="34" y="50" width="8" height="44" stroke={A} strokeWidth="1.5" fill={SOFT} />
      </Phone>
      <Phone x={260} y={34} w={52} h={96}>
        <circle cx="26" cy="56" r="20" stroke={A} strokeWidth="1.5" opacity="0.35" />
        <circle cx="26" cy="56" r="13" stroke={M} strokeWidth="1.5" />
        <circle cx="26" cy="56" r="3" fill={A} />
        <path d="M26 37v6M26 69v6M7 56h6M39 56h6" stroke={M} strokeWidth="1.5" strokeLinecap="round" />
      </Phone>
    </Frame>
  )
}

// 07 C# 데스크탑 시스템군 — 모니터(테이블) + 터미널 창
function DesktopCover({ slug }) {
  return (
    <Frame slug={slug}>
      <rect x="120" y="26" width="180" height="92" rx="8" fill={CARD} stroke={M} strokeWidth="1.5" />
      <path d="M210 118v12M180 132h60" stroke={M} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="120" y1="44" x2="300" y2="44" stroke={M} />
      <circle cx="132" cy="35" r="2.2" fill={M} />
      <circle cx="142" cy="35" r="2.2" fill={M} />
      <circle cx="152" cy="35" r="2.2" fill={M} />
      <rect x="132" y="52" width="156" height="12" rx="3" fill={SOFT} stroke={A} strokeWidth="1.5" />
      <rect x="132" y="64" width="156" height="42" stroke={M} strokeWidth="1.5" />
      <path d="M132 78h156M132 92h156M184 64v42M236 64v42" stroke={M} opacity="0.6" />
      <rect x="262" y="84" width="108" height="56" rx="8" fill={CARD} stroke={M} strokeWidth="1.5" />
      <line x1="262" y1="98" x2="370" y2="98" stroke={M} />
      <text x="276" y="118" fontFamily="var(--font-mono)" fontSize="12" fill={A}>
        {'>_'}
      </text>
      <rect x="296" y="110" width="7" height="2.5" fill={A} />
    </Frame>
  )
}

// 08 우딜 보안 강화 — 폰 + 방패
function SecurityCover({ slug }) {
  return (
    <Frame slug={slug}>
      <Phone x={150} y={22} w={62} h={116}>
        <rect x="12" y="30" width="38" height="10" rx="3" stroke={M} strokeWidth="1.5" />
        <rect x="12" y="46" width="38" height="10" rx="3" stroke={M} strokeWidth="1.5" />
        <rect x="12" y="62" width="38" height="10" rx="3" stroke={M} strokeWidth="1.5" />
      </Phone>
      <g transform="translate(232 84)">
        <path
          d="M0-34 26-24V4C26 20 14 30 0 38-14 30-26 20-26 4V-24Z"
          fill={SOFT}
          stroke={A}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M-11 2-3 11 13-8" stroke={A} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M266 42l8-6M270 60h10M258 30l4-8" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
    </Frame>
  )
}

// 09 제주면세점 PDA — PDA(키패드) + 바코드 스캔
function PdaCover({ slug }) {
  return (
    <Frame slug={slug}>
      <g transform="translate(56 96)">
        <rect width="32" height="30" rx="2" stroke={M} strokeWidth="1.5" />
        <path d="M0 9h32M16 0v30" stroke={M} strokeWidth="1.5" />
      </g>
      <rect x="150" y="18" width="66" height="124" rx="10" fill={CARD} stroke={M} strokeWidth="1.5" />
      <line x1="176" y1="27" x2="190" y2="27" stroke={M} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="160" y="36" width="46" height="44" rx="4" stroke={M} strokeWidth="1.5" />
      <path d="M167 46v14M173 46v14M177 46v14M184 46v14M191 46v14M197 46v14" stroke={M} strokeWidth="1.5" />
      <path d="M168 70l5 4 9-10" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g stroke={M} strokeWidth="1.5">
        <rect x="160" y="90" width="13" height="9" rx="2" />
        <rect x="177" y="90" width="13" height="9" rx="2" />
        <rect x="194" y="90" width="13" height="9" rx="2" />
        <rect x="160" y="104" width="13" height="9" rx="2" />
        <rect x="177" y="104" width="13" height="9" rx="2" stroke={A} fill={SOFT} />
        <rect x="194" y="104" width="13" height="9" rx="2" />
        <rect x="160" y="118" width="13" height="9" rx="2" />
        <rect x="177" y="118" width="13" height="9" rx="2" />
        <rect x="194" y="118" width="13" height="9" rx="2" />
      </g>
      <g transform="translate(258 50)" fill={M}>
        <rect width="3" height="56" />
        <rect x="7" width="2" height="56" />
        <rect x="13" width="5" height="56" />
        <rect x="22" width="2" height="56" />
        <rect x="28" width="4" height="56" />
        <rect x="36" width="2" height="56" />
        <rect x="42" width="6" height="56" />
        <rect x="52" width="3" height="56" />
        <rect x="59" width="2" height="56" />
        <rect x="65" width="4" height="56" />
      </g>
      <line x1="250" y1="78" x2="336" y2="78" stroke={A} strokeWidth="2" strokeLinecap="round" />
      <circle cx="250" cy="78" r="3" fill={A} />
      <circle cx="336" cy="78" r="3" fill={A} />
    </Frame>
  )
}

// 10 AI 자동화 — 파이프라인 노드 그래프
function AiCover({ slug }) {
  return (
    <Frame slug={slug}>
      <path d="M75 80 165 46M75 80l90 34M165 46l90 34M165 114l90-34" stroke={M} strokeWidth="1.5" />
      <path d="M255 80h85" stroke={A} strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="75" cy="80" r="13" fill={CARD} stroke={M} strokeWidth="1.5" />
      <circle cx="165" cy="46" r="13" fill={CARD} stroke={M} strokeWidth="1.5" />
      <circle cx="165" cy="114" r="13" fill={CARD} stroke={M} strokeWidth="1.5" />
      <circle cx="255" cy="80" r="14" fill={CARD} stroke={M} strokeWidth="1.5" />
      <circle cx="340" cy="80" r="16" fill={SOFT} stroke={A} strokeWidth="2" />
      <text x="75" y="83.5" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill={M}>
        {'{ }'}
      </text>
      <text x="165" y="49.5" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill={M}>
        fn
      </text>
      <text x="165" y="117.5" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill={M}>
        db
      </text>
      <text x="255" y="83.5" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill={M}>
        {'=>'}
      </text>
      <path d="M334 80h12M340 74v12M336 76l8 8M344 76l-8 8" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
    </Frame>
  )
}

// 11 덕분에 — 폰 속 채팅 + 의료 크로스 말풍선
function ThanksToCover({ slug }) {
  return (
    <Frame slug={slug}>
      <Phone x={118} y={26} w={60} h={108}>
        <rect x="10" y="28" width="30" height="14" rx="7" stroke={M} strokeWidth="1.5" />
        <rect x="20" y="50" width="30" height="14" rx="7" fill={SOFT} stroke={A} strokeWidth="1.5" />
        <rect x="10" y="72" width="24" height="14" rx="7" stroke={M} strokeWidth="1.5" />
      </Phone>
      <rect x="240" y="40" width="120" height="72" rx="16" fill={CARD} stroke={M} strokeWidth="1.5" />
      <path d="M256 111l-8 15 26-15" fill={CARD} stroke={M} strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M294 58h12v12h12v12h-12v12h-12V82h-12V70h12Z"
        fill={SOFT}
        stroke={A}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Frame>
  )
}

// 기본 커버 (매핑에 없는 슬러그용)
function DefaultCover({ slug }) {
  return (
    <Frame slug={slug}>
      <rect x="160" y="40" width="100" height="80" rx="10" fill={CARD} stroke={M} strokeWidth="1.5" />
      <text x="210" y="86" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fill={A}>
        {'{ }'}
      </text>
    </Frame>
  )
}

const covers = {
  'drms-mobile-app': DrmsCover,
  'ota-admin-console': OtaCover,
  'meetingroom-kiosk': KioskCover,
  'hybrid-webview-platform': HybridCover,
  'rider-delivery-app': RiderCover,
  'delivery-solution-mobile-apps': SolutionAppsCover,
  'delivery-desktop-systems': DesktopCover,
  'woochin-android-app': SecurityCover,
  'jeju-dutyfree-logistics-app': PdaCover,
  'ai-automation': AiCover,
  'thanksto-medical-community': ThanksToCover,
}

export function ProjectCover({ slug }) {
  const Cover = covers[slug] || DefaultCover
  return (
    <div className="proj-cover">
      <Cover slug={slug} />
    </div>
  )
}
