import { CATEGORIES, PROVINCES } from '../data'

export function CategoryNav({ cat, setCat }: { cat: string; setCat: (c: string) => void }) {
  const all = [{ id: 'all', name: 'सबै', icon: '🏠' }, ...CATEGORIES]
  return (
    <nav id="cats" className="border-b bg-white">
      <div className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-3 py-2">
        {all.map((c) => (
          <button key={c.id} onClick={() => setCat(c.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold ${cat === c.id ? 'bg-np-red text-white' : 'bg-slate-100 text-np-ink hover:bg-slate-200'}`}>
            {c.icon} {c.name}
          </button>
        ))}
      </div>
    </nav>
  )
}

export function GeoFilter({ province, district, setProvince, setDistrict }:
  { province: string; district: string; setProvince: (v: string) => void; setDistrict: (v: string) => void }) {
  const districts = PROVINCES.find((p) => p.id === province)?.districts ?? PROVINCES.flatMap((p) => p.districts)
  const cls = 'w-full rounded-lg border bg-white px-3 py-2 text-sm'
  return (
    <div id="geo" className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-3 py-3">
      <select aria-label="प्रदेश" className={cls} value={province} onChange={(e) => { setProvince(e.target.value); setDistrict('') }}>
        <option value="">सबै ७ प्रदेश</option>
        {PROVINCES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>
      <select aria-label="जिल्ला" className={cls} value={district} onChange={(e) => setDistrict(e.target.value)}>
        <option value="">सबै ७७ जिल्ला</option>
        {districts.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>
    </div>
  )
}
