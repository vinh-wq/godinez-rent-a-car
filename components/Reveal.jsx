"use client";
import {useEffect,useRef} from "react";
export default function Reveal({children,className="",delay=0}){const r=useRef();
useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){e.target.classList.add("in");o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
return <div ref={r} className={`rv ${className}`} style={{transitionDelay:delay+"ms"}}>{children}</div>}
