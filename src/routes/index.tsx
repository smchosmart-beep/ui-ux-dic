import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { TERMS, CATEGORIES, type Category } from "../data/terms";
import { Demo } from "../components/Demos";

export const Route = createFileRoute("/")({
  component: Page,
});

/* Anthropic radial spike-mark (4-spoke asterisk) */
function SpikeMark({ className = "w-5 h-5", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={fill}
        d="M12 1.5c.5 4.2 1.7 6.6 3.6 7.9 1.9 1.3 4.3 1.8 6.9 1.6v2c-2.6-.2-5 .3-6.9 1.6-1.9 1.3-3.1 3.7-3.6 7.9-.5-4.2-1.7-6.6-3.6-7.9-1.9-1.3-4.3-1.8-6.9-1.6v-2c2.6.2 5-.3 6.9-1.6C10.3 8.1 11.5 5.7 12 1.5Z"
      />
    </svg>
  );
}

function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "전체">("전체");

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return TERMS.filter((t) => {
      if (cat !== "전체" && t.category !== cat) return false;
      if (!kw) return true;
      return t.name.toLowerCase().includes(kw) || t.description.toLowerCase().includes(kw);
    });
  }, [q, cat]);

  const counts = useMemo(() => {
    const m: Record<string, number> = { 전체: TERMS.length };
    CATEGORIES.forEach((c) => {
      m[c] = TERMS.filter((t) => t.category === c).length;
    });
    return m;
  }, []);

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 bg-[#faf9f5]/90 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto h-16 px-6 sm:px-10 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-ink">
            <SpikeMark className="w-5 h-5" fill="#141413" />
            <span className="font-serif text-xl tracking-tight">Vibe UI/UX Dict</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-mute">
            <a href="#dictionary" className="hover:text-ink transition-colors">Dictionary</a>
            <a href="#cta" className="hover:text-ink transition-colors">About</a>
          </nav>
          <a
            href="#dictionary"
            className="inline-flex items-center gap-1.5 h-10 px-5 rounded-md bg-coral text-white text-sm font-medium hover:bg-coral-active transition-colors"
          >
            Try it
          </a>
        </div>
      </header>

      {/* Hero Band */}
      <section id="top" className="bg-canvas">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-20 pb-24 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-mute font-medium">
              <span className="w-6 h-px bg-mute" /> A dictionary for vibe coders
            </span>
            <h1 className="mt-6 font-serif text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.04] tracking-[-0.025em] text-ink">
              AI에게 정확히<br />말하는 법.
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-body max-w-xl">
              "그거 있잖아…" 대신 정확한 용어로 요청하세요.
              45개의 핵심 UI/UX를 글이 아닌 <span className="text-ink font-medium">실제 미니 화면</span>으로 보여드립니다.
            </p>
            <div className="mt-10 flex items-center gap-5">
              <a
                href="#dictionary"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-md bg-coral text-white text-[15px] font-medium hover:bg-coral-active transition-colors"
              >
                사전 열기 <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#cta" className="text-[15px] text-coral hover:text-coral-active transition-colors">
                왜 만들었나요? →
              </a>
            </div>
          </div>

          {/* Dark code-window hero card */}
          <div className="rounded-xl bg-surface-dark text-on-dark overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 bg-surface-dark-elev">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-on-dark-soft font-mono">prompt.txt</span>
            </div>
            <pre className="px-6 py-6 text-[13.5px] leading-[1.7] font-mono text-on-dark overflow-x-auto">
              <span className="text-on-dark-soft"># 모호한 요청</span>
              {"\n"}
              <span className="text-[#e8a55a]">User:</span> 위에 뜨는 알림 같은 거 만들어줘
              {"\n\n"}
              <span className="text-on-dark-soft"># 정확한 요청</span>
              {"\n"}
              <span className="text-[#5db8a6]">User:</span> 우측 상단에 <span className="text-coral">Toast</span> 컴포넌트를
              {"\n        "}3초간 표시하고 자동으로 닫아줘.
              {"\n\n"}
              <span className="text-[#e8a55a]">AI:</span> 정확히 그렇게 만들어 드릴게요. ✓
            </pre>
          </div>
        </div>
      </section>

      {/* Search + Filter */}
      <section id="dictionary" className="border-t border-hairline bg-canvas">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-mute font-medium">Dictionary</span>
              <h2 className="mt-2 font-serif text-[32px] sm:text-[40px] tracking-[-0.02em] text-ink leading-[1.1]">
                45개 용어, 6개 카테고리.
              </h2>
            </div>

            <div className="relative w-full lg:w-[360px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="용어 검색 (예: 토글, 모달…)"
                aria-label="용어 검색"
                className="w-full h-11 pl-10 pr-10 rounded-md bg-canvas border border-hairline text-[15px] text-ink placeholder:text-mute-soft outline-none focus:border-coral focus:ring-2 focus:ring-coral/15 transition-all"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  aria-label="검색어 지우기"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 grid place-items-center rounded-md hover:bg-surface-card transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-mute" />
                </button>
              )}
            </div>
          </div>

          {/* Category tabs */}
          <div className="mt-8 flex gap-1 overflow-x-auto -mx-1 px-1">
            {(["전체", ...CATEGORIES] as const).map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-surface-card text-ink"
                      : "text-mute hover:text-ink hover:bg-surface-soft"
                  }`}
                >
                  {c}
                  <span className={`text-xs ${active ? "text-coral" : "text-mute-soft"}`}>
                    {counts[c]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Card Grid */}
      <main className="bg-canvas">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pb-24">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <h3 className="font-serif text-3xl tracking-[-0.02em] text-ink">
                찾으시는 용어가 없어요.
              </h3>
              <p className="mt-3 text-body">다른 키워드로 검색해 보거나 카테고리를 바꿔보세요.</p>
              <button
                onClick={() => {
                  setQ("");
                  setCat("전체");
                }}
                className="mt-6 text-coral hover:text-coral-active text-[15px]"
              >
                필터 초기화 →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((t) => (
                <article
                  key={t.id}
                  className="rounded-xl bg-surface-card p-7 flex flex-col gap-4 transition-colors hover:bg-surface-cream-strong"
                >
                  <div className="flex items-center gap-2">
                    <SpikeMark className="w-3 h-3" fill="#cc785c" />
                    <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-mute">
                      {t.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-[26px] leading-[1.15] tracking-[-0.02em] text-ink">
                    {t.name}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-body min-h-[60px]">
                    {t.description}
                  </p>
                  <div className="mt-auto rounded-lg bg-canvas p-4 border border-hairline-soft">
                    <Demo k={t.demoKey} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Coral CTA Band */}
      <section id="cta" className="bg-canvas">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pb-24">
          <div className="rounded-xl bg-coral text-white p-12 sm:p-16">
            <h2 className="font-serif text-[36px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] max-w-2xl">
              AI와 정확하게 대화할 준비, 끝났어요.
            </h2>
            <p className="mt-4 text-[16px] text-white/85 max-w-xl">
              45개 용어를 머리에 넣었다면, 이제 AI에게 짧고 정확한 한 문장으로 화면을 그려달라고 말해보세요.
            </p>
            <a
              href="#dictionary"
              className="mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-canvas text-ink text-sm font-medium hover:bg-white transition-colors"
            >
              사전으로 돌아가기 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dark text-on-dark-soft">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16">
          <div className="flex items-center gap-2 text-on-dark">
            <SpikeMark className="w-5 h-5" fill="#faf9f5" />
            <span className="font-serif text-xl tracking-tight">Vibe UI/UX Dict</span>
          </div>
          <p className="mt-5 text-sm max-w-md leading-relaxed">
            총 <span className="text-on-dark font-medium">{TERMS.length}</span>개의 UI/UX 용어 ·
            바이브 코더가 AI와 정확하게 대화하도록 돕습니다.
          </p>
          <div className="mt-10 pt-8 border-t border-white/10 text-xs">
            © {new Date().getFullYear()} Vibe UI/UX Dict. Inspired by Anthropic's editorial design language.
          </div>
        </div>
      </footer>
    </div>
  );
}
