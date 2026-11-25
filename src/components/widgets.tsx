import { SampleBadge } from './layout'

const Box = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl bg-white p-4 shadow-sm">
    <h3 className="mb-2 flex items-center justify-between font-extrabold text-np-navy">{title} <SampleBadge /></h3>{children}
  </div>
)
const Row = ({ a, b, c }: { a: string; b: string; c?: string }) => (
  <div className="flex justify-between border-b py-1 text-sm last:border-0"><span>{a}</span><span className="font-semibold">{b} {c}</span></div>
)

export const WeatherWidget = () => (
  <Box title="⛅ मौसम">
    <Row a="काठमाडौँ" b="— °C" c="☁️" /><Row a="पोखरा" b="— °C" c="🌤️" /><Row a="विराटनगर" b="— °C" c="☀️" />
    <p className="mt-2 text-[11px] text-slate-500">लाइभ मौसम API जोडेपछि वास्तविक तापक्रम देखिनेछ।</p>
  </Box>
)
export const NepseWidget = () => (
  <Box title="📈 नेप्से (NEPSE)">
    <Row a="सूचकाङ्क" b="—" /><Row a="कारोबार रकम" b="—" /><Row a="परिवर्तन" b="—" />
    <p className="mt-2 text-[11px] text-slate-500">लाइभ शेयर बजार API जोडेपछि वास्तविक तथ्याङ्क देखिनेछ।</p>
  </Box>
)
export const GoldWidget = () => (
  <Box title="🪙 सुन-चाँदी">
    <Row a="सुन (प्रति तोला)" b="—" /><Row a="चाँदी (प्रति तोला)" b="—" />
    <p className="mt-2 text-[11px] text-slate-500">आधिकारिक स्रोतको API जोडेपछि वास्तविक भाव देखिनेछ।</p>
  </Box>
)
