const photos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j3SqbCq8Coe2UFvSxPmynezQzbdABT.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XxCNzW0XcIrdCfBAcPzGAGA55mA56f.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZ4fSPQ0kJcc3vnK3gDNy1BsgCIGv8.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ao82amwd1ZpYmO4sDtN0NvYiONKpbj.png',
]

const services = [
  { number: '01', title: 'Corte clásico', text: 'Precisión, textura y terminaciones pensadas para tu estilo.' },
  { number: '02', title: 'Fade & degradados', text: 'Transiciones limpias y un resultado que se nota desde cualquier ángulo.' },
  { number: '03', title: 'Barba', text: 'Perfilado, definición y terminaciones precisas para completar el look.' },
]

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="EZ Studio, inicio">
          <span className="brand-mark">EZ</span>
          <span><b>EZ STUDIO</b><small>PELUQUERÍA · BARBERÍA</small></span>
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
          <div className="hero-actions"><a className="button button-gold" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20reservar%20un%20turno" target="_blank" rel="noreferrer">Reservá tu turno <span>↗</span></a><a className="text-link" href="#servicios">Conocé nuestros servicios <span>↓</span></a></div>
        </div>
        <div className="hero-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MZ4fSPQ0kJcc3vnK3gDNy1BsgCIGv8.png" alt="Interior de EZ Studio con vista hacia la calle" /><div className="image-label"><span>01</span><span>El espacio donde<br />empieza tu próximo look.</span></div></div>
      </section>

      <section className="intro" id="estudio"><div className="section-kicker">01 / EL ESTUDIO</div><div><h2>Un lugar para<br /><em>verte mejor.</em></h2></div><div className="intro-text"><p>En EZ Studio creemos que el estilo no se improvisa. Se trabaja con técnica, escucha y atención a cada detalle.</p><p>No van a faltar buenas charlas, risas y buena onda.</p><p className="owner-note"><strong>Atendido por su dueño</strong><br />Erik Zitterkopf, con más de 10 años de experiencia en barberías y peluquerías.</p><a className="text-link" href="#ubicacion">Conocé el estudio <span>↗</span></a></div></section>

      <section className="services" id="servicios"><div className="section-heading"><div><div className="section-kicker">02 / SERVICIOS</div><h2>Hecho a tu <em>medida.</em></h2></div><p>Desde un refresh hasta una transformación completa. Elegí cómo querés verte.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>

      <section className="statement"><div className="statement-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KemuiumrdS5yFlplAHx4dtxdxoXNKm.png" alt="Logo dorado de EZ Studio sobre fondo negro" /></div><div className="statement-copy"><div className="section-kicker">03 / LA EXPERIENCIA</div><h2>No es solo un<br /><em>corte de pelo.</em></h2><p>Es ese momento para vos. Una pausa. Un ritual. Salís sintiéndote más vos que cuando entraste.</p><div className="quote">“La diferencia está en los detalles.”</div></div></section>

      <section className="gallery" id="galeria"><div className="section-heading"><div><div className="section-kicker">04 / GALERÍA</div><h2>El resultado<br /><em>habla solo.</em></h2></div><a className="instagram-cta" href="https://www.instagram.com/ezstudio666/" target="_blank" rel="noreferrer"><span className="instagram-icon">◎</span><span><b>Seguinos en Instagram</b><small>@ezstudio666 · Mirá nuestros trabajos</small></span><span className="instagram-arrow">↗</span></a></div><div className="gallery-grid">{photos.map((photo, index) => <img key={photo} src={photo} alt={`Trabajo y espacio de EZ Studio ${index + 1}`} loading="lazy" />)}</div></section>

      <section className="location" id="ubicacion"><div><div className="section-kicker">05 / ENCONTRANOS</div><h2>Tu próximo look<br />está <em>acá.</em></h2><p>Gervasio Méndez 359<br />Gualeguaychú, Entre Ríos</p><p className="hours"><b>Lunes a sábados</b><br />09:00 — 21:00 h</p><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Gervasio+Mendez+359+Gualeguaychu" target="_blank" rel="noreferrer">Cómo llegar <span>↗</span></a></div><div className="map-card" aria-label="Mapa de ubicación de EZ Studio"><span className="map-street street-top">GERVASIO MÉNDEZ</span><span className="map-street street-side">CASEROS</span><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-block block-one" /><span className="map-block block-two" /><span className="map-pin"><span>EZ</span></span><span className="map-label">Gervasio Méndez 359</span></div></section>

      <section className="final-cta"><p className="eyebrow"><span /> Estamos listos para vos</p><h2>¿Listo para<br /><em>cambiar el look?</em></h2><a className="button button-gold" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20reservar%20un%20turno" target="_blank" rel="noreferrer">Escribinos por WhatsApp <span>↗</span></a></section>
      <footer><a className="brand" href="#inicio"><span className="brand-mark">EZ</span><span><b>EZ STUDIO</b><small>PELUQUERÍA · BARBERÍA</small></span></a><p>© 2024 EZ Studio · Gualeguaychú</p><a href="https://www.instagram.com/ezstudio666/" target="_blank" rel="noreferrer">Instagram ↗</a></footer>
      <a className="floating-whatsapp" href="https://wa.me/543446572872?text=Hola%20EZ%20Studio%2C%20quiero%20consultar%20por%20un%20turno" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><span aria-hidden="true">✆</span><b>Turnos</b></a>
    </main>
  )
}
