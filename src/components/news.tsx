import { CATEGORIES, GRADIENTS, NewsItem, PROVINCES } from '../data'
import { SampleBadge } from './layout'

const catOf = (id: string) => CATEGORIES.find((c) => c.id === id)
const provOf = (id: string) => PROVINCES.find((p) => p.id === id)?.name ?? ''
const grad = (id: string) => GRADIENTS[CATEGORIES.findIndex((c) => c.id === id) % GRADIENTS.length]

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <div className={`flex h-28 items-center justify-center bg-gradient-to-br text-5xl ${grad(item.category)}`}>{item.emoji}</div>
      <div className="p-3">
        <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="rounded bg-np-navy px-1.5 py-0.5 font-semibold text-white">{catOf(item.category)?.name}</span>
          <SampleBadge text="नमुना" />
        </div>
        <h3 className="font-bold leading-snug">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.summary}</p>
        <p className="mt-2 text-xs text-slate-500">📍 {item.district}, {provOf(item.province)}</p>
      </div>
    </article>
  )
}

export function Featured({ item }: { item: NewsItem }) {
  return (
    <article className={`relative overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white shadow ${grad(item.category)}`}>
      <div className="absolute -right-2 -top-4 text-9xl opacity-20">{item.emoji}</div>
      <div className="relative flex min-h-[200px] flex-col justify-end">
        <div className="mb-2 flex gap-2 text-xs"><span className="rounded bg-np-red px-2 py-0.5 font-bold">मुख्य समाचार</span><SampleBadge text="नमुना" /></div>
        <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">{item.title}</h2>
        <p className="mt-2 text-sm text-white/90">{item.summary}</p>
        <p className="mt-2 text-xs text-white/80">📍 {item.district}, {provOf(item.province)}</p>
      </div>
    </article>
  )
}

export function Trending({ items }: { items: NewsItem[] }) {
  return (
    <aside className="rounded-xl bg-white p-4 shadow-sm">
      <h3 className="mb-3 border-l-4 border-np-red pl-2 text-lg font-extrabold">🔥 ट्रेन्डिङ <SampleBadge text="नमुना" /></h3>
      <ol className="space-y-3">
        {items.map((it, i) => (
          <li key={it.id} className="flex gap-3">
            <span className="text-2xl font-extrabold text-np-red/70">{i + 1}</span>
            <span className="text-sm font-semibold leading-snug">{it.title}</span>
          </li>
        ))}
      </ol>
    </aside>
  )
}

export const SectionTitle = ({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) => (
  <div className="mb-3 flex items-center justify-between">
    <h2 className="border-l-4 border-np-red pl-2 text-xl font-extrabold text-np-navy">{children}</h2>{action}
  </div>
)

export const Loading = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="animate-pulse overflow-hidden rounded-xl bg-white"><div className="h-28 bg-slate-200" />
        <div className="space-y-2 p-3"><div className="h-3 w-1/3 rounded bg-slate-200" /><div className="h-4 rounded bg-slate-200" /><div className="h-3 w-2/3 rounded bg-slate-200" /></div></div>
    ))}
  </div>
)

export const Empty = ({ onReset }: { onReset: () => void }) => (
  <div className="rounded-xl bg-white p-8 text-center shadow-sm">
    <p className="text-5xl">🔎</p><p className="mt-2 font-bold">कुनै नतिजा फेला परेन</p>
    <p className="text-sm text-slate-600">खोज वा फिल्टर परिवर्तन गरेर हेर्नुहोस्।</p>
    <button onClick={onReset} className="mt-4 rounded-full bg-np-red px-5 py-2 text-sm font-bold text-white">फिल्टर हटाउनुहोस्</button>
  </div>
)

export const ErrorBox = ({ msg, onRetry }: { msg: string; onRetry: () => void }) => (
  <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
    <p className="text-5xl">⚠️</p><p className="mt-2 font-bold text-red-700">{msg}</p>
    <button onClick={onRetry} className="mt-4 rounded-full bg-np-navy px-5 py-2 text-sm font-bold text-white">फेरि प्रयास गर्नुहोस्</button>
  </div>
)
