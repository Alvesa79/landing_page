import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  FileText,
  Award,
  Calendar,
  Database,
  Upload,
  ChevronRight,
  CheckCircle2,
  Star,
  ArrowRight,
  Building2,
  Users,
  Shield,
  Zap,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterStatus('submitting')
    try {
      const formData = new FormData(e.currentTarget)
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      setNewsletterStatus('success')
      setNewsletterEmail('')
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      {/* ── NAV ────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">HR Datacol</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors">Módulos</a>
              <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">Cómo funciona</a>
              {/* <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonios</a> */}
              <a href="#pricing" className="hover:text-indigo-600 transition-colors">Precios</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
                Iniciar sesión
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Demo gratuita <ArrowRight size={14} />
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Módulos</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>Cómo funciona</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Precios</a>
            <a href="#contact" className="mt-2 text-center py-2 bg-indigo-600 text-white rounded-lg font-semibold">
              Demo gratuita
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="hero-bg pt-16 pb-0 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Plataforma B2B · Multi-tenant · SaaS-Ready
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6">
              Automatiza la gestión{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">entre empresa</span>
              <br className="hidden sm:block" />
              y empleado.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              HR Datacol centraliza nómina, certificaciones, ausencias y más en una sola
              plataforma segura. Reduce carga operativa en RRHH y mejora la
              experiencia de cada colaborador.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/30 text-base"
              >
                Solicitar demo gratuita <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-base"
              >
                Ver módulos
              </a>
            </div>

            {/* Video Demo */}
            <div className="mt-16 mb-12 mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <video
                src="/hrconnect.webm"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              >
                Tu navegador no soporta video.
              </video>
            </div>

            {/* Stat Pills */}
            <div className="flex flex-wrap justify-center gap-6 text-white">
              {[
                { value: '+500', label: 'empresas activas' },
                { value: '99.9%', label: 'uptime garantizado' },
                { value: '5 módulos', label: 'integrados' },
                { value: 'ISO 27001', label: 'en camino' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="relative h-16 bg-slate-50">
          <svg
            className="absolute bottom-full left-0 w-full"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ── LOGOS / TRUST ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Con la confianza de líderes del sector
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale">
            {['Bancolombia', 'Ecopetrol', 'Grupo Éxito', 'Avianca', 'Claro Colombia', 'ISA'].map((name) => (
              <div key={name} className="font-bold text-lg text-slate-600 tracking-tight">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────── */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Módulos
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Todo lo que tu área de RRHH necesita
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Cinco módulos integrados que eliminan el correo, el papel y las filas
              internas. Cada flujo diseñado para velocidad y trazabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<FileText size={24} />}
              color="indigo"
              title="Descargas de Nómina"
              description="Empleados visualizan y descargan sus colillas de pago en PDF al instante, sin intermediarios ni solicitudes manuales."
              tag="Autogestión"
            />
            <FeatureCard
              icon={<Award size={24} />}
              color="violet"
              title="Certificaciones Laborales"
              description="Generación automática de cartas laborales personalizadas por empresa usando plantillas definidas por RRHH."
              tag="Automatización"
            />
            <FeatureCard
              icon={<Calendar size={24} />}
              color="emerald"
              title="Gestión de Ausencias"
              description="Flujo completo de solicitud y aprobación de vacaciones y licencias con notificaciones por correo en cada etapa."
              tag="Workflow"
            />
            <FeatureCard
              icon={<Database size={24} />}
              color="rose"
              title="Habeas Data"
              description="Solicitudes de cambio de datos sensibles —cuentas bancarias, dirección, contacto— con revisión trazable de RRHH."
              tag="Seguridad"
            />
            <FeatureCard
              icon={<Upload size={24} />}
              color="amber"
              title="Carga Masiva"
              description="Importación de archivos CSV compatibles con ERPs contables para distribuir nóminas de forma ágil y sin errores."
              tag="Integración"
            />
            <div className="feature-card rounded-2xl border-2 border-dashed border-slate-200 p-6 flex flex-col items-center justify-center text-center bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                <Zap size={20} className="text-slate-400" />
              </div>
              <p className="font-semibold text-slate-700 mb-1">Próximamente</p>
              <p className="text-sm text-slate-400">
                Más módulos en desarrollo: encuestas, evaluaciones de desempeño y beneficios flexibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Proceso
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Activo en menos de una semana
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Sin instalaciones complejas. Sin migraciones dolorosas. Solo onboarding guiado y resultados inmediatos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Configura tu empresa',
                desc: 'Cargamos tu estructura organizacional, plantillas y reglas de negocio. Cada empresa opera en su propio espacio aislado (multi-tenant).',
                icon: <Building2 size={28} />,
              },
              {
                step: '02',
                title: 'Invita a tu equipo',
                desc: 'Empleados y líderes acceden con sus credenciales corporativas. RRHH gestiona permisos y roles desde un panel centralizado.',
                icon: <Users size={28} />,
              },
              {
                step: '03',
                title: 'Automatiza y mide',
                desc: 'Los flujos corren solos. Recibes notificaciones, auditorías y métricas de uso. Tu equipo de RRHH se enfoca en lo estratégico.',
                icon: <CheckCircle2 size={28} />,
              },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-black">{step}</span>
                </div>
                <div className="text-indigo-600 mb-4 mt-2">{icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      {/* <section id="testimonials" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Empresas de distintos sectores ya transformaron su operación de RRHH con HR Datacol.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard />
            <TestimonialCard featured />
            <TestimonialCard />
          </div>
        </div>
      </section> */}

      {/* ── CTA BAND ───────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-4 cta-bg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-6">
            <Shield size={12} />
            Seguro · Escalable · Conforme con Habeas Data
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Transforma tu área de RRHH hoy mismo.
          </h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10">
            Habla con un especialista y recibe una demo personalizada con los datos
            reales de tu empresa. Sin compromiso, sin tarjetas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg text-base"
            >
              Solicitar demo gratuita <ChevronRight size={18} />
            </a>
            <a
              href="mailto:databoardcol@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:border-white/60 transition-all text-base"
            >
              Hablar con ventas
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={18} />, text: 'Implementación en menos de 7 días' },
              { icon: <Shield size={18} />, text: 'Datos aislados por empresa (multi-tenant)' },
              { icon: <Users size={18} />, text: 'Soporte dedicado en español' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 justify-center text-white/90 text-sm font-medium">
                <span className="text-emerald-400 flex-shrink-0">{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer id="contact" className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="font-bold text-xl text-white">HR Datacol</span>
              </div>
              <p className="text-sm leading-relaxed mb-5">
                Plataforma B2B para automatizar la gestión administrativa entre empresa y empleado. Multi-tenant, segura y lista para escalar.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a href="tel:+576018000000" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} /> +57 601 800 0000
                </a>
                <a href="mailto:databoardcol@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} /> hola@HR Datacol.co
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={14} /> Bogotá D.C., Colombia
                </span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Plataforma</h4>
              <ul className="space-y-2.5 text-sm">
                {['Descargas de Nómina', 'Certificaciones Laborales', 'Gestión de Ausencias', 'Habeas Data', 'Carga Masiva'].map((item) => (
                  <li key={item}><a href="#features" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Empresa</h4>
              <ul className="space-y-2.5 text-sm">
                {['Nosotros', 'Blog', 'Casos de éxito', 'Seguridad', 'Política de privacidad', 'Términos de uso'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Newsletter</h4>
              <p className="text-sm mb-4 leading-relaxed">
                Recibe novedades sobre RRHH digital, actualizaciones de la plataforma y guías prácticas.
              </p>

              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <CheckCircle2 size={16} />
                  ¡Suscrito! Gracias por unirte.
                </div>
              ) : (
                <form
                  name="newsletter"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col gap-2"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input name="bot-field" className="hidden" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="tu@empresa.com"
                    className="newsletter-input w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'submitting'}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    {newsletterStatus === 'submitting' ? 'Suscribiendo...' : 'Suscribirse'}
                  </button>
                  {newsletterStatus === 'error' && (
                    <p className="text-rose-400 text-xs">Ocurrió un error. Intenta de nuevo.</p>
                  )}
                </form>
              )}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2026 HR Datacol S.A.S. Todos los derechos reservados. NIT: 900.000.000-0</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Términos</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50',
    icon: 'bg-indigo-100 text-indigo-600',
    tag: 'bg-indigo-50 text-indigo-600',
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'bg-violet-100 text-violet-600',
    tag: 'bg-violet-50 text-violet-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    tag: 'bg-emerald-50 text-emerald-600',
  },
  rose: {
    bg: 'bg-rose-50',
    icon: 'bg-rose-100 text-rose-600',
    tag: 'bg-rose-50 text-rose-600',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-100 text-amber-600',
    tag: 'bg-amber-50 text-amber-600',
  },
}

type ColorKey = keyof typeof colorMap

function FeatureCard({
  icon,
  title,
  description,
  color,
  tag,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: ColorKey
  tag: string
}) {
  const c = colorMap[color]
  return (
    <div className={`feature-card rounded-2xl border border-slate-100 p-6 ${c.bg}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${c.icon}`}>
        {icon}
      </div>
      <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${c.tag}`}>
        {tag}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating,
  featured,
}: {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  featured?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col ${
        featured
          ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200'
          : 'bg-slate-50 border border-slate-100'
      }`}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={featured ? 'text-yellow-300 fill-yellow-300' : 'text-yellow-400 fill-yellow-400'}
          />
        ))}
      </div>
      <blockquote
        className={`text-sm leading-relaxed flex-1 mb-6 ${featured ? 'text-indigo-100' : 'text-slate-600'}`}
      >
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
            featured ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-700'
          }`}
        >
          {author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <p className={`font-semibold text-sm ${featured ? 'text-white' : 'text-slate-900'}`}>{author}</p>
          <p className={`text-xs ${featured ? 'text-indigo-200' : 'text-slate-500'}`}>
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  )
}
