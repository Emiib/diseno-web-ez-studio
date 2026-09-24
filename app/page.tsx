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

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="EZ Studio, inicio">
          <span className="brand-mark">EZ</span>
          <span><b>STUDIO</b><small>PELUQUERÍA · BARBERÍA</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a><a href="#estudio">El estudio</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a>
        </nav>
        <a className="header-cta" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20consultar%20por%20un%20turno" target="_blank" rel="noreferrer">Reservar turno <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-tool" aria-hidden="true">✂</span> Peluquería y barbería</p>
          <h1>Tu estilo.<br /><em>Nuestra firma.</em></h1>
          <p className="hero-text">Peluquería y barbería para quienes entienden que un buen corte cambia todo.</p>
          <div className="hero-actions"><a className="button button-gold" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20reservar%20un%20turno" target="_blank" rel="noreferrer">Reservá tu turno <span>↗</span></a><a className="text-link" href="#servicios">Conocé nuestros servicios <span>↓</span></a></div><div className="hero-about"><div className="section-kicker">01 / EL ESTUDIO</div><p>En EZ Studio el estilo se trabaja con técnica, escucha y atención a cada detalle. No van a faltar buenas charlas, risas y buena onda.</p><p><strong>Atendido por su dueño:</strong> Erik Zitterkopf, con más de 10 años de experiencia en barberías y peluquerías.</p></div>
        </div>
        <div className="hero-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZ4fSPQ0kJcc3vnK3gDNy1BsgCIGv8.png" alt="Interior de EZ Studio con vista hacia la calle" /><div className="image-label"><span>01</span><span>El espacio donde<br />empieza tu próximo look.</span></div></div>
      </section>

      <section className="services" id="servicios"><div className="section-heading"><div><div className="section-kicker">02 / SERVICIOS</div><h2>La experiencia en manos<br /><em>de quienes saben.</em></h2></div></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-topline"><span className="service-number">{service.number}</span><img className="service-icon" src={service.image} alt="" aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>

      <section className="statement"><div className="statement-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XxCNzW0XcIrdCfBAcPzGAGA55mA56f.png" alt="Interior de EZ Studio visto desde el puesto de barbería hacia el local" /></div><div className="statement-copy"><div className="section-kicker">03 / LA EXPERIENCIA</div><h2>No es solo un<br /><em>corte de pelo.</em></h2><p>Es ese momento para vos. Una pausa. Un ritual. Salís sintiéndote más vos que cuando entraste. Cada servicio combina técnica, asesoramiento y detalles cuidados para que tu estilo se sienta propio.</p><div className="quote">“La diferencia está en los detalles.”</div></div></section>

      <section className="gallery" id="galeria"><div className="section-heading"><div><div className="section-kicker">04 / GALERÍA</div><h2>El resultado<br /><em>habla solo.</em></h2></div><a className="instagram-cta" href="https://www.instagram.com/ezstudio666/" target="_blank" rel="noreferrer"><span className="instagram-icon">◎</span><span><b>Seguinos en Instagram</b><small>@ezstudio666 · Mirá nuestros trabajos</small></span><span className="instagram-arrow">↗</span></a></div><div className="gallery-grid">{photos.map((photo, index) => <img key={photo} src={photo} alt={`Trabajo y espacio de EZ Studio ${index + 1}`} loading="lazy" />)}</div></section>

      <section className="location" id="ubicacion"><div><div className="section-kicker">05 / ENCONTRANOS</div><h2>Tu próximo look<br />está <em>acá.</em></h2><p>Gervasio Méndez 359<br />Gualeguaychú, Entre Ríos</p><p className="hours"><b>Lunes a sábados</b><br />09:00 — 21:00 h</p><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Gervasio+Mendez+359+Gualeguaychu" target="_blank" rel="noreferrer">Cómo llegar <span>↗</span></a></div><div className="map-card"><iframe title="Mapa de ubicación de EZ Studio" src="https://www.google.com/maps?q=Gervasio%20Mendez%20359%2C%20Gualeguaychu%2C%20Entre%20Rios&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

      <section className="final-cta"><h2>¿Listo para<br /><em>cambiar el look?</em></h2><a className="button button-gold" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20reservar%20un%20turno" target="_blank" rel="noreferrer">Escribinos por WhatsApp <span>↗</span></a></section>
      <footer><a className="brand" href="#inicio"><span className="brand-mark">EZ</span><span><b>STUDIO</b><small>PELUQUERÍA · BARBERÍA</small></span></a><p>© 2024 EZ Studio · Gualeguaychú</p></footer>
      <a className="floating-whatsapp" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20consultar%20por%20un%20turno" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3Zm-8.4 18.1h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 0 1-1.5-5.2C1.9 6.2 6.3 1.9 11.9 1.9c2.7 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.5-4.3 9.8-9.7 9.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.5-.7-2.5-1.2-3.5-2.8-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.7 2 .8 2.8.8 3.8.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.1-.4-.2-.7-.4Z" /></svg><b>Turnos</b></a>
    </main>
  )
}
