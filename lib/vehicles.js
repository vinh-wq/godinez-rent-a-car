// Para agregar un auto: copia un bloque, cambia los datos y sube su foto a /public/vehicles. La URL se crea sola.
const TBD = "Por confirmar";
export const vehicles = [
 {slug:"toyota-hilux",brand:"Toyota",model:"Hilux",year:2026,type:"Pickup",images:["/vehicles/toyota-hilux.jpg"],rate:null},
 {slug:"chevrolet-tahoe",brand:"Chevrolet",model:"Tahoe",year:2025,type:"SUV",images:["/vehicles/chevrolet-tahoe.jpg"],rate:null},
 {slug:"kia-forte",brand:"Kia",model:"Forte",year:2023,type:"Sedán",images:["/vehicles/kia-forte.jpg"],rate:null},
 {slug:"nissan-rogue",brand:"Nissan",model:"Rogue",year:null,type:"SUV",images:[],rate:null},
].map(v=>({...v,name:`${v.brand} ${v.model}`,
 description:`${v.brand} ${v.model}${v.year?" "+v.year:""}. Descripción provisional: reemplázala con los detalles reales del vehículo.`,
 specs:[["Marca",v.brand],["Modelo",v.model],["Año",v.year??TBD],["Tipo",v.type],["Transmisión",TBD],["Pasajeros",TBD],["Combustible",TBD]]}));
export const getVehicle=(s)=>vehicles.find(v=>v.slug===s);
