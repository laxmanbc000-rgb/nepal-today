// डाटा लेयर: भविष्यमा Supabase / लाइभ API यहीँबाट जोडिन्छ।
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
import { NEWS, NewsItem } from '../data'

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function fetchNews(): Promise<NewsItem[]> {
  await wait(700)
  // परीक्षणका लागि URL मा ?error थप्नुहोस्
  if (new URLSearchParams(location.search).has('error')) throw new Error('डाटा लोड गर्न सकिएन')
  return NEWS // TODO: supabase.from('news').select('*')
}
