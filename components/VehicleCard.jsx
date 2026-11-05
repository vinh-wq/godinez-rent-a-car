import Link from "next/link";import VehicleImage from "./VehicleImage";import {RATE} from "@/lib/config";
export default function VehicleCard({v}){return(<Link href={`/vehiculos/${v.slug}`} className="group block overflow-hidden border border-line bg-graphite transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-20px_rgba(212,167,44,.4)]">
<div className="overflow-hidden"><VehicleImage src={v.images[0]} alt={v.name} className="aspect-[16/10] w-full transition duration-700 group-hover:scale-105"/></div>
<div className="p-6"><h3 className="font-display text-2xl font-extrabold italic chrome-text">{v.name}</h3>
<p className="mt-1 text-sm text-chrome/60">{v.year??"Año por confirmar"}, {v.type}</p>
<div className="rule my-4"/><div className="flex items-center justify-between"><span className="font-display text-xl font-bold italic gold-text">{v.rate??RATE}</span><span className="text-sm font-semibold text-goldl transition group-hover:translate-x-1">Ver vehículo</span></div></div></Link>)}
