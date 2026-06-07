
# 클로드(Anthropic) 디자인으로 전면 리스킨

현재의 민트 그린 + Pretendard 시스템을 폐기하고, 첨부하신 Claude.com 디자인 스펙(웜 크림 캔버스 + 코랄 + 다크 네이비 + 세리프 디스플레이)으로 교체합니다. 기능(검색·필터·45개 카드·데모)은 그대로 유지하고 **표면(스타일)만** 바꿉니다.

> 참고: 프로젝트에 `design.md` 파일은 따로 없습니다. 말씀하신 디자인 스펙을 `.lovable/plan.md` 와 실제 코드(`styles.css`, `routes/index.tsx`, `Demos.tsx`)에 모두 반영하는 것으로 해석했습니다.

---

## 1. 디자인 토큰 교체 (`src/styles.css`)

기존 민트/Pretendard 토큰을 Claude 토큰으로 전면 교체:

**컬러 (oklch 변환은 의미적 매핑으로 — hex 그대로 사용)**
- `--background` (canvas) : `#faf9f5` — 따뜻한 크림 (순백 금지)
- `--foreground` (ink)    : `#141413`
- `--card` (surface-card) : `#efe9de` — 캔버스보다 한 단계 진한 크림
- `--primary` (coral)     : `#cc785c` — Anthropic 시그니처
- `--primary-foreground`  : `#ffffff`
- `--muted-foreground`    : `#6c6a64`
- `--border` (hairline)   : `#e6dfd8`
- 다크 표면: `--surface-dark #181715`, `--surface-dark-soft #1f1e1b`, `--surface-dark-elevated #252320`
- 보조: `--accent-teal #5db8a6`, `--accent-amber #e8a55a`

**타이포그래피 (Pretendard 폐기)**
- 디스플레이 세리프: **Instrument Serif** (Copernicus/Tiempos Headline의 무료 대체) — Google Fonts
- 본문 산세리프: **Inter** — StyreneB의 표준 대체
- 코드: **JetBrains Mono**
- `index.html` 또는 `__root.tsx` head에 `<link>` 로 로드 (Tailwind v4 규칙: `@import url()` 금지)
- `--font-serif`, `--font-sans`, `--font-mono` 토큰 등록
- h1/h2/h3 → 세리프 weight 400 + 네거티브 트래킹(-0.5 ~ -1.5px)

**라운드**
- `--radius` 8px 기준, lg(12px) · xl(16px) · pill(9999px) 계층

---

## 2. 페이지 레이아웃 재구성 (`src/routes/index.tsx`)

**Top Nav (신규)**
- 64px 높이, 크림 배경
- 좌측: ✱(Anthropic 스파이크 마크 SVG) + "Vibe UI/UX Dict" 워드마크
- 우측: 코랄 "Try it" 버튼 (장식용, 페이지 상단 스크롤)

**Hero Band**
- 6/6 그리드 (데스크톱)
- 좌: 세리프 디스플레이 H1 "Meet your UI vocabulary." (또는 "AI에게 정확히 말하는 법.") — Instrument Serif 64px, 네거티브 트래킹
- 좌: 본문 리드 + 코랄 Primary 버튼 + 텍스트 링크
- 우: **다크 네이비 코드 윈도우 카드** — 사용자가 AI에게 보내는 프롬프트를 코드 형태로 미니 표현 (JetBrains Mono, 신택스 하이라이트)
- 캔버스 배경 (그라데이션·블러 블랍 모두 제거)

**Search + Filter Band**
- 크림 캔버스 위, 헤어라인 보더 인풋 (40px 높이, radius 8px)
- 카테고리는 `category-tab` 스타일 — 비활성 투명/뮤트, 활성 `surface-card` 배경 + 잉크 텍스트 (필 형태 폐기, 사각 radius 8px)
- 개수는 작은 `badge-pill`로 표시

**카드 그리드**
- 3-up / 2-up / 1-up 반응형 유지
- 카드 = `feature-card` 스타일: `surface-card`(#efe9de) 배경, **그림자 없음**, radius 12px, padding 32px
- 카테고리 라벨 → `badge-pill` (surface-card 위에서는 캔버스 컬러 필 또는 코랄 텍스트만)
- 제목: 세리프 디스플레이-sm 28px
- 본문: Inter 16px / 1.55
- 데모 박스: 다크 네이비(`surface-dark`) **또는** 크림 박스 — 컴포넌트 성격에 따라 선택 (코드/터미널성 데모는 다크, 폼/버튼은 크림)

**Empty State**
- 단순 텍스트 + 세리프 헤드라인 + 코랄 텍스트 링크

**Pre-Footer Coral Callout Band**
- 풀블리드 코랄 카드 (`#cc785c`), 흰 텍스트, padding 48px, radius 12px
- "AI와 정확하게 대화할 준비 완료." + 크림 버튼

**Footer**
- 다크 네이비(`#181715`) 배경, `on-dark-soft` 텍스트
- 스파이크 마크 + 워드마크 + 총 용어 수

---

## 3. Demo 컴포넌트 컬러 재매핑 (`src/components/Demos.tsx`)

모든 데모의 강조색 **민트(#10B981) → 코랄(#cc785c)** 일괄 치환:
- Toggle ON, 활성 탭 언더라인, CTA 버튼, Stepper 채움, 체크/라디오 선택, Progress 채움, Spinner, FAB, 차트 막대, 포커스 링 — 모두 코랄
- 보조 강조가 필요한 곳(예: 토스트 success)은 `--accent-teal` 사용
- 다크 표면 데모(코드, 터미널성)는 `surface-dark`로 자연스럽게 흡수

기능·구조 변경 없음. 색상/라운드/타이포 클래스만 교체.

---

## 4. SEO / 메타 (`__root.tsx`)

- `lang="ko"` 유지
- 타이틀/디스크립션은 그대로
- og:image 그대로

---

## 5. 절대 규칙 (Claude 디자인)

- ❌ Pretendard, 민트, 순백(#fff) 배경, 둥근 필 카테고리, 강한 그림자/블러 블랍, 그라데이션 히어로
- ✅ Instrument Serif(weight 400, 네거티브 트래킹) 디스플레이
- ✅ 코랄은 Primary 버튼과 풀블리드 콜아웃에만 — 산발적 액센트 금지
- ✅ 그림자보다 **컬러 블록 대비**(크림 ↔ 다크 네이비)로 깊이 표현
- ✅ 섹션 간격 96px, 카드 패딩 32px

---

## 산출물

`src/styles.css`, `src/routes/__root.tsx`(폰트 link), `src/routes/index.tsx`(전면 리라이트), `src/components/Demos.tsx`(컬러 매핑), `.lovable/plan.md`(스펙 갱신), `README.md`(디자인 섹션 갱신) — 6개 파일 수정.

기능·데이터·라우팅은 손대지 않습니다. 결과는 Anthropic claude.com 톤의 에디토리얼한 UI/UX 사전이 됩니다.
