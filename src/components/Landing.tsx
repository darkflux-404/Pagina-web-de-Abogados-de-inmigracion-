import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Plane, Users, Home, Award, Briefcase, Shield, HeartHandshake, Building2,
  ChevronDown, Phone, Mail, MapPin, Star, Globe, FileText,
  Menu, X, ArrowRight, CheckCircle2, Scale, Clock, FileSearch, Send,
  Facebook, Instagram, Linkedin, Twitter, Youtube,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.png";
import familyImg from "@/assets/family.png";
import passportImg from "@/assets/passport.png";
import { siteConfig } from "@/site.config";

/* ---------------- NAV ---------------- */
const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#paises", label: "Países" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          {/* 👇 LOGO — sustituye <Scale/> por <img src={siteConfig.brand.logo}/> en src/site.config.ts */}
          {siteConfig.brand.logo ? (
            <img src={siteConfig.brand.logo} alt={siteConfig.brand.name} className="h-28 w-auto max-w-[300px] rounded-md object-contain" />
          ) : (
            <div className="h-24 w-24 rounded-md gradient-gold grid place-items-center shadow-gold">
              <Scale className="size-9 text-navy-deep" strokeWidth={2.5} />
            </div>
          )}
        </a>

        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/85 hover:text-gold text-sm font-medium transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 gradient-gold text-navy-deep font-semibold px-5 py-2.5 rounded-md text-sm shadow-gold hover:scale-105 transition-transform"
        >
          Agendar Consulta <ArrowRight className="size-4" />
        </a>

        <button
          aria-label="Abrir menú"
          className="xl:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden glass-dark mt-3 mx-4 rounded-xl p-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/90 hover:text-gold text-base font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="gradient-gold text-navy-deep font-semibold px-5 py-3 rounded-md text-center mt-2">
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section id="inicio" className="relative min-h-dvh flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImg} alt="" width={1920} height={1280} className="size-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep" style={{ background: "linear-gradient(180deg, oklch(0.22 0.06 255 / 0.7), oklch(0.22 0.06 255 / 0.3) 40%, oklch(0.22 0.06 255 / 0.95))" }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="size-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-medium tracking-wide">
              International Immigration Attorneys
            </span>
          </div>

          <h1 className="font-display font-black text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Global Immigration
            <div className="inline-flex flex-col items-center">
              <span className="block text-white font-display font-black pb-1">Advocates</span>
              <div className="-mt-2 h-1 w-24 bg-gold rounded-full" />
            </div>
          </h1>

          <p className="text-gold text-lg md:text-2xl font-poppins italic mb-6 tracking-wide">
            {siteConfig.brand.slogan}
          </p>

          <div className="max-w-2xl mb-10">
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 text-justify">
              Ayudamos a personas, familias, inversionistas, estudiantes y empresas a navegar exitosamente los procesos
              migratorios internacionales mediante asesoría legal especializada y representación profesional.
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 text-justify">
              Nuestro equipo proporciona asesoría legal especializada en inmigración, residencia, ciudadanía, visas,
              reunificación familiar y representación ante autoridades migratorias.
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed text-justify">
              Trabajamos con profesionalismo, transparencia y compromiso para ayudar a nuestros clientes a construir
              un futuro sin fronteras.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contacto" className="inline-flex items-center gap-2 gradient-gold text-navy-deep font-bold px-7 py-4 rounded-md shadow-gold hover:scale-105 transition-transform">
              Agendar Consulta <ArrowRight className="size-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 glass text-white font-semibold px-7 py-4 rounded-md hover:bg-white/15 transition-colors">
              Hablar con un Especialista
            </a>
            <a href="#proceso" className="inline-flex items-center gap-2 border border-gold/50 text-gold font-semibold px-7 py-4 rounded-md hover:bg-gold/10 transition-colors">
              Evaluación de Elegibilidad
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 max-w-4xl"
        >
          {siteConfig.stats.map((s) => (
            <div key={s.l} className="glass rounded-xl p-5 text-center">
              <div className="font-display font-black text-gold text-3xl md:text-4xl">{s.n}</div>
              <div className="text-white/80 text-xs md:text-sm mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <a href="#nosotros" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-gold transition-colors animate-bounce" aria-label="Scroll">
        <ChevronDown className="size-7" />
      </a>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="h-px w-8 bg-gold" />
        <span className="text-gold uppercase text-xs tracking-[0.25em] font-bold">{eyebrow}</span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display font-black text-navy-deep text-4xl md:text-5xl mb-4">{title}</h2>
      {desc && <p className="text-muted-foreground text-lg leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const values = [
    "Integridad", "Profesionalismo", "Transparencia", "Confidencialidad",
    "Excelencia", "Compromiso con el Cliente", "Respeto por la Diversidad Cultural",
  ];
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Quiénes Somos" title="Una firma global comprometida con su futuro" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-3xl" />
            <img src={aboutImg} alt="Oficinas Global Immigration Advocates" width={1280} height={960} loading="lazy" className="relative rounded-2xl shadow-elegant w-full" />
            <div className="absolute -bottom-6 -right-6 hidden md:block glass-dark rounded-xl p-5 shadow-elegant">
              <div className="flex items-center gap-3">
                <Award className="text-gold size-8" />
                <div>
                  <div className="text-white font-bold">Top Rated Firm</div>
                  <div className="text-white/70 text-xs">International Recognition</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
              <strong className="text-navy-deep">Global Immigration Advocates</strong> es una firma
              especializada en derecho migratorio internacional dedicada a brindar soluciones legales
              para individuos, familias y organizaciones que buscan oportunidades migratorias en
              distintos países.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
              <strong className="text-navy-deep"></strong> Nuestro objetivo es simplificar procesos complejos y ofrecer estrategias legales personalizadas para cada cliente.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-gold pl-4">
                <h3 className="font-display font-bold text-navy-deep text-lg mb-2">Nuestra Misión</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitar el acceso a oportunidades internacionales mediante servicios legales
                  migratorios confiables, éticos y profesionales.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <h3 className="font-display font-bold text-navy-deep text-lg mb-2">Nuestra Visión</h3>
                <p className="text-sm text-muted-foreground">
                  Convertirnos en una referencia global en servicios legales migratorios.
                </p>
              </div>
            </div>

            <h3 className="font-display font-bold text-navy-deep text-lg mb-3">Nuestros Valores</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span key={v} className="inline-flex items-center gap-1.5 bg-muted text-navy-deep text-sm font-medium px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="size-3.5 text-gold" />
                  {v}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { icon: Plane, title: "Visas de Inmigrante", items: ["Visas familiares", "Visas de prometido(a)", "Visas laborales", "Visas de inversionista", "Visas humanitarias", "Visas especiales"] },
  { icon: FileText, title: "Visas de No Inmigrante", items: ["Turismo", "Negocios", "Estudios", "Trabajo temporal", "Intercambio cultural", "Tratamientos médicos"] },
  { icon: Home, title: "Residencia Permanente", items: ["Residencia familiar", "Residencia laboral", "Residencia por inversión", "Ajuste de estatus", "Renovaciones"] },
  { icon: Award, title: "Ciudadanía y Naturalización", items: ["Naturalización", "Ciudadanía derivada", "Ciudadanía por descendencia", "Recuperación de ciudadanía"] },
  { icon: HeartHandshake, title: "Reunificación Familiar", items: ["Cónyuges", "Hijos", "Padres", "Hermanos", "Familiares elegibles"] },
  { icon: Briefcase, title: "Permisos de Trabajo", items: ["Solicitudes iniciales", "Renovaciones", "Modificaciones", "Autorizaciones especiales"] },
  { icon: Scale, title: "Defensa Migratoria", items: ["Deportación", "Audiencias", "Apelaciones", "Mociones", "Cancelación de remoción"] },
  { icon: Shield, title: "Asilo y Protección Humanitaria", items: ["Asilo político", "Refugio", "Protección humanitaria", "Protección contra persecución"] },
  { icon: Building2, title: "Servicios Corporativos", items: ["Contratación internacional", "Movilidad global", "Cumplimiento migratorio", "Transferencias empresariales", "Patrocinios laborales"] },
];

function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 size-96 gradient-gold opacity-10 blur-3xl rounded-full" />
      <div className="container mx-auto px-6 relative">
        <SectionHeader eyebrow="Nuestros Servicios" title="Soluciones legales integrales" desc="Representación profesional en cada categoría de derecho migratorio internacional." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-gold/30"
            >
              <div className="size-14 rounded-xl gradient-hero grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="size-7 text-gold" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-bold text-navy-deep text-xl mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-gold shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COUNTRIES ---------------- */
const countries = [
  { name: "Estados Unidos", flag: "🇺🇸" }, { name: "Canadá", flag: "🇨🇦" },
  { name: "México", flag: "🇲🇽" }, { name: "Reino Unido", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" }, { name: "Nueva Zelanda", flag: "🇳🇿" },
  { name: "España", flag: "🇪🇸" }, { name: "Francia", flag: "🇫🇷" },
  { name: "Alemania", flag: "🇩🇪" }, { name: "Portugal", flag: "🇵🇹" },
];

function Countries() {
  return (
    <section id="paises" className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--navy) 0%, transparent 50%)" }} />
      <div className="container mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold uppercase text-xs tracking-[0.25em] font-bold">Países y Jurisdicciones</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display font-black text-white text-4xl md:text-5xl mb-4">Presencia internacional</h2>
          <p className="text-white/70 text-lg">Asesoramos en los principales destinos migratorios del mundo.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {countries.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 text-center cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{c.flag}</div>
              <div className="text-white font-semibold text-sm">{c.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const steps = [
  { n: "01", title: "Evaluación Inicial", desc: "Análisis confidencial de su caso y elegibilidad migratoria.", icon: FileSearch },
  { n: "02", title: "Estrategia Legal", desc: "Diseñamos la mejor ruta legal alineada a sus objetivos.", icon: Scale },
  { n: "03", title: "Preparación Documental", desc: "Recopilación y revisión exhaustiva de documentos.", icon: FileText },
  { n: "04", title: "Presentación Oficial", desc: "Radicación ante las autoridades competentes.", icon: Send },
  { n: "05", title: "Seguimiento", desc: "Monitoreo continuo y respuesta a requerimientos.", icon: Clock },
  { n: "06", title: "Resolución", desc: "Aprobación y orientación post-resolución.", icon: CheckCircle2 },
];

function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Nuestro Proceso" title="6 pasos hacia su nuevo futuro" desc="Un proceso estructurado, transparente y profesional desde la consulta inicial hasta la resolución." />
        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-muted rounded-2xl p-7 hover:shadow-elegant transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold via-[#f1cf71] to-[#b8860b] text-navy-deep font-display font-black text-2xl shadow-[0_10px_25px_rgba(184,134,11,0.25)]">
                    {s.n}
                  </div>
                  <div className="size-14 rounded-full bg-navy-deep grid place-items-center ring-1 ring-gold/20">
                    <s.icon className="size-6 text-gold" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-navy-deep text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOCUMENTS ---------------- */
const docs = [
  "Pasaporte", "Acta de nacimiento", "Acta de matrimonio",
  "Certificados policiales", "Evidencia financiera", "Registros laborales",
  "Certificados académicos", "Fotografías oficiales", "Traducciones certificadas",
];

function Documents() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={passportImg} alt="Documentos migratorios" width={1200} height={900} loading="lazy" className="rounded-2xl shadow-elegant" />
          </motion.div>
          <div>
            <SectionHeader eyebrow="Documentación" title="Documentos frecuentes" />
            <div className="grid sm:grid-cols-2 gap-3">
              {docs.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-card hover:border-gold border border-transparent transition-colors"
                >
                  <div className="size-10 rounded-md gradient-gold grid place-items-center shrink-0">
                    <FileText className="size-5 text-navy-deep" />
                  </div>
                  <span className="font-medium text-navy-deep text-sm">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  { name: "María González", country: "🇲🇽 México → 🇺🇸 EE.UU.", category: "Reunificación Familiar", text: "Después de años intentando reunirme con mi esposo, Global Immigration Advocates hizo posible lo imposible. Profesionalismo absoluto." },
  { name: "James Carter", country: "🇬🇧 UK → 🇨🇦 Canadá", category: "Residencia Aprobada", text: "Equipo extraordinario. Mi residencia permanente fue aprobada en tiempo récord gracias a su estrategia legal." },
  { name: "Sofía Martínez", country: "🇨🇴 Colombia → 🇪🇸 España", category: "Ciudadanía Obtenida", text: "Obtuve mi ciudadanía española sin complicaciones. Cada paso fue claro, transparente y profesional." },
  { name: "Ahmed Hassan", country: "🇪🇬 Egipto → 🇦🇺 Australia", category: "Visa Aprobada", text: "La mejor decisión que tomé. Atención personalizada y resultados garantizados con total ética." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <section id="testimonios" className="py-24 md:py-32 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-gold uppercase text-xs tracking-[0.25em] font-bold">Testimonios</span>
          <h2 className="font-display font-black text-white text-4xl md:text-5xl mt-3">Historias de éxito</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="glass-dark rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, k) => <Star key={k} className="size-5 fill-gold text-gold" />)}
            </div>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic font-poppins">"{t.text}"</p>
            <div className="size-16 rounded-full gradient-gold grid place-items-center mx-auto mb-4 font-display font-black text-navy-deep text-xl">
              {t.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="text-white font-bold">{t.name}</div>
            <div className="text-white/70 text-sm">{t.country}</div>
            <div className="inline-block mt-3 text-gold text-xs uppercase tracking-wider font-bold border border-gold/40 rounded-full px-3 py-1">
              {t.category}
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Testimonio ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
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
]


function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader eyebrow="Preguntas Frecuentes" title="Resolvemos sus dudas" />
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-muted rounded-xl overflow-hidden border border-transparent hover:border-gold/30 transition-colors"
            >
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-display font-bold text-navy-deep text-lg pr-6">{f.q}</span>
                <ChevronDown className={`size-5 text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOG ---------------- */
const posts = [
  { cat: "Noticias Migratorias", title: "Cambios recientes en políticas de visas de inversión", date: "15 Jun 2026", img: aboutImg },
  { cat: "Visas", title: "Guía completa para visas de trabajo temporal en Canadá", date: "10 Jun 2026", img: familyImg },
  { cat: "Ciudadanía", title: "Ciudadanía por descendencia: requisitos por país", date: "5 Jun 2026", img: passportImg },
];

function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Blog" title="Recursos e insights migratorios" />
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all hover:-translate-y-1 group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} width={800} height={500} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-bold uppercase tracking-wider">{p.cat}</span>
                <h3 className="font-display font-bold text-navy-deep text-xl mt-2 mb-3 group-hover:text-navy transition-colors">{p.title}</h3>
                <span className="text-muted-foreground text-sm">{p.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    case: "Visa de Inmigrante",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      from: "",
      to: "",
      case: "Visa de Inmigrante",
      message: "",
    });
    alert("Gracias. Hemos recibido su solicitud y nos pondremos en contacto pronto.");
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Contacto" title="Inicie su proceso hoy" desc="Agende una consulta confidencial con uno de nuestros especialistas." />
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Teléfono", value: siteConfig.contact.phone },
              { icon: Mail, label: "Correo", value: siteConfig.contact.email },
              { icon: MapPin, label: "Dirección", value: siteConfig.contact.address },
              { icon: Clock, label: "Horario", value: siteConfig.contact.hours },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 p-5 rounded-xl bg-muted">
                <div className="size-12 rounded-lg gradient-hero grid place-items-center shrink-0">
                  <c.icon className="size-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">{c.label}</div>
                  <div className="font-semibold text-navy-deep whitespace-pre-line">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-muted rounded-2xl p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre Completo" name="name" required value={formData.name} onChange={handleChange} />
              <Field label="Correo Electrónico" name="email" type="email" required value={formData.email} onChange={handleChange} />
              <Field label="Teléfono" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              <Field label="País de Residencia" name="from" value={formData.from} onChange={handleChange} />
              <Field label="País de Destino" name="to" value={formData.to} onChange={handleChange} />
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">Tipo de Caso</label>
                <select
                  name="case"
                  value={formData.case}
                  onChange={handleChange}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option>Visa de Inmigrante</option>
                  <option>Residencia</option>
                  <option>Ciudadanía</option>
                  <option>Reunificación Familiar</option>
                  <option>Defensa Migratoria</option>
                  <option>Asilo</option>
                  <option>Corporativo</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border border-border rounded-lg px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              />
            </div>
            <button type="submit" className="w-full gradient-gold text-navy-deep font-bold px-7 py-4 rounded-lg shadow-gold hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2">
              Enviar Solicitud <Send className="size-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Sus datos son tratados con total confidencialidad bajo nuestra política de privacidad.
            </p>
          </motion.form>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-16 p-6 border-l-4 border-gold bg-muted rounded-r-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-navy-deep">Aviso Legal: </strong>
            Global Immigration Advocates proporciona asesoría legal basada en la información disponible y las
            leyes aplicables al momento de la consulta. Los resultados migratorios dependen exclusivamente de
            las decisiones de las autoridades competentes y no pueden ser garantizados.
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-border rounded-lg px-4 py-3 text-navy-deep focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-navy-deep text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gradient-gold" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {siteConfig.brand.logo ? (
                <img src={siteConfig.brand.logo} alt={siteConfig.brand.name} className="h-20 w-auto max-w-[260px] rounded-md object-contain" />
              ) : (
                <div className="h-16 w-16 rounded-md gradient-gold grid place-items-center">
                  <Scale className="size-7 text-navy-deep" strokeWidth={2.5} />
                </div>
              )}
              <div>
                <div className="font-display font-extrabold text-base">{siteConfig.brand.name}</div>
                <div className="text-gold text-xs tracking-[0.2em] font-semibold">{siteConfig.brand.suffix}</div>
              </div>
            </div>
            <p className="text-gold italic mb-4 font-poppins">{siteConfig.brand.slogan}</p>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              International Immigration Attorneys & Legal Solutions. Asesoría legal migratoria
              profesional, ética y confiable a nivel global.
            </p>
            <div className="flex gap-3">
              {([
                ["facebook", Facebook], ["instagram", Instagram], ["linkedin", Linkedin],
                ["twitter", Twitter], ["youtube", Youtube],
              ] as const).map(([key, Icon]) => {
                const url = siteConfig.social[key];
                if (!url) return null;
                return (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={key} className="size-10 rounded-full glass grid place-items-center hover:bg-gold hover:text-navy-deep transition-colors">
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol title="Empresa" links={["Inicio", "Quiénes Somos", "Servicios", "Países"]} />
          <FooterCol title="Legal" links={["Política de Privacidad", "Términos y Condiciones", "Aviso Legal"]} />
          <FooterCol title="Recursos" links={["Blog", "FAQ", "Contacto"]} />
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-white/60 text-sm">© 2019 {siteConfig.brand.name} {siteConfig.brand.suffix}. Todos los derechos reservados.</p>
          <p className="text-white/60 text-sm">Designed for clients across the world.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-gold uppercase tracking-wider text-sm mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-white/70 hover:text-gold text-sm transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- CALL FLOAT ---------------- */
function CallFloat() {
  return (
    <a
      href={`tel:${siteConfig.contact.phone}`}
      aria-label="Llamar al teléfono"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gold text-navy-deep grid place-items-center shadow-elegant hover:scale-110 transition-transform"
    >
      <Phone className="size-6" />
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
    </a>
  );
}

/* ---------------- PAGE ---------------- */
export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Countries />
        <Process />
        <Documents />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <CallFloat />
    </>
  );
}
