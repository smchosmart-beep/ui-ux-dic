import { useState } from "react";
import {
  Menu, ChevronRight, ChevronDown, ChevronLeft, Home, Search, Bell, Check, X,
  Plus, Loader2, Calendar, AlertCircle, MoreHorizontal, Heart, Star, Settings,
  CheckCircle2, Inbox, ArrowRight, MoreVertical, Folder, FileText, User,
} from "lucide-react";

const Box = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-100 rounded-xl p-4 min-h-[140px] flex items-center justify-center ${className}`}>
    {children}
  </div>
);

/* ============ Layout & Navigation ============ */
const GNB = () => (
  <Box>
    <div className="w-full bg-white rounded-lg shadow-sm px-3 py-2 flex items-center justify-between text-xs">
      <span className="font-bold text-mint-600">LOGO</span>
      <div className="flex gap-3 text-slate-600">
        <span className="text-mint-600 font-semibold">홈</span><span>상품</span><span>소식</span><span>마이</span>
      </div>
    </div>
  </Box>
);
const LNB = () => (
  <Box>
    <div className="w-full bg-white rounded-lg shadow-sm p-3 text-xs">
      <div className="font-semibold text-slate-500 mb-2">설정</div>
      <ul className="space-y-1.5">
        <li className="px-2 py-1 rounded-md bg-mint-50 text-mint-700 font-medium">계정 정보</li>
        <li className="px-2 py-1 text-slate-600">알림 설정</li>
        <li className="px-2 py-1 text-slate-600">결제 관리</li>
      </ul>
    </div>
  </Box>
);
const Hamburger = () => {
  const [o, setO] = useState(false);
  return (
    <Box>
      <div className="w-full">
        <button onClick={() => setO(!o)} className="bg-white shadow-sm rounded-lg p-2 active:scale-95 transition-all">
          <Menu className="w-4 h-4 text-slate-700" />
        </button>
        {o && (
          <div className="mt-2 bg-white rounded-lg shadow-md p-2 text-xs space-y-1">
            <div className="px-2 py-1 rounded hover:bg-slate-50">홈</div>
            <div className="px-2 py-1 rounded hover:bg-slate-50">알림</div>
            <div className="px-2 py-1 rounded hover:bg-slate-50">설정</div>
          </div>
        )}
      </div>
    </Box>
  );
};
const Breadcrumb = () => (
  <Box>
    <div className="flex items-center gap-1 text-xs text-slate-500">
      <Home className="w-3 h-3" /> <span>홈</span>
      <ChevronRight className="w-3 h-3" /> <span>설정</span>
      <ChevronRight className="w-3 h-3" /> <span className="text-slate-900 font-semibold">내 정보</span>
    </div>
  </Box>
);
const Pagination = () => (
  <Box>
    <div className="flex items-center gap-1 text-xs">
      <button className="w-7 h-7 rounded-md bg-white shadow-sm grid place-items-center"><ChevronLeft className="w-3 h-3"/></button>
      {[1,2,3,4,5].map(n => (
        <button key={n} className={`w-7 h-7 rounded-md grid place-items-center ${n===3 ? "bg-mint-500 text-white shadow-sm" : "bg-white text-slate-600 shadow-sm"}`}>{n}</button>
      ))}
      <button className="w-7 h-7 rounded-md bg-white shadow-sm grid place-items-center"><ChevronRight className="w-3 h-3"/></button>
    </div>
  </Box>
);
const Tabs = () => {
  const [t, setT] = useState(0);
  const tabs = ["전체", "진행 중", "완료"];
  return (
    <Box>
      <div className="w-full">
        <div className="flex gap-4 border-b border-slate-200 text-xs">
          {tabs.map((x, i) => (
            <button key={x} onClick={() => setT(i)} className={`pb-2 transition-all ${t===i ? "text-mint-600 border-b-2 border-mint-500 font-semibold -mb-px" : "text-slate-500"}`}>{x}</button>
          ))}
        </div>
        <div className="mt-3 text-xs text-slate-600">'{tabs[t]}' 내용이 여기 표시돼요.</div>
      </div>
    </Box>
  );
};
const Accordion = () => {
  const [o, setO] = useState(true);
  return (
    <Box>
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
        <button onClick={() => setO(!o)} className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium">
          <span>배송 안내</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${o ? "rotate-180" : ""}`} />
        </button>
        {o && <div className="px-3 pb-2 text-xs text-slate-500">오후 2시 이전 결제 건은 당일 출고됩니다.</div>}
      </div>
    </Box>
  );
};
const Modal = () => (
  <Box>
    <div className="relative w-full h-full min-h-[110px] bg-slate-300/40 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 w-[80%]">
        <div className="text-xs font-semibold">정말 삭제할까요?</div>
        <div className="mt-2 flex justify-end gap-1">
          <button className="text-[10px] px-2 py-1 rounded bg-slate-100">취소</button>
          <button className="text-[10px] px-2 py-1 rounded bg-mint-500 text-white">삭제</button>
        </div>
      </div>
    </div>
  </Box>
);
const Drawer = () => (
  <Box>
    <div className="relative w-full h-full min-h-[110px] bg-slate-200/60 rounded-lg overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-2/3 bg-white shadow-lg p-3 text-xs">
        <div className="font-semibold mb-2">메뉴</div>
        <div className="space-y-1 text-slate-600">
          <div>홈</div><div>알림</div><div className="text-mint-600 font-medium">설정</div>
        </div>
      </div>
    </div>
  </Box>
);
const Sidebar = () => (
  <Box>
    <div className="w-full flex gap-2">
      <div className="w-16 bg-white rounded-lg shadow-sm p-2 space-y-1 text-[10px]">
        <div className="px-1.5 py-1 rounded bg-mint-50 text-mint-700 font-semibold">홈</div>
        <div className="px-1.5 py-1 text-slate-500">알림</div>
        <div className="px-1.5 py-1 text-slate-500">설정</div>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-sm p-2 text-[10px] text-slate-500">본문 영역</div>
    </div>
  </Box>
);
const Sticky = () => (
  <Box>
    <div className="w-full relative h-[110px] bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="sticky top-0 bg-mint-500 text-white text-[10px] font-semibold px-3 py-2">📌 상단 고정 헤더</div>
      <div className="p-3 text-[10px] text-slate-500 space-y-2">
        <div>스크롤해도 위가 안 사라져요</div>
        <div>… 본문 …</div>
        <div>… 본문 …</div>
      </div>
    </div>
  </Box>
);

/* ============ Visual ============ */
const Card = () => (
  <Box>
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-12 bg-gradient-to-r from-mint-200 to-mint-400" />
      <div className="p-2">
        <div className="text-xs font-semibold">상품 이름</div>
        <div className="text-[10px] text-slate-500">짧은 설명 문구</div>
      </div>
    </div>
  </Box>
);
const Avatar = () => (
  <Box>
    <div className="flex -space-x-2">
      {["bg-mint-500","bg-mint-400","bg-mint-300","bg-slate-300"].map((c,i) => (
        <div key={i} className={`w-8 h-8 rounded-full ${c} ring-2 ring-white grid place-items-center text-white text-[10px] font-bold`}>{["김","이","박","+2"][i]}</div>
      ))}
    </div>
  </Box>
);
const Badge = () => (
  <Box>
    <div className="flex items-center gap-4">
      <div className="relative">
        <Bell className="w-6 h-6 text-slate-700" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-slate-100" />
      </div>
      <span className="px-2 py-0.5 bg-mint-500 text-white text-[10px] font-semibold rounded-full">NEW</span>
      <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-semibold rounded-full">알림 3</span>
    </div>
  </Box>
);
const Divider = () => (
  <Box>
    <div className="w-full text-xs text-slate-500 space-y-2">
      <div>위쪽 콘텐츠</div>
      <div className="h-px bg-slate-200" />
      <div>아래쪽 콘텐츠</div>
    </div>
  </Box>
);
const Overlay = () => (
  <Box>
    <div className="relative w-full h-[110px] bg-white rounded-lg overflow-hidden">
      <div className="p-2 text-[10px] text-slate-500">아래 콘텐츠…</div>
      <div className="absolute inset-0 bg-slate-900/60 grid place-items-center">
        <span className="text-white text-xs font-semibold">반투명 오버레이</span>
      </div>
    </div>
  </Box>
);
const Chip = () => (
  <Box>
    <div className="flex flex-wrap gap-1.5">
      {["#디자인","#개발","#기획"].map(t => (
        <span key={t} className="inline-flex items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-full text-[10px] text-slate-700">
          {t}<X className="w-2.5 h-2.5 text-slate-400" />
        </span>
      ))}
      <span className="px-2 py-1 bg-mint-500 text-white rounded-full text-[10px]">+ 추가</span>
    </div>
  </Box>
);
const EmptyStateDemo = () => (
  <Box>
    <div className="text-center">
      <Inbox className="w-7 h-7 text-slate-400 mx-auto" />
      <div className="mt-1 text-xs font-medium text-slate-700">아직 메시지가 없어요</div>
      <div className="text-[10px] text-slate-500">첫 대화를 시작해 보세요!</div>
    </div>
  </Box>
);
const Hero = () => (
  <Box>
    <div className="w-full text-center py-2">
      <div className="text-sm font-extrabold text-slate-900">큰 한 줄 카피</div>
      <div className="text-[10px] text-slate-500 mt-1">부제목이 들어갑니다</div>
      <button className="mt-2 px-3 py-1 bg-mint-500 text-white text-[10px] rounded-md shadow-sm">시작하기</button>
    </div>
  </Box>
);

/* ============ Feedback ============ */
const Toast = () => (
  <Box>
    <div className="bg-slate-900 text-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2 text-xs animate-pulse">
      <CheckCircle2 className="w-4 h-4 text-mint-400" /> 저장되었습니다
    </div>
  </Box>
);
const Tooltip = () => (
  <Box>
    <div className="relative">
      <button className="px-3 py-1.5 bg-white shadow-sm rounded-md text-xs">버튼 위에 마우스</button>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap">
        도움말 텍스트
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-slate-900 rotate-45" />
      </div>
    </div>
  </Box>
);
const Skeleton = () => (
  <Box>
    <div className="w-full flex gap-2 items-center animate-pulse">
      <div className="w-8 h-8 rounded-full bg-slate-300" />
      <div className="flex-1 space-y-1.5">
        <div className="h-2 bg-slate-300 rounded w-3/4" />
        <div className="h-2 bg-slate-300 rounded w-1/2" />
        <div className="h-2 bg-slate-300 rounded w-2/3" />
      </div>
    </div>
  </Box>
);
const Spinner = () => (
  <Box>
    <Loader2 className="w-8 h-8 text-mint-500 animate-spin" />
  </Box>
);
const Progress = () => (
  <Box>
    <div className="w-full">
      <div className="flex justify-between text-[10px] text-slate-500 mb-1"><span>업로드 중</span><span>60%</span></div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full w-3/5 bg-mint-500 rounded-full" />
      </div>
    </div>
  </Box>
);
const Snackbar = () => (
  <Box>
    <div className="bg-slate-900 text-white px-3 py-2 rounded-lg shadow-md flex items-center gap-3 text-xs">
      <span>1개 항목이 삭제됨</span>
      <button className="text-mint-400 font-semibold">되돌리기</button>
    </div>
  </Box>
);
const Alert = () => (
  <Box>
    <div className="w-full bg-amber-50 border-l-4 border-amber-400 rounded-md p-2 flex items-start gap-2">
      <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5" />
      <div className="text-[11px] text-amber-800">시스템 점검이 곧 시작됩니다.</div>
    </div>
  </Box>
);

/* ============ Buttons ============ */
const CTA = () => (
  <Box>
    <button className="px-6 py-3 bg-mint-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2 text-sm">
      지금 시작하기 <ArrowRight className="w-4 h-4" />
    </button>
  </Box>
);
const FAB = () => (
  <Box>
    <div className="relative w-full h-[110px] bg-white rounded-lg shadow-sm">
      <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-mint-500 text-white grid place-items-center shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  </Box>
);
const Toggle = () => {
  const [on, setOn] = useState(true);
  return (
    <Box>
      <button onClick={() => setOn(!on)} className={`w-12 h-7 rounded-full relative transition-all ${on ? "bg-mint-500" : "bg-slate-300"} active:scale-95`}>
        <span className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
      </button>
    </Box>
  );
};
const Stepper = () => (
  <Box>
    <div className="w-full flex items-center text-[10px]">
      {[1,2,3,4].map((n,i) => (
        <div key={n} className="flex items-center flex-1 last:flex-none">
          <div className={`w-6 h-6 rounded-full grid place-items-center font-bold ${n<=2 ? "bg-mint-500 text-white" : "bg-slate-200 text-slate-500"}`}>{n<=2 ? <Check className="w-3 h-3"/> : n}</div>
          {i<3 && <div className={`flex-1 h-1 mx-1 ${n<2 ? "bg-mint-500" : "bg-slate-200"}`} />}
        </div>
      ))}
    </div>
  </Box>
);
const Dropdown = () => {
  const [o, setO] = useState(false);
  return (
    <Box>
      <div className="relative">
        <button onClick={()=>setO(!o)} className="bg-white shadow-sm rounded-md px-3 py-1.5 text-xs flex items-center gap-1 active:scale-95 transition-all">
          정렬: 최신순 <ChevronDown className={`w-3 h-3 transition-transform ${o?"rotate-180":""}`} />
        </button>
        {o && (
          <div className="absolute top-full mt-1 bg-white rounded-md shadow-md p-1 text-xs w-32 z-10">
            <div className="px-2 py-1 rounded hover:bg-slate-50 text-mint-600 font-medium">최신순</div>
            <div className="px-2 py-1 rounded hover:bg-slate-50">인기순</div>
            <div className="px-2 py-1 rounded hover:bg-slate-50">가격순</div>
          </div>
        )}
      </div>
    </Box>
  );
};
const IconBtn = () => (
  <Box>
    <div className="flex gap-2">
      {[Heart, Star, Settings, MoreVertical].map((Ic, i) => (
        <button key={i} className="w-9 h-9 rounded-full bg-white shadow-sm grid place-items-center hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all">
          <Ic className="w-4 h-4 text-slate-700" />
        </button>
      ))}
    </div>
  </Box>
);
const Segmented = () => {
  const [s, setS] = useState(1);
  const items = ["일", "주", "월"];
  return (
    <Box>
      <div className="bg-white shadow-sm p-1 rounded-lg flex">
        {items.map((it, i) => (
          <button key={it} onClick={()=>setS(i)} className={`px-4 py-1 text-xs rounded-md transition-all ${s===i ? "bg-mint-500 text-white shadow-sm" : "text-slate-600"}`}>{it}</button>
        ))}
      </div>
    </Box>
  );
};

/* ============ Form ============ */
const TextField = () => (
  <Box>
    <div className="w-full">
      <label className="block text-[10px] text-slate-500 mb-1">이름</label>
      <input defaultValue="김러버블" className="w-full bg-white shadow-sm rounded-md px-2.5 py-1.5 text-xs outline-none focus:ring-2 focus:ring-mint-500/40" />
    </div>
  </Box>
);
const Radio = () => {
  const [v, setV] = useState("b");
  const opts = [["a","아침"],["b","점심"],["c","저녁"]];
  return (
    <Box>
      <div className="space-y-1.5 text-xs">
        {opts.map(([k,l]) => (
          <label key={k} className="flex items-center gap-2 cursor-pointer">
            <span className={`w-4 h-4 rounded-full grid place-items-center transition-all ${v===k ? "bg-mint-500" : "bg-white shadow-sm"}`}>
              {v===k && <span className="w-1.5 h-1.5 bg-white rounded-full"/>}
            </span>
            <input type="radio" className="hidden" checked={v===k} onChange={()=>setV(k)} />
            <span>{l}</span>
          </label>
        ))}
      </div>
    </Box>
  );
};
const Checkbox = () => {
  const [v, setV] = useState<Record<string, boolean>>({a:true, b:true, c:false});
  return (
    <Box>
      <div className="space-y-1.5 text-xs">
        {[["a","피자"],["b","파스타"],["c","샐러드"]].map(([k,l]) => (
          <label key={k} className="flex items-center gap-2 cursor-pointer">
            <span onClick={()=>setV({...v,[k]:!v[k]})} className={`w-4 h-4 rounded grid place-items-center transition-all ${v[k] ? "bg-mint-500" : "bg-white shadow-sm"}`}>
              {v[k] && <Check className="w-3 h-3 text-white" />}
            </span>
            <span>{l}</span>
          </label>
        ))}
      </div>
    </Box>
  );
};
const Placeholder = () => (
  <Box>
    <input placeholder="이메일을 입력하세요" className="w-full bg-white shadow-sm rounded-md px-2.5 py-2 text-xs outline-none placeholder:text-slate-400" />
  </Box>
);
const SearchBar = () => (
  <Box>
    <div className="w-full relative">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
      <input placeholder="검색어를 입력하세요" className="w-full bg-white shadow-sm rounded-full pl-8 pr-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-mint-500/40" />
    </div>
  </Box>
);
const SelectDemo = () => (
  <Box>
    <div className="relative w-full">
      <select className="w-full appearance-none bg-white shadow-sm rounded-md px-2.5 py-1.5 text-xs outline-none">
        <option>서울특별시</option><option>부산광역시</option><option>대구광역시</option>
      </select>
      <ChevronDown className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    </div>
  </Box>
);
const Slider = () => (
  <Box>
    <div className="w-full">
      <div className="text-[10px] text-slate-500 mb-1">가격: 0 – 60,000원</div>
      <div className="relative h-1.5 bg-slate-200 rounded-full">
        <div className="absolute left-0 h-full w-3/5 bg-mint-500 rounded-full" />
        <div className="absolute left-[60%] -translate-x-1/2 -top-1.5 w-4 h-4 bg-white shadow-md rounded-full border-2 border-mint-500" />
      </div>
    </div>
  </Box>
);
const DatePicker = () => (
  <Box>
    <div className="bg-white shadow-sm rounded-lg p-2 text-[10px]">
      <div className="flex justify-between items-center mb-1">
        <ChevronLeft className="w-3 h-3" />
        <span className="font-semibold">2026.05</span>
        <ChevronRight className="w-3 h-3" />
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {["일","월","화","수","목","금","토"].map(d => <div key={d} className="text-slate-400">{d}</div>)}
        {Array.from({length:14}, (_,i) => i+10).map(n => (
          <div key={n} className={`py-0.5 rounded ${n===17 ? "bg-mint-500 text-white" : "text-slate-700"}`}>{n}</div>
        ))}
      </div>
    </div>
  </Box>
);
const Validation = () => (
  <Box>
    <div className="w-full">
      <input defaultValue="abc" className="w-full bg-white rounded-md px-2.5 py-1.5 text-xs outline-none border-2 border-red-400 focus:ring-2 focus:ring-red-200" />
      <div className="mt-1 text-[10px] text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> 이메일 형식이 올바르지 않아요</div>
    </div>
  </Box>
);

/* ============ Data ============ */
const Table = () => (
  <Box>
    <div className="w-full bg-white rounded-md shadow-sm overflow-hidden text-[10px]">
      <div className="grid grid-cols-3 bg-slate-50 px-2 py-1.5 font-semibold text-slate-600"><span>이름</span><span>역할</span><span>상태</span></div>
      {[["김민","기획","활성"],["이서","개발","활성"],["박준","디자인","대기"]].map((r,i) => (
        <div key={i} className="grid grid-cols-3 px-2 py-1.5"><span>{r[0]}</span><span className="text-slate-500">{r[1]}</span><span className="text-mint-600 font-medium">{r[2]}</span></div>
      ))}
    </div>
  </Box>
);
const List = () => (
  <Box>
    <div className="w-full bg-white rounded-md shadow-sm divide-y divide-slate-100 text-xs">
      {([[Folder,"디자인 자료"],[FileText,"기획서 v2"],[User,"새 멤버 초대"]] as const).map(([Ic,t],i) => (
        <div key={i} className="flex items-center gap-2 px-2.5 py-2">
          <Ic className="w-3.5 h-3.5 text-mint-500" /><span>{t}</span>
          <ChevronRight className="w-3 h-3 text-slate-300 ml-auto" />
        </div>
      ))}
    </div>
  </Box>
);
const Chart = () => (
  <Box>
    <div className="w-full flex items-end gap-2 h-20">
      {[45,70,30,90,55,80].map((h,i) => (
        <div key={i} className="flex-1 bg-gradient-to-t from-mint-500 to-mint-300 rounded-t" style={{height:`${h}%`}} />
      ))}
    </div>
  </Box>
);

/* ============ Map ============ */
const DEMOS: Record<string, React.FC> = {
  gnb: GNB, lnb: LNB, hamburger: Hamburger, breadcrumb: Breadcrumb, pagination: Pagination,
  tabs: Tabs, accordion: Accordion, modal: Modal, drawer: Drawer, sidebar: Sidebar, sticky: Sticky,
  card: Card, avatar: Avatar, badge: Badge, divider: Divider, overlay: Overlay, chip: Chip,
  emptystate: EmptyStateDemo, hero: Hero,
  toast: Toast, tooltip: Tooltip, skeleton: Skeleton, spinner: Spinner, progress: Progress,
  snackbar: Snackbar, alert: Alert,
  cta: CTA, fab: FAB, toggle: Toggle, stepper: Stepper, dropdown: Dropdown, iconbtn: IconBtn, segmented: Segmented,
  textfield: TextField, radio: Radio, checkbox: Checkbox, placeholder: Placeholder, searchbar: SearchBar,
  select: SelectDemo, slider: Slider, datepicker: DatePicker, validation: Validation,
  table: Table, list: List, chart: Chart,
};

export function Demo({ k }: { k: string }) {
  const C = DEMOS[k];
  if (!C) return <Box><span className="text-xs text-slate-400">데모 준비 중</span></Box>;
  return <C />;
}
