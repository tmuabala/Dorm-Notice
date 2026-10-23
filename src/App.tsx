import { useState } from 'react'

type Category = 'All' | 'Announcements' | 'Events' | 'Reminders' | 'Lost & Found'

interface Notice {
  id: number
  category: Exclude<Category, 'All'>
  title: string
  body: string
  author: string
  date: string
  pinColor: string
  cardColor: string
  urgent?: boolean
}

const NOTICES: Notice[] = [
  {
    id: 1,
    category: 'Announcements',
    title: 'Hot Water Maintenance',
    body: 'Hot water will be unavailable on Fri 22 Aug from 8–11 AM due to boiler servicing. Stock up on kettles — sorry for the inconvenience!',
    author: 'Block Warden',
    date: '18 Aug 2026',
    pinColor: '#d94f3d',
    cardColor: '#fffef9',
    urgent: true,
  },
  {
    id: 2,
    category: 'Events',
    title: 'Dorm Night',
    body: 'Join us on the  Saturday 23 Aug at 6 PM.',
    author: 'Priya Mehta',
    date: '17 Aug 2026',
    pinColor: '#3d9e60',
    cardColor: '#fce7f3',
  },
  {
    id: 3,
    category: 'Reminders',
    title: 'Bin Rota — Week 34',
    body: 'It\'s Floor C\'s turn to take out all recycling and general waste bins by 7 AM Monday. Check the rota sheet on the fridge for room assignments.',
    author: 'Dorm Council',
    date: '17 Aug 2026',
    pinColor: '#3d6fb5',
    cardColor: '#dbeafe',
  },
  {
    id: 4,
    category: 'Lost & Found',
    title: 'Found: Blue Hydroflask',
    body: '500ml navy Hydroflask with stickers found in laundry room B. Left at Reception desk — bring ID to collect. If unclaimed by 25 Aug it\'ll be donated.',
    author: 'Jess O\'Brien',
    date: '16 Aug 2026',
    pinColor: '#3d6fb5',
    cardColor: '#fef9c3',
  },
  {
    id: 5,
    category: 'Announcements',
    title: 'Guest Policy Reminder',
    body: 'Overnight guests must be registered at Reception by 9 PM. Max 2 consecutive nights per guest per month. Please ensure your guests sign in.',
    author: ' Warden',
    date: '15 Aug 2026',
    pinColor: '#d94f3d',
    cardColor: '#fffef9',
  },
  {
    id: 6,
    category: 'Events',
    title: 'Study Swap: Finals Prep',
    body: 'Trading notes and past papers in the Common Room, Sun 24 Aug 2–5 PM. All subjects welcome. Bring your summaries and snacks.',
    author: 'Aiko Tanaka',
    date: '15 Aug 2026',
    pinColor: '#3d9e60',
    cardColor: '#fce7f3',
  },
  {
    id: 7,
    category: 'Lost & Found',
    title: 'Lost: AirPods Case',
    body: 'White AirPods Gen 3 case (no buds inside) last seen in Floor 2 kitchen on Thursday evening. Please message Room 208 if found. Reward offered.',
    author: 'Marcus Osei',
    date: '14 Aug 2026',
    pinColor: '#c45c2a',
    cardColor: '#fef9c3',
  },
  {
    id: 8,
    category: 'Reminders',
    title: 'Laundry Machine Booking',
    body: 'Machines 3 & 4 are back online after repairs. Book your slot via the MyDorm app. Please collect laundry within 30 mins of cycle end.',
    author: 'Facilities',
    date: '13 Aug 2026',
    pinColor: '#3d6fb5',
    cardColor: '#dbeafe',
  },
]

const CATEGORIES: Category[] = ['All', 'Announcements', 'Events', 'Reminders', 'Lost & Found']

const CATEGORY_COLORS: Record<Exclude<Category, 'All'>, string> = {
  Announcements: '#d94f3d',
  Events: '#3d9e60',
  Reminders: '#3d6fb5',
  'Lost & Found': '#c45c2a',
}

function Pin({ color }: { color: string }) {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
      <div
        className="w-5 h-5 rounded-full shadow-md border-2 border-white/60"
        style={{ backgroundColor: color }}
      />
      <div
        className="w-1.5 h-4 mx-auto -mt-1 rounded-b-full opacity-40"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

function NoticeCard({ notice }: { notice: Notice }) {
  const [expanded, setExpanded] = useState(false)
  const label = CATEGORY_COLORS[notice.category]

  return (
    <div
      className="relative pt-4 cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
    >
      <Pin color={notice.pinColor} />
      <div
        className="rounded-sm shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col gap-2 border border-black/5 min-h-[9rem]"
        style={{
          backgroundColor: notice.cardColor,
          transform: `rotate(${((notice.id * 73 + 17) % 7) - 3}deg)`,
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) scale(1.02)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.transform = `rotate(${((notice.id * 73 + 17) % 7) - 3}deg)`
        }}
      >
        {notice.urgent && (
          <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-white bg-[#d94f3d] px-1.5 py-0.5 rounded-sm w-fit">
            Urgent
          </span>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-display font-semibold text-[#2a1f14] leading-snug text-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {notice.title}
          </h3>
        </div>
        <p
          className={`text-xs text-[#5a4a38] leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {notice.body}
        </p>
        <div className="mt-auto pt-1 flex items-center justify-between">
          <span
            className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm"
            style={{
              backgroundColor: label + '22',
              color: label,
              fontFamily: 'var(--font-mono)',
            }}
          >
            {notice.category}
          </span>
          <div className="text-right">
            <p className="text-[10px] text-[#7a6a58]" style={{ fontFamily: 'var(--font-mono)' }}>
              {notice.author}
            </p>
            <p className="text-[10px] text-[#a89a8a]" style={{ fontFamily: 'var(--font-mono)' }}>
              {notice.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered =
    activeCategory === 'All'
      ? NOTICES
      : NOTICES.filter(n => n.category === activeCategory)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8ddd0' }}>
      {/* Header strip */}
      <header
        className="sticky top-0 z-20 border-b-4"
        style={{ backgroundColor: '#7c5c3a', borderColor: '#5a3e22' }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <h1
              className="text-white font-bold text-xl leading-none tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              WPU DORM 
            </h1>
            <p
              className="text-amber-200/70 text-xs mt-0.5 tracking-wide"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              NOTICE BOARD · {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}
            </p>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-xs px-3 py-1.5 rounded-full border transition-all duration-150 font-medium"
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor:
                    activeCategory === cat ? '#fffef9' : 'transparent',
                  color: activeCategory === cat ? '#2a1f14' : '#f5e6d0',
                  borderColor:
                    activeCategory === cat ? '#fffef9' : '#f5e6d044',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Cork board */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Cork texture strip at top */}
        <div
          className="rounded-t-xl h-4 border border-b-0"
          style={{ backgroundColor: '#c8a97e', borderColor: '#a8855a' }}
        />
        <div
          className="rounded-b-xl px-6 py-8 border"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, #c8a97e88 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, #b89060aa 0%, transparent 50%),
              #c09660
            `,
            borderColor: '#a8855a',
            borderTop: 'none',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#7a5a38]/70" style={{ fontFamily: 'var(--font-body)' }}>
              No notices in this category.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filtered.map(notice => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          )}
        </div>

        <p
          className="text-center mt-6 text-xs text-[#7a6a58]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {filtered.length} notice{filtered.length !== 1 ? 's' : ''} posted
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          {' '}· Click a card to expand
        </p>
      </main>
    </div>
  )
}
