import Link from "next/link";import Reveal from "@/components/Reveal";import VehicleCard from "@/components/VehicleCard";
import {vehicles} from "@/lib/vehicles";import {PHONES,WHATSAPP_NUMBER,RATE} from "@/lib/config";
const perks=[["Seguro incluido","Viaja con respaldo en cada alquiler."],["Asistencia en carretera","Ayuda si la necesitas en el camino."],["Reserva fácil y rápida","Escríbenos por WhatsApp y listo."],["Flota seleccionada","Pickups, SUV y sedanes en excelente estado."]];
export default function Home(){return(<main>
<section id="inicio" className="relative flex min-h-[92vh] items-end overflow-hidden pt-28">
<img src="/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50"/>
<div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30"/>
<div className="relative mx-auto w-full max-w-7xl px-5 pb-20">
<h1 className="max-w-4xl font-display text-5xl font-extrabold italic leading-[1.02] chrome-text md:text-8xl">Llega con la potencia que mereces.</h1>
<p className="mt-6 max-w-xl text-lg text-chrome/75">Pickups, SUV y sedanes listos para ti, con seguro incluido y asistencia en carretera. Desde <span className="font-semibold text-goldl">{RATE}</span>.</p>
<div className="mt-9 flex flex-wrap gap-4"><Link href="/#vehiculos" className="btn-gold"><span>Explorar vehículos</span></Link><a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn-ghost">Escribir por WhatsApp</a></div></div></section>
<section id="vehiculos" className="mx-auto max-w-7xl px-5 py-24"><Reveal><h2 className="font-display text-4xl font-extrabold italic chrome-text md:text-5xl">Nuestra flota</h2><p className="mt-3 max-w-lg text-chrome/60">Elige un vehículo para ver sus detalles y reservar.</p></Reveal>
<div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{vehicles.map((v,i)=><Reveal key={v.slug} delay={i*80}><VehicleCard v={v}/></Reveal>)}</div></section>
<section className="border-y border-line bg-graphite"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">{perks.map(([t,d],i)=><Reveal key={t} delay={i*80}><h3 className="font-display text-xl font-bold italic gold-text">{t}</h3><p className="mt-2 text-sm text-chrome/60">{d}</p></Reveal>)}</div></section>
<section id="nosotros" className="mx-auto max-w-4xl px-5 py-24"><Reveal><h2 className="font-display text-4xl font-extrabold italic chrome-text md:text-5xl">Sobre Godínez Rent a Car</h2>
<p className="mt-6 text-lg text-chrome/70">[Texto provisional] Somos una empresa de alquiler de vehículos enfocada en ofrecer una experiencia cómoda, segura y de primera. Reemplaza este párrafo con la historia real del negocio.</p></Reveal></section>
<section id="contacto" className="border-t border-line bg-graphite"><div className="mx-auto max-w-4xl px-5 py-24 text-center"><Reveal><h2 className="font-display text-4xl font-extrabold italic chrome-text md:text-5xl">Reserva hoy</h2>
<p className="mt-3 text-chrome/60">Llámanos o escríbenos por WhatsApp.</p>
<div className="mt-8 flex flex-wrap justify-center gap-4">{PHONES.map(p=><a key={p.tel} href={`tel:+${p.tel}`} className="btn-ghost">{p.label}</a>)}</div>
<a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn-gold mt-6"><span>Abrir WhatsApp</span></a></Reveal></div></section></main>)}
