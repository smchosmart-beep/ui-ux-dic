import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SearchX, Sparkles, X } from "lucide-react";
import { TERMS, CATEGORIES, type Category } from "../data/terms";
import { Demo } from "../components/Demos";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "전체">("전체");

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return TERMS.filter(t => {
      if (cat !== "전체" && t.category !== cat) return false;
      if (!kw) return true;
      return t.name.toLowerCase().includes(kw) || t.description.toLowerCase().includes(kw);
    });
  }, [q, cat]);

  const counts = useMemo(() => {
    const m: Record<string, number> = { 전체: TERMS.length };
    CATEGORIES.forEach(c => { m[c] = TERMS.filter(t => t.category === c).length; });
    return m;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-white pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-mint-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mint-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white shadow-sm rounded-full text-xs font-semibold text-mint-700">
            <Sparkles className="w-3.5 h-3.5" /> 바이브 코더를 위한 시각 사전
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            바이브 코더<br className="sm:hidden" />
            <span className="text-mint-600"> UI/UX 사전</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            AI에게 "그거 있잖아…" 말고, 정확한 용어로 요청하세요.
            45개의 핵심 UI를 글이 아닌 <span className="font-semibold text-slate-900">실제 미니 화면</span>으로 보여드립니다.
          </p>

          <div className="mt-8 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="용어 검색 (예: 토글, 모달, 페이지네이션…)"
              className="w-full bg-white shadow-md rounded-2xl pl-11 pr-11 py-4 text-sm outline-none focus:ring-4 focus:ring-mint-500/20 transition-all placeholder:text-slate-400"
              aria-label="용어 검색"
            />
            {q && (
              <button onClick={() => setQ("")} aria-label="검색어 지우기"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center rounded-full bg-slate-100 hover:bg-slate-200 transition-all active:scale-95">
                <X className="w-3.5 h-3.5 text-slate-500" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Filter */}
      <nav className="sticky top-0 z-20 bg-background/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-1 px-1">
            {(["전체", ...CATEGORIES] as const).map(c => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                    active
                      ? "bg-mint-500 text-white shadow-md shadow-mint-500/20"
                      : "bg-white text-slate-600 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  {c}
                  <span className={`ml-1.5 ${active ? "text-white/80" : "text-slate-400"}`}>
                    {counts[c]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 pt-4">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-12 text-center my-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-mint-50 grid place-items-center">
              <SearchX className="w-7 h-7 text-mint-600" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">찾으시는 용어가 없어요</h2>
            <p className="mt-1 text-sm text-slate-500">다른 키워드로 검색해 보거나 카테고리를 바꿔보세요.</p>
            <button
              onClick={() => { setQ(""); setCat("전체"); }}
              className="mt-5 px-4 py-2 bg-mint-500 text-white rounded-xl text-sm font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all"
            >
              필터 초기화
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map(t => (
              <article
                key={t.id}
                className="group bg-surface rounded-3xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <span className="inline-block px-2.5 py-1 bg-mint-50 text-mint-700 text-[11px] font-semibold rounded-full">
                  {t.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 leading-snug">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed min-h-[60px]">
                  {t.description}
                </p>
                <div className="mt-4">
                  <Demo k={t.demoKey} />
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white/60">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 text-center text-xs text-slate-500">
          총 <span className="font-bold text-mint-600">{TERMS.length}</span>개의 UI/UX 용어 ·
          AI와 더 정확하게 대화하세요 ✨
        </div>
      </footer>
    </div>
  );
}
