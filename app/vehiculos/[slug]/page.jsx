import Link from "next/link";import {notFound} from "next/navigation";
import {vehicles,getVehicle} from "@/lib/vehicles";import {RATE} from "@/lib/config";
import Gallery from "@/components/Gallery";import WhatsAppButton from "@/components/WhatsAppButton";
export const generateStaticParams=()=>vehicles.map(v=>({slug:v.slug}));
export function generateMetadata({params}){const v=getVehicle(params.slug);return v?{title:`${v.name}${v.year?" "+v.year:""}`,description:`Alquila el ${v.name} en Godínez Rent a Car. Reserva por WhatsApp.`}:{}}
export default function Page({params}){const v=getVehicle(params.slug);if(!v)notFound();
return(<main className="mx-auto max-w-7xl px-5 pb-24 pt-28">
<Link href="/#vehiculos" className="text-sm text-goldl hover:underline">Volver a la flota</Link>
<div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]"><Gallery images={v.images} alt={v.name}/>
<div><p className="text-sm text-chrome/60">{v.type}, {v.year??"año por confirmar"}</p>
<h1 className="mt-2 font-display text-4xl font-extrabold italic chrome-text md:text-5xl">{v.name}</h1>
<p className="mt-5 font-display text-3xl font-bold italic gold-text">{v.rate??RATE} <span className="text-sm font-normal not-italic text-chrome/40">tarifa provisional</span></p>
<div className="rule my-6"/><p className="text-chrome/70">{v.description}</p>
<WhatsAppButton vehicle={v} className="mt-8 w-full"/>
<p className="mt-3 text-xs text-chrome/40">Se abrirá WhatsApp con tu mensaje listo para enviar.</p></div></div>
<section className="mt-16"><h2 className="font-display text-2xl font-bold italic chrome-text">Especificaciones</h2>
<dl className="mt-5 grid border border-line sm:grid-cols-2">{v.specs.map(([k,val])=><div key={k} className="flex justify-between border-b border-line bg-graphite p-4"><dt className="text-chrome/50">{k}</dt><dd className="text-chrome">{val}</dd></div>)}</dl></section>
<section className="mt-10 text-sm text-chrome/60"><h2 className="mb-2 font-display text-xl font-bold italic chrome-text">Incluye</h2>Seguro incluido y asistencia en carretera.</section></main>)}
