import {waLink} from "@/lib/config";
export default function WhatsAppButton({vehicle,className=""}){return(<a href={waLink(vehicle.name)} target="_blank" rel="noopener noreferrer" className={`btn-gold ${className}`}><span>RESERVAR POR WHATSAPP</span></a>)}
