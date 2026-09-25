'use client'

import { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'

const photos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j3SqbCq8Coe2UFvSxPmynezQzbdABT.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XxCNzW0XcIrdCfBAcPzGAGA55mA56f.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZ4fSPQ0kJcc3vnK3gDNy1BsgCIGv8.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ao82amwd1ZpYmO4sDtN0NvYiONKpbj.png',
]

const services = [
  { number: '01', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/broche-del-pelo-p53zK6x60RwrUeoHiEBrfusAqIbsns.png', title: 'Corte clásico', text: 'Precisión, textura y terminaciones pensadas para tu estilo.' },
  { number: '02', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/peluqueria-S4wo7F1v0cvkXT6FypgbBw74quDPpc.png', title: 'Fade & degradados', text: 'Transiciones limpias y un resultado que se nota desde cualquier ángulo.' },
  { number: '03', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estilista-JdcFpvOdRQrNwVeM6fm5QOJJ2JsRJK.png', title: 'Barba', text: 'Perfilado, definición y terminaciones precisas para completar el look.' },
]

const waUrl = 'https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20reservar%20un%20turno'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function Intro() {
  const [visible, setVisible] = useState(true)
  useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 1050); return () => window.clearTimeout(timer) }, [])
  return <AnimatePresence>{visible && <motion.div className="cinematic-intro" initial={{ opacity: 1 }} exit={{ opacity: 0, pointerEvents: 'none' }} transition={{ duration: 0.55 }}><motion.div className="intro-mark" initial={{ opacity: 0, scale: .92, filter: 'blur(12px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: .65, ease: [0.22, 1, .36, 1] }}>EZ</motion.div><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32, duration: .5 }}>PELUQUERÍA · BARBERÍA</motion.p></motion.div>}</AnimatePresence>
}

function Header() {
  const { scrollY } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24))
  return <motion.header className="site-header" data-scrolled={scrolled ? 'true' : 'false'}>
    <a className="brand" href="#inicio" aria-label="EZ Studio, inicio"><span className="brand-mark">EZ</span><span><b>STUDIO</b><small>PELUQUERÍA · BARBERÍA</small></span></a>
    <nav aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#estudio">El estudio</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a></nav>
    <a className="header-cta" href={waUrl} target="_blank" rel="noreferrer">Reservar turno <span>↗</span></a>
    <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><nav aria-label="Menú móvil">{['inicio', 'servicios', 'estudio', 'galeria', 'ubicacion'].map((item, index) => <motion.a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .06 }}>{item === 'inicio' ? 'Inicio' : item[0].toUpperCase() + item.slice(1)}</motion.a>)}<motion.a className="button button-gold" href={waUrl} target="_blank" rel="noreferrer">Reservar turno ↗</motion.a></nav></motion.div>}</AnimatePresence>
  </motion.header>
}

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const copyOpacity = useTransform(scrollYProgress, [0, .72], [1, 0])
  return <motion.section ref={ref} className="hero" id="inicio" style={{ opacity: useTransform(scrollYProgress, [0, 1], [1, .55]), scale: useTransform(scrollYProgress, [0, 1], [1, .97]) }}>
    <motion.div className="hero-copy" style={{ opacity: copyOpacity }}><motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.12, duration: .6 }}><span className="eyebrow-tool" aria-hidden="true">✂</span> Peluquería y barbería</motion.p><h1><motion.span className="headline-line" initial={{ y: '105%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: .8, ease: [0.22, 1, .36, 1] }}>Tu estilo.</motion.span><motion.span className="headline-line gold-line" initial={{ y: '105%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.34, duration: .8, ease: [0.22, 1, .36, 1] }}>Nuestra firma.</motion.span></h1><motion.p className="hero-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.55, duration: .7 }}>Peluquería y barbería para quienes entienden que un buen corte cambia todo.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.68, duration: .65 }}><a className="button button-gold" href={waUrl} target="_blank" rel="noreferrer">Reservá tu turno <span>↗</span></a><a className="text-link" href="#servicios">Conocé nuestros servicios <span>↓</span></a></motion.div><div className="hero-about"><div className="section-kicker">01 / EL ESTUDIO</div><p>En EZ Studio el estilo se trabaja con técnica, escucha y atención a cada detalle. No van a faltar buenas charlas, risas y buena onda.</p><p><strong>Atendido por su dueño:</strong> Erik Zitterkopf, con más de 10 años de experiencia en barberías y peluquerías.</p></div></motion.div>
    <div className="hero-image"><motion.img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZ4fSPQ0kJcc3vnK3gDNy1BsgCIGv8.png" alt="Interior de EZ Studio con vista hacia la calle" style={{ y: imageY, scale: imageScale }} /></div>
  </motion.section>
}

function Services() {
  const [active, setActive] = useState(0)
  return <section className="services motion-services" id="servicios"><div className="services-sticky"><Reveal><div className="section-kicker">02 / SERVICIOS</div><h2>La experiencia en manos<br /><em>de quienes saben.</em></h2><p className="services-lead">Técnica precisa, asesoramiento y un resultado que se siente propio.</p></Reveal></div><div className="service-story">{services.map((service, index) => <motion.article className={`service-story-card ${active === index ? 'is-active' : ''}`} key={service.number} onViewportEnter={() => setActive(index)} viewport={{ amount: .6 }}><div className="service-story-media"><AnimatePresence mode="wait"><motion.img key={service.image} src={service.image} alt="" aria-hidden="true" initial={{ opacity: 0, scale: 1.06, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }} exit={{ opacity: 0, scale: .98, clipPath: 'inset(100% 0 0 0)' }} transition={{ duration: .7 }} /></AnimatePresence></div><div className="service-story-copy"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p></div></motion.article>)}</div></section>
}

function Experience() {
  return <section className="statement" id="estudio"><Reveal className="statement-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XxCNzW0XcIrdCfBAcPzGAGA55mA56f.png" alt="Interior de EZ Studio visto desde el puesto de barbería hacia el local" loading="lazy" /></Reveal><div className="statement-copy"><Reveal><div className="section-kicker">03 / LA EXPERIENCIA</div><h2>No es solo un<br /><em>corte de pelo.</em></h2><p>Es ese momento para vos. Una pausa. Un ritual. Salís sintiéndote más vos que cuando entraste. Cada servicio combina técnica, asesoramiento y detalles cuidados para que tu estilo se sienta propio.</p><div className="quote">“La diferencia está en los detalles.”</div></Reveal></div></section>
}

export default function Page() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return <><Intro /><Header /><motion.div className="scroll-progress" style={{ scaleY: progress }} aria-hidden="true" /><main><Hero /><Services /><Experience /><section className="gallery" id="galeria"><div className="section-heading"><div><div className="section-kicker">04 / GALERÍA</div><h2>El resultado<br /><em>habla solo.</em></h2></div><a className="instagram-cta" href="https://www.instagram.com/ezstudio666/" target="_blank" rel="noreferrer"><span className="instagram-icon">◎</span><span><b>Seguinos en Instagram</b><small>@ezstudio666 · Mirá nuestros trabajos</small></span><span className="instagram-arrow">↗</span></a></div><div className="gallery-grid">{photos.map((photo, index) => <Reveal key={photo} delay={index * .08}><img src={photo} alt={`Trabajo y espacio de EZ Studio ${index + 1}`} loading="lazy" /></Reveal>)}</div></section><section className="location" id="ubicacion"><div><div className="section-kicker">05 / ENCONTRANOS</div><h2>Tu próximo look<br />está <em>acá.</em></h2><p>Gervasio Méndez 359<br />Gualeguaychú, Entre Ríos</p><p className="hours"><b>Lunes a sábados</b><br />09:00 — 21:00 h</p><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Gervasio+Mendez+359+Gualeguaychu" target="_blank" rel="noreferrer">Cómo llegar <span>↗</span></a></div><div className="map-card"><iframe title="Mapa de ubicación de EZ Studio" src="https://www.google.com/maps?q=Gervasio%20Mendez%20359%2C%20Gualeguaychu%2C%20Entre%20Rios&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section><section className="final-cta"><h2>¿Listo para<br /><em>cambiar el look?</em></h2><a className="button button-gold" href={waUrl} target="_blank" rel="noreferrer">Escribinos por WhatsApp <span>↗</span></a></section><footer><a className="brand" href="#inicio"><span className="brand-mark">EZ</span><span><b>STUDIO</b><small>PELUQUERÍA · BARBERÍA</small></span></a><p>© 2024 EZ Studio · Gualeguaychú</p></footer><a className="floating-whatsapp" href={waUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><span aria-hidden="true">WA</span><b>Turnos</b></a></main></>
}

