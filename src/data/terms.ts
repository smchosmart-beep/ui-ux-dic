export type Category =
  | "레이아웃 및 내비게이션"
  | "화면 요소 및 시각 장치"
  | "알림 및 피드백"
  | "버튼 및 조작 요소"
  | "입력 폼"
  | "데이터 표시";

export type Term = {
  id: string;
  name: string;
  category: Category;
  description: string;
  demoKey: string;
};

export const CATEGORIES: Category[] = [
  "레이아웃 및 내비게이션",
  "화면 요소 및 시각 장치",
  "알림 및 피드백",
  "버튼 및 조작 요소",
  "입력 폼",
  "데이터 표시",
];

export const TERMS: Term[] = [
  // 레이아웃 및 내비게이션 (11)
  { id: "gnb", name: "GNB (Global Navigation Bar)", category: "레이아웃 및 내비게이션", description: "앱 어디서든 이동할 수 있는 최상단(또는 최하단)의 메인 간판 메뉴.", demoKey: "gnb" },
  { id: "lnb", name: "LNB (Local Navigation Bar)", category: "레이아웃 및 내비게이션", description: "특정 메뉴 영역에 들어갔을 때 그 안에서 다시 길을 잡아주는 서브 메뉴.", demoKey: "lnb" },
  { id: "hamburger", name: "Hamburger Menu (햄버거 메뉴)", category: "레이아웃 및 내비게이션", description: "☰ 모양의 아이콘. 누르면 숨겨져 있던 전체 메뉴가 튀어나옵니다.", demoKey: "hamburger" },
  { id: "breadcrumb", name: "Breadcrumb (브레드크럼)", category: "레이아웃 및 내비게이션", description: "'홈 > 설정 > 내 정보'처럼 지금 내 위치가 어디인지 알려주는 길찾기 표시.", demoKey: "breadcrumb" },
  { id: "pagination", name: "Pagination (페이지네이션)", category: "레이아웃 및 내비게이션", description: "게시판 하단의 '1, 2, 3 … 다음' 같은 페이지 번호 묶음.", demoKey: "pagination" },
  { id: "tabs", name: "Tabs (탭)", category: "레이아웃 및 내비게이션", description: "한 화면 안에서 여러 콘텐츠를 갈아끼며 보여주는 상단 메뉴.", demoKey: "tabs" },
  { id: "accordion", name: "Accordion (아코디언)", category: "레이아웃 및 내비게이션", description: "제목을 누르면 그 아래로 내용이 펼쳐졌다 접혔다 하는 메뉴.", demoKey: "accordion" },
  { id: "modal", name: "Modal / Dialog (모달)", category: "레이아웃 및 내비게이션", description: "화면 위에 떠올라 사용자의 주의를 잡아끄는 팝업 창.", demoKey: "modal" },
  { id: "drawer", name: "Drawer (드로어)", category: "레이아웃 및 내비게이션", description: "옆에서 슥 밀려나오는 서랍형 패널. 모바일 메뉴에서 자주 쓰여요.", demoKey: "drawer" },
  { id: "sidebar", name: "Sidebar (사이드바)", category: "레이아웃 및 내비게이션", description: "화면 좌/우에 고정된 보조 패널. 보통 메뉴나 필터를 담습니다.", demoKey: "sidebar" },
  { id: "sticky", name: "Sticky Header (스티키 헤더)", category: "레이아웃 및 내비게이션", description: "스크롤을 내려도 상단에 찰싹 붙어있는 헤더.", demoKey: "sticky" },

  // 화면 요소 및 시각 장치 (8)
  { id: "card", name: "Card (카드)", category: "화면 요소 및 시각 장치", description: "이미지·제목·내용 등 관련 정보를 둥근 박스 하나로 묶어둔 UI.", demoKey: "card" },
  { id: "avatar", name: "Avatar (아바타)", category: "화면 요소 및 시각 장치", description: "사용자 프로필을 나타내는 작고 동그란 이미지.", demoKey: "avatar" },
  { id: "badge", name: "Badge / Label (뱃지 · 라벨)", category: "화면 요소 및 시각 장치", description: "'New', '알림 3개'처럼 글자 옆에 작게 붙어 상태를 강조하는 스티커.", demoKey: "badge" },
  { id: "divider", name: "Divider (디바이더)", category: "화면 요소 및 시각 장치", description: "콘텐츠와 콘텐츠 사이를 구분하는 얇은 회색 선.", demoKey: "divider" },
  { id: "overlay", name: "Overlay / Backdrop (오버레이)", category: "화면 요소 및 시각 장치", description: "모달 뒤에 깔리는 어두운 반투명 배경. 바깥쪽을 흐리게 만들어 집중을 유도해요.", demoKey: "overlay" },
  { id: "chip", name: "Chip (칩)", category: "화면 요소 및 시각 장치", description: "알약처럼 생긴 작은 태그. 필터/선택값/키워드를 표시할 때 사용.", demoKey: "chip" },
  { id: "emptystate", name: "Empty State (엠프티 스테이트)", category: "화면 요소 및 시각 장치", description: "데이터가 없을 때 빈 화면 대신 보여주는 친절한 안내 영역.", demoKey: "emptystate" },
  { id: "hero", name: "Hero Section (히어로 섹션)", category: "화면 요소 및 시각 장치", description: "페이지 최상단의 가장 큰 시각 영역. 핵심 메시지를 강하게 전달.", demoKey: "hero" },

  // 알림 및 피드백 (7)
  { id: "toast", name: "Toast (토스트)", category: "알림 및 피드백", description: "화면 가장자리에서 슥 나타났다 사라지는 가벼운 알림창.", demoKey: "toast" },
  { id: "tooltip", name: "Tooltip (툴팁)", category: "알림 및 피드백", description: "마우스를 올리면 말풍선처럼 작게 나타나는 부가 설명.", demoKey: "tooltip" },
  { id: "skeleton", name: "Skeleton UI (스켈레톤)", category: "알림 및 피드백", description: "데이터 로딩 중 화면이 멈춘 듯 보이지 않게 띄우는 회색 뼈대 깜빡임.", demoKey: "skeleton" },
  { id: "spinner", name: "Spinner / Loader (스피너)", category: "알림 및 피드백", description: "로딩 중임을 알리는 빙글빙글 도는 원형 애니메이션.", demoKey: "spinner" },
  { id: "progress", name: "Progress Bar (프로그레스 바)", category: "알림 및 피드백", description: "진행률을 가로 막대로 보여주는 게이지.", demoKey: "progress" },
  { id: "snackbar", name: "Snackbar (스낵바)", category: "알림 및 피드백", description: "토스트와 비슷하지만 '되돌리기' 같은 액션 버튼이 함께 있는 알림.", demoKey: "snackbar" },
  { id: "alert", name: "Alert / Banner (얼럿 · 배너)", category: "알림 및 피드백", description: "화면 상단에 띠처럼 붙어 경고/안내를 전달하는 영역.", demoKey: "alert" },

  // 버튼 및 조작 요소 (7)
  { id: "cta", name: "CTA (Call To Action)", category: "버튼 및 조작 요소", description: "화면에서 가장 크고 눈에 띄는 '핵심 행동'을 유도하는 버튼.", demoKey: "cta" },
  { id: "fab", name: "FAB (Floating Action Button)", category: "버튼 및 조작 요소", description: "우측 하단에 둥둥 떠다니는 둥근 핵심 액션 버튼.", demoKey: "fab" },
  { id: "toggle", name: "Toggle / Switch (토글)", category: "버튼 및 조작 요소", description: "스위치 모양으로 켜기/끄기 상태를 표시·조작하는 버튼.", demoKey: "toggle" },
  { id: "stepper", name: "Stepper (스테퍼)", category: "버튼 및 조작 요소", description: "'현재 2/4 단계'처럼 진행 단계를 보여주는 바.", demoKey: "stepper" },
  { id: "dropdown", name: "Dropdown (드롭다운)", category: "버튼 및 조작 요소", description: "클릭하면 아래로 펼쳐지는 선택 메뉴.", demoKey: "dropdown" },
  { id: "iconbtn", name: "Icon Button (아이콘 버튼)", category: "버튼 및 조작 요소", description: "텍스트 없이 아이콘만 있는 작은 버튼. 좁은 공간에서 유용.", demoKey: "iconbtn" },
  { id: "segmented", name: "Segmented Control (세그먼티드 컨트롤)", category: "버튼 및 조작 요소", description: "붙어있는 토글형 선택 버튼 그룹. 모드 전환에 자주 사용.", demoKey: "segmented" },

  // 입력 폼 (9)
  { id: "textfield", name: "Text Field (텍스트 필드)", category: "입력 폼", description: "글자를 직접 타이핑해 넣는 네모난 빈칸.", demoKey: "textfield" },
  { id: "radio", name: "Radio Button (라디오 버튼)", category: "입력 폼", description: "여러 선택지 중 '무조건 1개'만 고르는 동그란 버튼.", demoKey: "radio" },
  { id: "checkbox", name: "Check Box (체크박스)", category: "입력 폼", description: "여러 선택지 중 '여러 개'를 중복해서 고르는 네모 버튼.", demoKey: "checkbox" },
  { id: "placeholder", name: "Placeholder (플레이스홀더)", category: "입력 폼", description: "입력창 안에 옅게 적혀있는 사전 안내 문구.", demoKey: "placeholder" },
  { id: "searchbar", name: "Search Bar (서치바)", category: "입력 폼", description: "돋보기 아이콘이 붙은 검색 전용 입력창.", demoKey: "searchbar" },
  { id: "select", name: "Select (셀렉트 박스)", category: "입력 폼", description: "클릭하면 목록이 뜨고 그 중 하나를 고르는 박스.", demoKey: "select" },
  { id: "slider", name: "Slider (슬라이더)", category: "입력 폼", description: "좌우로 드래그해 값을 조절하는 막대.", demoKey: "slider" },
  { id: "datepicker", name: "Date Picker (데이트 피커)", category: "입력 폼", description: "달력에서 날짜를 콕 집어 고르는 입력 UI.", demoKey: "datepicker" },
  { id: "validation", name: "Form Validation (유효성 검사)", category: "입력 폼", description: "잘못 입력했을 때 빨갛게 표시하고 안내 메시지를 띄우는 장치.", demoKey: "validation" },

  // 데이터 표시 (3)
  { id: "table", name: "Table (테이블)", category: "데이터 표시", description: "행과 열로 정렬된 표 형태의 데이터 표시.", demoKey: "table" },
  { id: "list", name: "List (리스트)", category: "데이터 표시", description: "세로로 나열된 항목 목록. 메일함, 알림함 등에 사용.", demoKey: "list" },
  { id: "chart", name: "Chart (차트)", category: "데이터 표시", description: "막대·선·원형 등으로 데이터를 시각화한 그래프.", demoKey: "chart" },
];
