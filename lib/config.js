// ===== EDITA AQUÍ los datos del negocio =====
export const WHATSAPP_NUMBER = "50379195520";          // número que recibe las reservas (sin + ni espacios)
export const PHONES = [{label:"+503 7919 5520",tel:"50379195520"},{label:"+503 7051 6302",tel:"50370516302"}];
export const RATE = "$60/h";                            // tarifa provisional para todos los vehículos
export const INSTAGRAM_URL = "";                        // pega aquí el enlace de Instagram
export const SITE_URL = "https://tu-dominio.com";
export const waLink = (name) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, estoy interesado en reservar el ${name}. Me gustaría recibir más información sobre su disponibilidad y tarifas.`)}`;
