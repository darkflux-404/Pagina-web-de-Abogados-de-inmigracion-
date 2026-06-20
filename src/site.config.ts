import logoImg from "@/assets/Logo.png";

/**
 * ============================================================
 *  CONFIGURACIÓN DEL SITIO — EDITA AQUÍ TUS DATOS REALES
 * ============================================================
 *  Cambia los valores de abajo con la información de tu firma.
 *  No necesitas tocar ningún otro archivo para personalizar
 *  los datos de contacto, redes sociales, dirección, etc.
 * ============================================================
 */

export const siteConfig = {
  // --- IDENTIDAD ---
  brand: {
    name: "GLOBAL IMMIGRATION",
    suffix: "ADVOCATES",
    slogan: "Protecting Futures Across Borders",
    logo: logoImg,
  },

  // --- CONTACTO ---
  contact: {
    phone: "+1 854 209 5305",               // 👈 TELÉFONO
    email: "info@globalimmigrationadvocates.com", // 👈 CORREO DE DESTINO DEL FORMULARIO
    whatsapp: "18542095305",                // 👈 WHATSAPP (solo números, con código país)
    address: "Estados Unidos\nFlorida · Texas · California · New York\nSucursales en varios estados", // 👈 DIRECCIÓN / SUCURSALES
    hours: "Lun–Vie: 9:00 AM – 6:00 PM",   // 👈 HORARIO
  },

  // --- REDES SOCIALES (deja "" para ocultar) ---
  social: {
    facebook: "https://facebook.com/tuempresa",
    instagram: "https://instagram.com/tuempresa",
    linkedin: "https://linkedin.com/company/tuempresa",
    twitter: "https://twitter.com/tuempresa",
    youtube: "https://youtube.com/@tuempresa",
  },

  // --- ESTADÍSTICAS DEL HERO ---
  stats: [
    { n: "10K+", l: "Casos Exitosos" },
    { n: "45+",  l: "Países Atendidos" },
    { n: "20+",  l: "Años de Experiencia" },
    { n: "98%",  l: "Tasa de Aprobación" },
  ],
};
