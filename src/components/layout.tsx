import { BREAKING } from '../data'

export const SampleBadge = ({ text = 'नमुना डाटा' }: { text?: string }) => (
  <span className="inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800">{text}</span>
)

export function Header({ q, setQ, onHome }: { q: string; setQ: (v: string) => void; onHome: () => void }) {
  return (
    <header className="sticky top-0 z-30 shadow">
      <div className="h-1 bg-np-red" />
      <div className="bg-np-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2">
          <button onClick={onHome} className="flex items-center gap-2 text-left" aria-label="गृहपृष्ठ">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-extrabold text-np-red ring-2 ring-np-red">NT</span>
            <span>
              <span className="block text-lg font-extrabold leading-none tracking-wide">NEPAL <span className="text-red-300">TODAY</span> 🇳🇵</span>
              <span className="hidden text-[11px] text-blue-100 sm:block">नेपालको डिजिटल सूचना केन्द्र।</span>
            </span>
          </button>
          <div className="ml-auto hidden w-80 md:block">
            <SearchBox q={q} setQ={setQ} />
          </div>
        </div>
        <div className="px-3 pb-2 md:hidden"><SearchBox q={q} setQ={setQ} /></div>
      </div>
    </header>
  )
}

function SearchBox({ q, setQ }: { q: string; setQ: (v: string) => void }) {
  return (
    <div className="relative">
      <input id="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="समाचार खोज्नुहोस्..."
        className="w-full rounded-full bg-white py-2 pl-4 pr-10 text-sm text-np-ink outline-none focus:ring-2 focus:ring-np-red" />
      {q ? <button onClick={() => setQ('')} className="absolute right-3 top-1.5 text-slate-500" aria-label="खाली गर्नुहोस्">✕</button>
         : <span className="absolute right-3 top-2 text-slate-400">🔍</span>}
    </div>
  )
}

export function Ticker() {
  const line = [...BREAKING, ...BREAKING]
  return (
    <div className="flex items-center overflow-hidden bg-np-red text-white">
      <span className="z-10 shrink-0 bg-np-ink px-3 py-1.5 text-xs font-extrabold">ब्रेकिङ</span>
      <div className="overflow-hidden"><div className="marquee flex w-max gap-10 whitespace-nowrap py-1.5 text-sm">
        {line.map((t, i) => <span key={i}>● {t}</span>)}
      </div></div>
    </div>
  )
}

export function BottomNav({ active, onGo }: { active: string; onGo: (k: string) => void }) {
  const items = [['home','🏠','गृह'],['search','🔍','खोज'],['cats','🗂️','श्रेणी'],['geo','📍','जिल्ला']]
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t bg-white shadow-[0_-2px_8px_rgba(0,0,0,.08)] md:hidden">
      {items.map(([k, ic, label]) => (
        <button key={k} onClick={() => onGo(k)} className={`flex flex-col items-center py-2 text-xs ${active === k ? 'font-bold text-np-red' : 'text-slate-600'}`}>
          <span className="text-xl">{ic}</span>{label}
        </button>
      ))}
    </nav>
  )
}

export const Footer = () => (
  <footer className="mt-8 bg-np-ink text-blue-100">
    <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 text-sm md:grid-cols-3">
      <div><p className="text-lg font-extrabold text-white">NEPAL TODAY 🇳🇵</p><p>नेपालको डिजिटल सूचना केन्द्र।</p></div>
      <div><p className="mb-1 font-semibold text-white">सूचना</p><p>यो वेबसाइटमा हाल देखिएको सबै सामग्री नमुना (sample) हो, लाइभ समाचार होइन।</p></div>
      <div><p className="mb-1 font-semibold text-white">सम्पर्क</p><p>about · सम्पर्क · गोपनीयता नीति · विज्ञापन (छिट्टै)</p></div>
    </div>
    <div className="bg-black/30 py-2 text-center text-xs">© NEPAL TODAY — सर्वाधिकार सुरक्षित</div>
  </footer>
)
