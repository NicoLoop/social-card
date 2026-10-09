'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Copy,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react'

const profileImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1PcCtRHE7OW6KbgrTZqQ23aNTa1Ds.png'

const socials = [
  { label: 'Instagram', handle: '@m.oinul.islam', href: 'https://instagram.com/m.oinul.islam', icon: 'instagram' },
  { label: 'Facebook', handle: 'Moinul Islam', href: 'https://www.facebook.com/profile.php?id=61594776106799', icon: 'facebook' },
  { label: 'Discord', handle: 'ai.t0', href: 'https://discord.com', icon: 'discord' },
]

function SocialIcon({ name }: { name: string }) {
  if (name === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.8]"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" /></svg>
  if (name === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current"><path d="M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.7v8h3.2Z" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current"><path d="M19.5 5.2A16 16 0 0 0 15.6 4l-.5 1a14 14 0 0 0-6.2 0l-.5-1a16 16 0 0 0-3.9 1.2C2 9 1.3 12.7 1.6 16.4a16 16 0 0 0 4.8 2.4l1.2-1.6c-.7-.3-1.3-.6-1.9-1a10 10 0 0 0 .5-.4 11 11 0 0 0 11.6 0l.5.4c-.6.4-1.2.7-1.9 1l1.2 1.6a16 16 0 0 0 4.8-2.4c.4-4.3-.7-8-2.9-11.2ZM8.2 14.5c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7.6 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z" /></svg>
}

export default function Page() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText('dev.moinulislam@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#dfe6e9] px-4 py-6 text-[#18232b] sm:px-8 sm:py-10">
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[1.25rem] border border-[#22201e]/15 bg-[#f8faf9] shadow-xl shadow-[#52616b]/20 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[28rem] overflow-hidden border-b border-[#22201e]/10 lg:min-h-[38rem] lg:border-b-0 lg:border-r">
            <img src={profileImage} alt="Moinul Islam standing at Notre Dame College in Dhaka" className="absolute inset-0 size-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="max-w-sm text-sm leading-6 text-white/95">A photo in front of Archbishop Ganguli Building, Notre Dame College, Dhaka.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-10">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#138f9d]">Hello, I’m Moinul</p>
                  <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Moinul Islam</h1>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#6f6962]"><MapPin className="size-4 text-[#138f9d]" /> Motijheel, Dhaka</div>
                </div>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <div className="flex flex-col gap-3">
                <a href="tel:01785070088" className="group flex items-center justify-between rounded-2xl border border-[#22201e]/10 bg-white p-4 transition hover:border-cyan-300/40 hover:bg-white/[0.06]">
                  <span className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-[#eef1f2] text-[#63717a]"><Phone className="size-4" /></span><span><span className="block text-[11px] uppercase tracking-wider text-[#8b8379]">Phone</span><span className="text-sm text-[#38332e]">01785070088</span></span></span><ArrowUpRight className="size-4 text-white/30 transition group-hover:text-cyan-200" />
                </a>
                <button onClick={copyEmail} className="group flex w-full items-center justify-between rounded-2xl border border-[#22201e]/10 bg-white p-4 text-left transition hover:border-cyan-300/40 hover:bg-white/[0.06]">
                  <span className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-[#eef1f2] text-[#63717a]"><Mail className="size-4" /></span><span><span className="block text-[11px] uppercase tracking-wider text-[#8b8379]">Email</span><span className="text-sm text-[#38332e]">dev.moinulislam@gmail.com</span></span></span>{copied ? <Check className="size-4 text-cyan-200" /> : <Copy className="size-4 text-white/30 transition group-hover:text-cyan-200" />}
                </button>
              </div>

              <div className="mt-8 flex items-center gap-3"><div className="h-px flex-1 bg-white/10" /><span className="text-[11px] uppercase tracking-[0.22em] text-[#9a9288]">Find me online</span><div className="h-px flex-1 bg-white/10" /></div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {socials.map(({ label, handle, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-[#18232b]/10 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#38b9c7]/60 hover:shadow-md hover:shadow-[#38b9c7]/10"><span className="flex size-9 items-center justify-center rounded-xl bg-[#e8f7f8] text-[#1398a8]"><SocialIcon name={icon} /></span><span className="mt-4 block text-xs font-medium text-[#7b8790]">{label}</span><span className="mt-1 block truncate text-sm text-[#18232b]">{handle}</span></a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#22201e]/10 pt-6"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-[#eef1f2] text-[#63717a]"><GraduationCap className="size-5" /></div><div><p className="text-[11px] uppercase tracking-wider text-[#9a9288]">Education</p><p className="text-sm text-[#38332e]">Notre Dame College, Dhaka</p></div></div><a href="mailto:dev.moinulislam@gmail.com" className="flex size-10 items-center justify-center rounded-xl bg-cyan-300 text-[#081014] transition hover:bg-cyan-200" aria-label="Send Moinul an email"><ArrowUpRight className="size-5" /></a></div>
          </div>
        </section>
      </div>
    </main>
  )
}

