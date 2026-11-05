import "./globals.css";
import {Exo_2,Inter} from "next/font/google";
import Header from "@/components/Header";import Footer from "@/components/Footer";
import {SITE_URL} from "@/lib/config";
const d=Exo_2({subsets:["latin"],style:["italic"],weight:["700","800"],variable:"--f-display"});
const b=Inter({subsets:["latin"],variable:"--f-body"});
export const metadata={metadataBase:new URL(SITE_URL),title:{default:"Godínez Rent a Car | Alquiler de vehículos",template:"%s | Godínez Rent a Car"},description:"Alquila pickups, SUV y sedanes con seguro incluido y asistencia en carretera. Reserva por WhatsApp."};
export default function RootLayout({children}){return(<html lang="es" className={`${d.variable} ${b.variable}`}><body className="font-sans antialiased"><Header/>{children}<Footer/></body></html>)}
