"use client";
import Link from "next/link";import {useState,useEffect} from "react";
import {WHATSAPP_NUMBER} from "@/lib/config";
const links=[["/#inicio","Inicio"],["/#vehiculos","Vehículos"],["/#nosotros","Nosotros"],["/#contacto","Contacto"]];
export default function Header(){const[open,setOpen]=useState(false);const[sc,setSc]=useState(false);
useEffect(()=>{const f=()=>setSc(scrollY>20);f();addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
return(<header className={`fixed inset-x-0 top-0 z-50 transition ${sc||open?"bg-ink/90 backdrop-blur border-b border-line":""}`}>
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
<Link href="/" aria-label="Godínez Rent a Car"><img src="/mark.png" alt="Godínez Rent a Car" className="h-11 w-auto"/></Link>
<nav className="hidden items-center gap-8 md:flex">{links.map(([h,t])=><Link key={h} href={h} className="text-sm text-chrome/80 transition hover:text-goldl">{t}</Link>)}
<a className="btn-gold !py-2 text-sm" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener"><span>Reservar</span></a></nav>
<button className="md:hidden text-goldl" onClick={()=>setOpen(!open)} aria-label="Menú" aria-expanded={open}>{open?"✕":"☰"}</button></div>
{open&&<nav className="flex flex-col gap-1 px-5 pb-5 md:hidden">{links.map(([h,t])=><Link key={h} href={h} onClick={()=>setOpen(false)} className="border-b border-line py-3 text-chrome">{t}</Link>)}
<a className="btn-gold mt-3" href={`https://wa.me/${WHATSAPP_NUMBER}`}><span>Reservar</span></a></nav>}</header>)}
