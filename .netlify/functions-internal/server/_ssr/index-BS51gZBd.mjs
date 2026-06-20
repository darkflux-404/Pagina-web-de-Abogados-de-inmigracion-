import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as ArrowRight, X, M as Menu, C as ChevronDown, a as Award, b as CircleCheck, P as Plane, F as FileText, H as House, c as HeartHandshake, B as Briefcase, S as Scale, d as Shield, e as Building2, f as FileSearch, g as Send, h as Clock, i as Star, j as Phone, k as Mail, l as MapPin } from "../_libs/lucide-react.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-XyVHLsJQ.jpg";
const aboutImg = "/assets/about-CSCU12j9.png";
const familyImg = "/assets/family-BKAoqWnx.png";
const passportImg = "/assets/passport-CtRau6NS.png";
const logoImg = "/assets/Logo-SrG7cKV7.png";
const siteConfig = {
  // --- IDENTIDAD ---
  brand: {
    name: "GLOBAL IMMIGRATION",
    suffix: "ADVOCATES",
    slogan: "Protecting Futures Across Borders",
    logo: logoImg
  },
  // --- CONTACTO ---
  contact: {
    phone: "+1 854 209 5305",
    // 👈 TELÉFONO
    email: "johnnyolivier405@hotmail.com",
    // 👈 WHATSAPP (solo números, con código país)
    address: "Estados Unidos\nFlorida · Texas · California · New York\nSucursales en varios estados",
    // 👈 DIRECCIÓN / SUCURSALES
    hours: "Lun–Vie: 9:00 AM – 6:00 PM"
    // 👈 HORARIO
  },
  // --- ESTADÍSTICAS DEL HERO ---
  stats: [
    { n: "10K+", l: "Casos Exitosos" },
    { n: "45+", l: "Países Atendidos" },
    { n: "20+", l: "Años de Experiencia" },
    { n: "98%", l: "Tasa de Aprobación" }
  ]
};
const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#paises", label: "Países" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-dark py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#inicio", className: "flex items-center gap-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: siteConfig.brand.logo, alt: siteConfig.brand.name, className: "h-28 w-auto max-w-[300px] rounded-md object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex items-center gap-7", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-white/85 hover:text-gold text-sm font-medium transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#contacto",
              className: "hidden md:inline-flex items-center gap-2 gradient-gold text-navy-deep font-semibold px-5 py-2.5 rounded-md text-sm shadow-gold hover:scale-105 transition-transform",
              children: [
                "Agendar Consulta ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Abrir menú",
              className: "xl:hidden text-white",
              onClick: () => setOpen(!open),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-7" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-7" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:hidden glass-dark mt-3 mx-4 rounded-xl p-6 flex flex-col gap-4", children: [
          navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "text-white/90 hover:text-gold text-base font-medium", children: l.label }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contacto", onClick: () => setOpen(false), className: "gradient-gold text-navy-deep font-semibold px-5 py-3 rounded-md text-center mt-2", children: "Agendar Consulta" })
        ] })
      ]
    }
  );
}
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "inicio", className: "relative min-h-dvh flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", width: 1920, height: 1280, className: "size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep", style: { background: "linear-gradient(180deg, oklch(0.22 0.06 255 / 0.7), oklch(0.22 0.06 255 / 0.3) 40%, oklch(0.22 0.06 255 / 0.95))" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { opacity }, className: "relative z-10 container mx-auto px-6 pt-32 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "max-w-4xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-gold animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 text-xs md:text-sm font-medium tracking-wide", children: "International Immigration Attorneys" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6", children: [
              "Global Immigration",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-white font-display font-black pb-1", children: "Advocates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mt-2 h-1 w-24 bg-gold rounded-full" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold text-lg md:text-2xl font-poppins italic mb-6 tracking-wide", children: siteConfig.brand.slogan }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-base md:text-lg leading-relaxed mb-4 text-justify", children: "Ayudamos a personas, familias, inversionistas, estudiantes y empresas a navegar exitosamente los procesos migratorios internacionales mediante asesoría legal especializada y representación profesional." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-base md:text-lg leading-relaxed mb-4 text-justify", children: "Nuestro equipo proporciona asesoría legal especializada en inmigración, residencia, ciudadanía, visas, reunificación familiar y representación ante autoridades migratorias." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-base md:text-lg leading-relaxed text-justify", children: "Trabajamos con profesionalismo, transparencia y compromiso para ayudar a nuestros clientes a construir un futuro sin fronteras." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contacto", className: "inline-flex items-center gap-2 gradient-gold text-navy-deep font-bold px-7 py-4 rounded-md shadow-gold hover:scale-105 transition-transform", children: [
                "Agendar Consulta ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contacto", className: "inline-flex items-center gap-2 glass text-white font-semibold px-7 py-4 rounded-md hover:bg-white/15 transition-colors", children: "Hablar con un Especialista" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#proceso", className: "inline-flex items-center gap-2 border border-gold/50 text-gold font-semibold px-7 py-4 rounded-md hover:bg-gold/10 transition-colors", children: "Evaluación de Elegibilidad" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 max-w-4xl",
          children: siteConfig.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-gold text-3xl md:text-4xl", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-xs md:text-sm mt-1", children: s.l })
          ] }, s.l))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#nosotros", className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-gold transition-colors animate-bounce", "aria-label": "Scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-7" }) })
  ] });
}
function SectionHeader({ eyebrow, title, desc }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.6 },
      className: "max-w-3xl mx-auto text-center mb-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase text-xs tracking-[0.25em] font-bold", children: eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-navy-deep text-4xl md:text-5xl mb-4", children: title }),
        desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: desc })
      ]
    }
  );
}
function About() {
  const values = [
    "Integridad",
    "Profesionalismo",
    "Transparencia",
    "Confidencialidad",
    "Excelencia",
    "Compromiso con el Cliente",
    "Respeto por la Diversidad Cultural"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "nosotros", className: "py-24 md:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Quiénes Somos", title: "Una firma global comprometida con su futuro" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "Oficinas Global Immigration Advocates", width: 1280, height: 960, loading: "lazy", className: "relative rounded-2xl shadow-elegant w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-6 hidden md:block glass-dark rounded-xl p-5 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "text-gold size-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: "Top Rated Firm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: "International Recognition" })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg leading-relaxed mb-6 text-justify", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-navy-deep", children: "Global Immigration Advocates" }),
              " es una firma especializada en derecho migratorio internacional dedicada a brindar soluciones legales para individuos, familias y organizaciones que buscan oportunidades migratorias en distintos países."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg leading-relaxed mb-6 text-justify", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-navy-deep" }),
              " Nuestro objetivo es simplificar procesos complejos y ofrecer estrategias legales personalizadas para cada cliente."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-gold pl-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-navy-deep text-lg mb-2", children: "Nuestra Misión" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Facilitar el acceso a oportunidades internacionales mediante servicios legales migratorios confiables, éticos y profesionales." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-gold pl-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-navy-deep text-lg mb-2", children: "Nuestra Visión" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Convertirnos en una referencia global en servicios legales migratorios." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-navy-deep text-lg mb-3", children: "Nuestros Valores" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 bg-muted text-navy-deep text-sm font-medium px-3 py-1.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3.5 text-gold" }),
              v
            ] }, v)) })
          ]
        }
      )
    ] })
  ] }) });
}
const services = [
  { icon: Plane, title: "Visas de Inmigrante", items: ["Visas familiares", "Visas de prometido(a)", "Visas laborales", "Visas de inversionista", "Visas humanitarias", "Visas especiales"] },
  { icon: FileText, title: "Visas de No Inmigrante", items: ["Turismo", "Negocios", "Estudios", "Trabajo temporal", "Intercambio cultural", "Tratamientos médicos"] },
  { icon: House, title: "Residencia Permanente", items: ["Residencia familiar", "Residencia laboral", "Residencia por inversión", "Ajuste de estatus", "Renovaciones"] },
  { icon: Award, title: "Ciudadanía y Naturalización", items: ["Naturalización", "Ciudadanía derivada", "Ciudadanía por descendencia", "Recuperación de ciudadanía"] },
  { icon: HeartHandshake, title: "Reunificación Familiar", items: ["Cónyuges", "Hijos", "Padres", "Hermanos", "Familiares elegibles"] },
  { icon: Briefcase, title: "Permisos de Trabajo", items: ["Solicitudes iniciales", "Renovaciones", "Modificaciones", "Autorizaciones especiales"] },
  { icon: Scale, title: "Defensa Migratoria", items: ["Deportación", "Audiencias", "Apelaciones", "Mociones", "Cancelación de remoción"] },
  { icon: Shield, title: "Asilo y Protección Humanitaria", items: ["Asilo político", "Refugio", "Protección humanitaria", "Protección contra persecución"] },
  { icon: Building2, title: "Servicios Corporativos", items: ["Contratación internacional", "Movilidad global", "Cumplimiento migratorio", "Transferencias empresariales", "Patrocinios laborales"] }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "servicios", className: "py-24 md:py-32 bg-muted relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 size-96 gradient-gold opacity-10 blur-3xl rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Nuestros Servicios", title: "Soluciones legales integrales", desc: "Representación profesional en cada categoría de derecho migratorio internacional." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i % 3 * 0.1 },
          className: "group bg-white rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-gold/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-xl gradient-hero grid place-items-center mb-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-7 text-gold", strokeWidth: 1.8 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-navy-deep text-xl mb-4", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-gold shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it })
            ] }, it)) })
          ]
        },
        s.title
      )) })
    ] })
  ] });
}
const countries = [
  { name: "Estados Unidos", flag: "🇺🇸" },
  { name: "Canadá", flag: "🇨🇦" },
  { name: "México", flag: "🇲🇽" },
  { name: "Reino Unido", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Nueva Zelanda", flag: "🇳🇿" },
  { name: "España", flag: "🇪🇸" },
  { name: "Francia", flag: "🇫🇷" },
  { name: "Alemania", flag: "🇩🇪" },
  { name: "Portugal", flag: "🇵🇹" }
];
function Countries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "paises", className: "py-24 md:py-32 bg-navy-deep relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--navy) 0%, transparent 50%)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "max-w-3xl mx-auto text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase text-xs tracking-[0.25em] font-bold", children: "Países y Jurisdicciones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-white text-4xl md:text-5xl mb-4", children: "Presencia internacional" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg", children: "Asesoramos en los principales destinos migratorios del mundo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", children: countries.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          whileHover: { y: -8 },
          className: "glass rounded-xl p-6 text-center cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3 group-hover:scale-125 transition-transform duration-300", children: c.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold text-sm", children: c.name })
          ]
        },
        c.name
      )) })
    ] })
  ] });
}
const steps = [
  { n: "01", title: "Evaluación Inicial", desc: "Análisis confidencial de su caso y elegibilidad migratoria.", icon: FileSearch },
  { n: "02", title: "Estrategia Legal", desc: "Diseñamos la mejor ruta legal alineada a sus objetivos.", icon: Scale },
  { n: "03", title: "Preparación Documental", desc: "Recopilación y revisión exhaustiva de documentos.", icon: FileText },
  { n: "04", title: "Presentación Oficial", desc: "Radicación ante las autoridades competentes.", icon: Send },
  { n: "05", title: "Seguimiento", desc: "Monitoreo continuo y respuesta a requerimientos.", icon: Clock },
  { n: "06", title: "Resolución", desc: "Aprobación y orientación post-resolución.", icon: CircleCheck }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "proceso", className: "py-24 md:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Nuestro Proceso", title: "6 pasos hacia su nuevo futuro", desc: "Un proceso estructurado, transparente y profesional desde la consulta inicial hasta la resolución." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "relative bg-muted rounded-2xl p-7 hover:shadow-elegant transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold via-[#f1cf71] to-[#b8860b] text-navy-deep font-display font-black text-2xl shadow-[0_10px_25px_rgba(184,134,11,0.25)]", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-full bg-navy-deep grid place-items-center ring-1 ring-gold/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-6 text-gold" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-navy-deep text-xl mb-2", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: s.desc })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const docs = [
  "Pasaporte",
  "Acta de nacimiento",
  "Acta de matrimonio",
  "Certificados policiales",
  "Evidencia financiera",
  "Registros laborales",
  "Certificados académicos",
  "Fotografías oficiales",
  "Traducciones certificadas"
];
function Documents() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: passportImg, alt: "Documentos migratorios", width: 1200, height: 900, loading: "lazy", className: "rounded-2xl shadow-elegant" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Documentación", title: "Documentos frecuentes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: docs.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          className: "flex items-center gap-3 bg-white rounded-lg p-4 shadow-card hover:border-gold border border-transparent transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-md gradient-gold grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5 text-navy-deep" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-navy-deep text-sm", children: d })
          ]
        },
        d
      )) })
    ] })
  ] }) }) });
}
const testimonials = [
  { name: "María González", country: "🇲🇽 México → 🇺🇸 EE.UU.", category: "Reunificación Familiar", text: "Después de años intentando reunirme con mi esposo, Global Immigration Advocates hizo posible lo imposible. Profesionalismo absoluto." },
  { name: "James Carter", country: "🇬🇧 UK → 🇨🇦 Canadá", category: "Residencia Aprobada", text: "Equipo extraordinario. Mi residencia permanente fue aprobada en tiempo récord gracias a su estrategia legal." },
  { name: "Sofía Martínez", country: "🇨🇴 Colombia → 🇪🇸 España", category: "Ciudadanía Obtenida", text: "Obtuve mi ciudadanía española sin complicaciones. Cada paso fue claro, transparente y profesional." },
  { name: "Ahmed Hassan", country: "🇪🇬 Egipto → 🇦🇺 Australia", category: "Visa Aprobada", text: "La mejor decisión que tomé. Atención personalizada y resultados garantizados con total ética." }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t2 = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6e3);
    return () => clearInterval(t2);
  }, []);
  const t = testimonials[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonios", className: "py-24 md:py-32 gradient-hero relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "max-w-3xl mx-auto text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase text-xs tracking-[0.25em] font-bold", children: "Testimonios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-white text-4xl md:text-5xl mt-3", children: "Historias de éxito" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "glass-dark rounded-2xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mb-6", children: [...Array(5)].map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-5 fill-gold text-gold" }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-lg md:text-xl leading-relaxed mb-8 italic font-poppins", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full gradient-gold grid place-items-center mx-auto mb-4 font-display font-black text-navy-deep text-xl", children: t.name.split(" ").map((n) => n[0]).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm", children: t.country }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block mt-3 text-gold text-xs uppercase tracking-wider font-bold border border-gold/40 rounded-full px-3 py-1", children: t.category })
      ] }, i),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-6", children: testimonials.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setI(k), "aria-label": `Testimonio ${k + 1}`, className: `h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-white/40"}` }, k)) })
    ] })
  ] }) });
}
const faqs = [
  {
    q: "¿Pueden garantizar una visa?",
    a: "Trabajamos con procesos estructurados, preparación exhaustiva y estrategias legales diseñadas para maximizar las probabilidades de aprobación. Nuestro equipo acompaña cada caso de principio a fin para ofrecer la mayor seguridad y confianza posible."
  },
  {
    q: "¿Cuánto dura un proceso migratorio?",
    a: "La duración depende del tipo de trámite, la categoría migratoria y los tiempos de procesamiento de las autoridades correspondientes. Durante la consulta inicial le proporcionamos una estimación realista basada en su caso específico."
  },
  {
    q: "¿Puedo solicitar residencia dentro del país?",
    a: "En muchos casos es posible solicitar la residencia sin salir del país mediante diferentes mecanismos migratorios. Analizamos su situación para determinar la opción más conveniente y viable."
  },
  {
    q: "¿Qué sucede si rechazan mi solicitud?",
    a: "Nuestro equipo revisa detalladamente las causas de cualquier decisión desfavorable y desarrolla una estrategia para corregir errores, fortalecer la evidencia y explorar las mejores alternativas disponibles."
  },
  {
    q: "¿Necesito abogado migratorio?",
    a: "La representación legal especializada reduce riesgos, evita errores costosos y permite presentar un caso sólido y bien documentado. Nuestro objetivo es brindarle la mejor oportunidad de alcanzar sus metas migratorias."
  }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-24 md:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Preguntas Frecuentes", title: "Resolvemos sus dudas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.05 },
        className: "bg-muted rounded-xl overflow-hidden border border-transparent hover:border-gold/30 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "w-full flex items-center justify-between p-6 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-navy-deep text-lg pr-6", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-5 text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-muted-foreground leading-relaxed", children: f.a }) }) })
        ]
      },
      i
    )) })
  ] }) });
}
const posts = [
  { cat: "Noticias Migratorias", title: "Cambios recientes en políticas de visas de inversión", date: "15 Jun 2026", img: aboutImg },
  { cat: "Visas", title: "Guía completa para visas de trabajo temporal en Canadá", date: "10 Jun 2026", img: familyImg },
  { cat: "Ciudadanía", title: "Ciudadanía por descendencia: requisitos por país", date: "5 Jun 2026", img: passportImg }
];
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "blog", className: "py-24 md:py-32 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Blog", title: "Recursos e insights migratorios" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 group cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 800, height: 500, loading: "lazy", className: "size-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xs font-bold uppercase tracking-wider", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-navy-deep text-xl mt-2 mb-3 group-hover:text-navy transition-colors", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: p.date })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
function Contact() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    case: "Visa de Inmigrante",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      from: "",
      to: "",
      case: "Visa de Inmigrante",
      message: ""
    });
    alert("Gracias. Hemos recibido su solicitud y nos pondremos en contacto pronto.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contacto", className: "py-24 md:py-32 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Contacto", title: "Inicie su proceso hoy", desc: "Agende una consulta confidencial con uno de nuestros especialistas." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-6", children: [
        { icon: Phone, label: "Teléfono", value: siteConfig.contact.phone },
        { icon: Mail, label: "Correo", value: siteConfig.contact.email },
        { icon: MapPin, label: "Dirección", value: siteConfig.contact.address },
        { icon: Clock, label: "Horario", value: siteConfig.contact.hours }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-5 rounded-xl bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-lg gradient-hero grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "size-5 text-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy-deep whitespace-pre-line", children: c.value })
        ] })
      ] }, c.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          onSubmit: handleSubmit,
          className: "lg:col-span-3 bg-muted rounded-2xl p-8 shadow-card space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nombre Completo", name: "name", required: true, value: formData.name, onChange: handleChange }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Correo Electrónico", name: "email", type: "email", required: true, value: formData.email, onChange: handleChange }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Teléfono", name: "phone", type: "tel", value: formData.phone, onChange: handleChange }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "País de Residencia", name: "from", value: formData.from, onChange: handleChange }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "País de Destino", name: "to", value: formData.to, onChange: handleChange }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2", children: "Tipo de Caso" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    name: "case",
                    value: formData.case,
                    onChange: handleChange,
                    className: "w-full bg-white border border-border rounded-lg px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-gold",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Visa de Inmigrante" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Residencia" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Ciudadanía" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Reunificación Familiar" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Defensa Migratoria" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Asilo" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Corporativo" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Otro" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2", children: "Mensaje" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  name: "message",
                  rows: 4,
                  required: true,
                  value: formData.message,
                  onChange: handleChange,
                  className: "w-full bg-white border border-border rounded-lg px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full gradient-gold text-navy-deep font-bold px-7 py-4 rounded-lg shadow-gold hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2", children: [
              "Enviar Solicitud ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Sus datos son tratados con total confidencialidad bajo nuestra política de privacidad." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mt-16 p-6 border-l-4 border-gold bg-muted rounded-r-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-navy-deep", children: "Aviso Legal: " }),
      "Global Immigration Advocates proporciona asesoría legal basada en la información disponible y las leyes aplicables al momento de la consulta. Los resultados migratorios dependen exclusivamente de las decisiones de las autoridades competentes y no pueden ser garantizados."
    ] }) })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: name,
        name,
        type,
        required,
        value,
        onChange,
        className: "w-full bg-white border border-border rounded-lg px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-gold"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep text-white pt-20 pb-8 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px gradient-gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: siteConfig.brand.logo, alt: siteConfig.brand.name, className: "h-20 w-auto max-w-[260px] rounded-md object-contain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-base", children: siteConfig.brand.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold text-xs tracking-[0.2em] font-semibold", children: siteConfig.brand.suffix })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold italic mb-4 font-poppins", children: siteConfig.brand.slogan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm leading-relaxed mb-6 max-w-md", children: "International Immigration Attorneys & Legal Solutions. Asesoría legal migratoria profesional, ética y confiable a nivel global." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Empresa", links: ["Inicio", "Quiénes Somos", "Servicios", "Países"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Legal", links: ["Política de Privacidad", "Términos y Condiciones", "Aviso Legal"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Recursos", links: ["Blog", "FAQ", "Contacto"] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/60 text-sm", children: [
          "© 2019 ",
          siteConfig.brand.name,
          " ",
          siteConfig.brand.suffix,
          ". Todos los derechos reservados."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm", children: "Designed for clients across the world." })
      ] })
    ] })
  ] });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-gold uppercase tracking-wider text-sm mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-white/70 hover:text-gold text-sm transition-colors", children: l }) }, l)) })
  ] });
}
function CallFloat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: `tel:${siteConfig.contact.phone}`,
      "aria-label": "Llamar al teléfono",
      className: "fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gold text-navy-deep grid place-items-center shadow-elegant hover:scale-110 transition-transform",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-gold animate-ping opacity-30" })
      ]
    }
  );
}
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Countries, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Documents, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallFloat, {})
  ] });
}
const SplitComponent = Landing;
export {
  SplitComponent as component
};
