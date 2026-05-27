# 바이브 코더 UI/UX 사전 — 구현 계획 (최종판)

정적 React SPA. **45개 용어** 카드 + 각 카드 하단에 실제 UI 데모(Tailwind + Lucide). 아래 디자인 시스템 규칙을 **엄격히** 준수합니다.

---

## ★ 디자인 시스템 (절대 규칙)

### 1. 타이포그래피
- **시스템 기본 폰트 사용 금지**
- `index.html`에 Pretendard CDN 로드:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  ```
- `tailwind.config.ts` → `fontFamily.sans: ['Pretendard', ...]`로 전역 적용
- `body { font-family: 'Pretendard', ... }`

### 2. 컬러 시스템
- **Tailwind 기본 Blue-500 사용 절대 금지** (blue-*, indigo-*, sky-* 등 파란 계열 액센트 금지)
- Primary: **Mint Green `#10B981`** (emerald-500)
- Background: **`#F8FAFC`** (완전 흰색 대신, slate-50)
- Surface(카드): `#FFFFFF`
- Text: slate-900 / slate-600 / slate-400
- Accent 보조: emerald-50, emerald-100, emerald-600
- `tailwind.config.ts`에 커스텀 토큰으로 등록:
  ```ts
  colors: {
    primary: { DEFAULT: '#10B981', 50:'#ECFDF5', 100:'#D1FAE5', 600:'#059669', 700:'#047857' },
    surface: '#FFFFFF',
    canvas:  '#F8FAFC',
  }
  ```

### 3. 보더 vs 여백/그림자
- 카드/컨테이너 구분에 **border 사용 최소화** (테두리 떡칠 금지)
- 대신:
  - **여백**: 카드 내부 `p-6` 이상
  - **그림자**: `shadow-sm` (기본) → hover `shadow-md`/`shadow-lg`
  - **라운드**: 모든 모서리 `rounded-2xl`
- border가 꼭 필요한 폼 요소(input, select)는 `border-slate-200` 정도로 옅게

### 4. 마이크로 인터랙션 (손맛)
- 모든 카드/버튼: `transition-all duration-200`
- hover: `hover:-translate-y-0.5 hover:shadow-md` (살짝 떠오름)
- active: `active:scale-95` (클릭 시 살짝 축소)
- 카테고리 뱃지/CTA도 동일 규칙
- 로딩이 필요한 시점은 없지만, **Skeleton UI 데모**에서 `animate-pulse` 시연

### 5. Empty State
- 검색/필터 결과 0건일 때 빈 화면 금지
- 중앙에 큰 Lucide 아이콘(SearchX, Inbox 등) + "찾으시는 용어가 없어요. 다른 키워드로 검색해 보세요." 친근한 카피 + 검색어 초기화 버튼

---

## 1. 프로젝트 스캐폴딩
- `add_artifact`로 `web_app:vibe-uiux-dict` 생성

## 2. 파일 구조
```
src/
  data/terms.ts            // 45개 용어
  components/
    Hero.tsx               // 타이틀 + Pretendard 큰 헤드라인 + 검색창
    CategoryFilter.tsx     // 카테고리 뱃지 (All + 6개, 개수 표시)
    TermCard.tsx           // 카드(이름 + 카테고리 칩 + 설명 + Demo)
    EmptyState.tsx         // 결과 0건 안내
    demos/index.tsx        // demoKey → 컴포넌트 매핑
    demos/*.tsx            // 45개 미니 데모
  routes/index.tsx         // 페이지 조립 + 검색/필터 상태
  index.css                // Pretendard 적용, canvas 배경
tailwind.config.ts         // 커스텀 컬러/폰트 토큰
index.html                 // Pretendard CDN
```

## 3. 카테고리 (6개) & 용어 (총 45개)

**레이아웃 및 내비게이션 (11)**
GNB, LNB, Hamburger Menu, Breadcrumb, Pagination, Tabs, Accordion, Modal/Dialog, Drawer, Sidebar, Sticky Header

**화면 요소 및 시각 장치 (8)**
Card, Avatar, Badge/Label, Divider, Overlay/Backdrop, Chip, Empty State, Hero Section

**알림 및 피드백 (7)**
Toast, Tooltip, Skeleton UI, Spinner, Progress Bar, Snackbar, Alert/Banner

**버튼 및 조작 요소 (7)**
CTA, FAB, Toggle/Switch, Stepper, Dropdown, Icon Button, Segmented Control

**입력 폼 (9)**
Text Field, Radio Button, Check Box, Placeholder, Search Bar, Select, Slider, Date Picker, Form Validation

**데이터 표시 (3)**
Table, List, Chart

## 4. 인터랙션
- 검색: `useMemo`로 name/description 실시간 부분일치
- 카테고리: All(45) + 6개 (각 개수 뱃지)
- 검색 + 카테고리 동시 적용
- 결과 0건 → Empty State

## 5. 카드 레이아웃 (디자인 규칙 반영)
```
<article class="bg-surface rounded-2xl p-6 shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-md">
  ├ 상단: 카테고리 칩 (emerald-50 배경, emerald-700 텍스트, rounded-full)
  ├ 제목: text-xl font-bold text-slate-900 (Pretendard)
  ├ 설명: text-sm text-slate-600 leading-relaxed
  └ Demo 박스: bg-slate-100 rounded-lg p-4 (실제 UI 미니어처)
</article>
```

## 6. Demo 컴포넌트 — Primary 컬러 적용
모든 데모에서 강조색은 **민트 그린(emerald)** 사용 (파란색 금지):
- Toggle ON 상태 → emerald-500 배경
- 활성 탭 underline → emerald-500
- CTA 버튼 → emerald-500 배경, 흰 글씨
- Stepper 채워진 단계 → emerald-500
- 체크박스/라디오 선택 → emerald-500
- Progress Bar 채움 → emerald-500
- 차트 막대 → emerald 톤 그라데이션
- Spinner → emerald-500
- FAB → emerald-500
- 링크/포커스 링 → emerald

## 7. 인터랙티브 데모
정적 표현 + 다음만 실제 동작:
- **Toggle**: 클릭으로 On/Off 전환 (useState)
- **Tabs**: 탭 클릭 전환
- **Accordion**: 펼치기/접기
- **Dropdown**: 열기/닫기
- 모두 `transition-all duration-200` 적용

## 8. 반응형
- 카드 그리드: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 모바일 패딩 축소, 검색창 풀폭
- 카테고리 뱃지: 모바일 가로 스크롤 허용

## 9. SEO 기본기
- `<title>` 60자 이내, `<meta description>` 160자 이내
- H1은 히어로 타이틀 1개만
- 시맨틱 태그(`<header>`, `<main>`, `<article>`, `<section>`)

## 산출물
Pretendard 폰트 + 민트그린 액센트 + 보더 대신 그림자/여백 + 손맛 있는 마이크로 인터랙션 + 친절한 Empty State를 갖춘, 45개 용어의 비주얼 UI/UX 사전 SPA. 비전공 기획자가 "이 단어 = 이 모양"을 즉시 학습하고, AI에게 정확한 용어로 요청할 수 있도록 돕습니다.
