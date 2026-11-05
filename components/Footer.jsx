import {PHONES,INSTAGRAM_URL} from "@/lib/config";
export default function Footer(){return(<footer className="border-t border-line bg-graphite"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
<img src="/mark.png" alt="Godínez Rent a Car" className="h-14 w-auto self-start"/>
<div className="space-y-1 text-sm">{PHONES.map(p=><a key={p.tel} href={`tel:+${p.tel}`} className="block hover:text-goldl">{p.label}</a>)}
{INSTAGRAM_URL&&<a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="block text-goldl">Instagram</a>}</div>
<p className="text-xs text-chrome/40">© {new Date().getFullYear()} Godínez Rent a Car</p></div></footer>)}
