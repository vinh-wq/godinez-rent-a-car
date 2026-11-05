"use client";
import {useState} from "react";import VehicleImage from "./VehicleImage";
export default function Gallery({images,alt}){const[i,setI]=useState(0);const list=images.length?images:[null];
return(<div><div className="overflow-hidden border border-line"><VehicleImage key={i} src={list[i]} alt={alt} className="aspect-[16/10] w-full"/></div>
{list.length>1&&<div className="mt-3 grid grid-cols-4 gap-3">{list.map((s,k)=><button key={k} onClick={()=>setI(k)} aria-label={`Foto ${k+1}`} className={`overflow-hidden border transition ${k===i?"border-gold":"border-line opacity-60 hover:opacity-100"}`}><VehicleImage src={s} alt="" className="aspect-[16/10] w-full"/></button>)}</div>}</div>)}
