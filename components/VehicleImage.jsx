export default function VehicleImage({src,alt,className=""}){return src?<img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`}/>:
<div className={`flex items-center justify-center bg-graphite text-sm text-chrome/40 ${className}`}>Foto por agregar</div>}
