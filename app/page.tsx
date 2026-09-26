'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  ChevronDown,
  CircleUserRound,
  Headphones,
  Laptop,
  Menu,
  MessageCircle,
  PackageCheck,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Tablet,
  Wrench,
  X,
} from 'lucide-react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GYPtMps3r1EHkznnYfwv4fUBKHOCoC.png',
  catalog: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rUTl6ZkEYXaMRj95NbLzQ8AlVQ47N1.png',
  accessories: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cgWNrVwARElxDUTwUB3zLjd5gd6Fcs.png',
  services: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-frTShSRI00hHtYaGAgAfLRI645urKJ.png',
}

const products = [
  { name: 'Laptop Lenovo IdeaPad 3', category: 'Computadores', price: '$2.150.000', image: images.hero, tag: 'Nuevo' },
  { name: 'iPhone 14 128GB', category: 'Celulares', price: '$3.800.000', image: images.catalog, tag: 'Top' },
  { name: 'Audífonos Bluetooth Sony', category: 'Audífonos', price: '$120.000', image: images.hero },
  { name: 'Cargador Original USB-C 20W', category: 'Accesorios', price: '$70.000', image: images.accessories },
  { name: 'AirPods Pro 2da Gen', category: 'Audífonos', price: '$950.000', image: images.catalog, tag: 'Top' },
  { name: 'iPad Air M1 64GB', category: 'Tablets', price: '$2.900.000', image: images.accessories, tag: 'Nuevo' },
  { name: 'Teclado Mecánico RGB', category: 'Accesorios', price: '$180.000', image: images.catalog, tag: 'Oferta' },
  { name: 'Mouse Inalámbrico Logitech', category: 'Accesorios', price: '$45.000', image: images.accessories },
]

const categories = [
  { label: 'Computadores', icon: Laptop },
  { label: 'Celulares', icon: Smartphone },
  { label: 'Audífonos', icon: Headphones },
  { label: 'Tablets', icon: Tablet },
  { label: 'Accesorios', icon: Cable },
  { label: 'Servicios', icon: Wrench },
]

const services = [
  ['Reparación de Pantalla', 'Desde $150.000', 'Cambio de pantalla original para todas las marcas.'],
  ['Cambio de Batería', 'Desde $80.000', 'Reemplazo de batería con garantía de 6 meses.'],
  ['Limpieza Interna', 'Desde $50.000', 'Limpieza profunda de componentes y mejora de rendimiento.'],
  ['Reparación de Placa', 'Desde $150.000', 'Diagnóstico y reparación de placa madre y componentes.'],
  ['Instalación de Software', 'Desde $60.000', 'Instalación de sistemas operativos, aplicaciones y antivirus.'],
  ['Mantenimiento Preventivo', 'Desde $70.000', 'Revisión general para prevenir fallas y prolongar la vida útil.'],
]

function Header({ active, setActive, cartCount }: { active: string; setActive: (value: string) => void; cartCount: number }) {
  return <header className="sticky top-0 z-20 bg-[#0d1425] text-white shadow-lg">
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
      <button onClick={() => setActive('Inicio')} aria-label="Ir al inicio" className="grid size-9 shrink-0 place-items-center rounded-md bg-[#1e62df] font-black text-sm">IC</button>
      <div className="relative flex-1 max-w-2xl">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input aria-label="Buscar productos" placeholder="Buscar productos, servicios..." className="h-9 w-full rounded-md border border-slate-500 bg-slate-800/80 pl-9 pr-3 text-xs text-white outline-none placeholder:text-slate-400 focus:border-[#2e73ed]" />
      </div>
      <button className="hidden items-center gap-1 text-xs font-semibold sm:flex"><CircleUserRound className="size-4" /> Mi cuenta</button>
      <button className="flex items-center gap-1 text-xs font-semibold"><ShoppingCart className="size-4" /> <span className="hidden sm:inline">Carrito</span><b className="grid size-4 place-items-center rounded-full bg-[#2e73ed] text-[10px]">{cartCount}</b></button>
    </div>
    <nav className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 lg:px-8">
        <Menu className="mr-3 size-4 md:hidden" />
        {['Inicio', 'Productos', 'Accesorios', 'Servicios', 'Ofertas', 'Nosotros'].map(item => <button key={item} onClick={() => setActive(item)} className={`px-4 py-2.5 text-xs font-semibold transition ${active === item ? 'bg-[#2866dc] text-white' : 'text-slate-300 hover:bg-white/10'}`}>{item}</button>)}
      </div>
    </nav>
  </header>
}

function ProductCard({ product, onAdd }: { product: typeof products[number]; onAdd: () => void }) {
  return <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="relative h-40 overflow-hidden bg-slate-100">
      {product.tag && <span className="absolute left-2 top-2 z-10 rounded bg-[#2866dc] px-2 py-1 text-[10px] font-bold text-white">{product.tag}</span>}
      <img src={product.image} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-105" />
    </div>
    <div className="p-3">
      <p className="text-[10px] text-slate-500">{product.category}</p><h3 className="mt-1 truncate text-xs font-bold text-[#111827]">{product.name}</h3>
      <div className="mt-1 text-sm tracking-widest text-amber-400">★★★★★</div>
      <div className="mt-1 flex items-center justify-between"><strong className="text-sm text-[#111827]">{product.price}</strong><div className="flex gap-1.5"><button className="rounded border border-[#2866dc] px-2 py-1 text-[10px] font-bold text-[#2866dc]">Ver</button><button onClick={onAdd} aria-label={`Agregar ${product.name}`} className="rounded bg-[#2866dc] p-1.5 text-white"><ShoppingCart className="size-3" /></button></div></div>
    </div>
  </article>
}

function Footer() { return <footer className="bg-[#0d1425] px-6 py-10 text-slate-300"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-4"><div><div className="mb-3 grid size-9 place-items-center rounded bg-[#1e62df] font-black text-sm text-white">IC</div><p className="text-xs">Tecnología que conecta contigo.</p></div><div><h3 className="mb-3 text-xs font-bold text-white">ENLACES</h3><p className="space-y-2 text-xs leading-6">Inicio<br/>Productos<br/>Servicios<br/>Contacto</p></div><div><h3 className="mb-3 text-xs font-bold text-white">CATEGORÍAS</h3><p className="space-y-2 text-xs leading-6">Celulares<br/>Computadores<br/>Audífonos<br/>Tablets<br/>Accesorios</p></div><div><h3 className="mb-3 text-xs font-bold text-white">INFORMACIÓN</h3><p className="space-y-2 text-xs leading-6">Preguntas frecuentes<br/>Política de envíos<br/>Garantías<br/>Términos y condiciones</p><div className="mt-3 flex gap-2"><span className="grid size-7 place-items-center rounded-full bg-white/10"><MessageCircle className="size-3" /></span><span className="grid size-7 place-items-center rounded-full bg-white/10"><Send className="size-3" /></span></div></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-right text-[10px] text-slate-500">© 2026 Intercell</div></footer> }

export default function Page() {
  const [active, setActive] = useState('Inicio')
  const [cartCount, setCartCount] = useState(0)
  const [category, setCategory] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleProducts = useMemo(() => category === 'Todos' ? products : products.filter(p => p.category === category), [category])
  const add = () => setCartCount(count => count + 1)
  const isServices = active === 'Servicios'
  const isContact = active === 'Nosotros'
  return <div className="min-h-screen bg-[#f3f5f8] text-[#111827]"><Header active={active} setActive={setActive} cartCount={cartCount} />
    {active === 'Inicio' && <><section className="relative overflow-hidden bg-[#101a2d] text-white"><div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${images.hero})` }} /><div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:px-8"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#3c82ff]">INTERCELL</p><h1 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">QUE CONECTA <span className="block text-white">CONTIGO</span></h1><p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">Dispositivos electrónicos, accesorios y mantenimiento profesional para tus equipos.</p><button onClick={() => setActive('Productos')} className="mt-6 inline-flex items-center gap-2 rounded bg-[#2866dc] px-5 py-3 text-xs font-bold text-white hover:bg-blue-500">VER PRODUCTOS <ArrowRight className="size-4" /></button></div><div className="grid grid-cols-2 gap-3"><img src={images.catalog} alt="Productos tecnológicos" className="h-32 w-full rounded-lg object-cover" /><img src={images.accessories} alt="Accesorios tecnológicos" className="h-32 w-full rounded-lg object-cover" /><img src={images.hero} alt="Audífonos y laptop" className="h-32 w-full rounded-lg object-cover" /><img src={images.services} alt="Servicio técnico" className="h-32 w-full rounded-lg object-cover" /></div></div></section><TrustBar /><main className="mx-auto max-w-7xl px-6 py-10 lg:px-8"><SectionTitle title="CATEGORÍAS" action="Ver todas" /><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map(({ label, icon: Icon }) => <button key={label} onClick={() => label === 'Servicios' ? setActive('Servicios') : (setActive('Productos'), setCategory(label))} className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-5 text-xs font-semibold shadow-sm transition hover:border-[#2866dc] hover:text-[#2866dc]"><span className="grid size-10 place-items-center rounded-full bg-blue-50 text-[#2866dc]"><Icon className="size-5" /></span>{label}</button>)}</div><SectionTitle title="PRODUCTOS DESTACADOS" action="Ver todos" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map(product => <ProductCard key={product.name} product={product} onAdd={add} />)}</div></main></>}
    {active === 'Productos' || active === 'Accesorios' || active === 'Ofertas' ? <Catalog category={category} setCategory={setCategory} products={visibleProducts} add={add} active={active} /> : null}
    {isServices && <Services setActive={setActive} />}
    {isContact && <Contact />}
    <Footer />
  </div>
}

function TrustBar() { return <div className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-4 px-6 py-4 sm:grid-cols-4 lg:px-8">{[[PackageCheck, 'Envíos Rápidos', 'A todo el país'], [ShieldCheck, 'Garantía', 'Productos garantizados'], [Headphones, 'Soporte Técnico', 'Asesoría especializada'], [BadgeCheck, 'Pagos Seguros', 'Compra 100% segura']].map(([Icon, title, text]) => <div key={title as string} className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-blue-50 text-[#2866dc]"><Icon className="size-4" /></span><div><strong className="block text-[11px]">{title as string}</strong><span className="text-[10px] text-slate-500">{text as string}</span></div></div>)}</div></div> }
function SectionTitle({ title, action }: { title: string; action: string }) { return <div className="mb-4 mt-1 flex items-center justify-between"><h2 className="text-sm font-black tracking-wide">{title}</h2><button className="flex items-center gap-1 text-xs font-semibold text-[#2866dc]">{action} <ArrowRight className="size-3" /></button></div> }
function Catalog({ category, setCategory, products: items, add, active }: { category: string; setCategory: (v: string) => void; products: typeof products; add: () => void; active: string }) { return <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[190px_1fr] lg:px-8"><aside><div className="flex items-center justify-between lg:block"><h2 className="text-sm font-black">CATEGORÍAS</h2><button className="lg:hidden" aria-label="Abrir filtros"><Menu className="size-5" /></button></div><div className="mt-3 hidden space-y-1 lg:block">{['Todos', 'Celulares', 'Computadores', 'Audífonos', 'Tablets', 'Accesorios', 'Ofertas'].map(item => <button onClick={() => setCategory(item === 'Ofertas' ? 'Accesorios' : item)} key={item} className={`block w-full rounded px-3 py-2 text-left text-xs ${category === item ? 'bg-[#2866dc] font-bold text-white' : 'hover:bg-blue-50'}`}>{item}</button>)}</div><div className="mt-8 hidden lg:block"><h3 className="text-xs font-black">FILTRAR POR PRECIO</h3><div className="mt-4 h-1 rounded bg-[#2866dc]" /><div className="mt-4 grid grid-cols-2 text-[10px] text-slate-500"><span>$0</span><span className="text-right">$4.000.000</span></div><button className="mt-4 w-full rounded bg-[#2866dc] py-2 text-[10px] font-bold text-white">FILTRAR</button></div></aside><section><div className="mb-5 flex items-center justify-between"><h1 className="text-lg font-black">{active === 'Ofertas' ? 'OFERTAS' : 'TODOS LOS PRODUCTOS'} <span className="text-xs font-normal text-slate-500">({items.length})</span></h1><button className="flex items-center gap-8 rounded border border-slate-200 bg-white px-3 py-2 text-xs">Más recientes <ChevronDown className="size-3" /></button></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{items.map(product => <ProductCard key={product.name} product={product} onAdd={add} />)}</div></section></main> }
function Services({ setActive }: { setActive: (v: string) => void }) { return <main><section className="relative overflow-hidden bg-[#101a2d] px-6 py-16 text-white"><div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${images.services})` }} /><div className="relative mx-auto max-w-7xl"><p className="text-3xl font-black">SERVICIO TÉCNICO <span className="block text-[#3c82ff]">ESPECIALIZADO</span></p><p className="mt-3 max-w-sm text-sm text-slate-300">Diagnóstico, reparación y mantenimiento para tus dispositivos electrónicos con garantía incluida.</p></div></section><section className="mx-auto max-w-7xl px-6 py-10 lg:px-8"><h2 className="mb-5 text-lg font-black">NUESTROS SERVICIOS</h2><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, price, detail]) => <div key={title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50 text-[#2866dc]"><Wrench className="size-4" /></span><div><h3 className="text-sm font-bold">{title}</h3><strong className="text-xs text-[#2866dc]">{price}</strong><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></div></div>)}</div><div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#101a2d] p-6 text-white sm:flex-row sm:items-center"><div><h3 className="font-bold">¿No sabes qué servicio necesitas?</h3><p className="mt-1 text-xs text-slate-300">Contáctanos y te asesoramos sin compromiso.</p></div><button onClick={() => setActive('Nosotros')} className="rounded bg-[#2866dc] px-6 py-3 text-xs font-bold">CONTACTAR</button></div></section></main> }
function Contact() { return <main className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8"><div><h1 className="text-lg font-black">CONTÁCTANOS</h1><p className="mt-5 text-sm text-slate-500">Estamos para ayudarte. Escríbenos o visítanos.</p><div className="mt-8 space-y-5 text-sm"><p><strong className="block text-xs">Dirección</strong><span className="text-slate-500">Calle 45 # 23-10, Medellín, Colombia</span></p><p><strong className="block text-xs">Teléfono</strong><span className="text-slate-500">+57 300 123 4567</span></p><p><strong className="block text-xs">Correo</strong><span className="text-slate-500">info@intercell.com.co</span></p><p><strong className="block text-xs">Horario</strong><span className="text-slate-500">Lunes a Sábado, 8:00 a.m. - 7:00 p.m.</span></p></div></div><form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={event => event.preventDefault()}><label className="mb-4 block text-xs font-bold">Nombre completo<input className="mt-2 w-full rounded border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#2866dc]" placeholder="Tu nombre" required /></label><label className="mb-4 block text-xs font-bold">Correo electrónico<input type="email" className="mt-2 w-full rounded border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#2866dc]" placeholder="correo@ejemplo.com" required /></label><label className="mb-4 block text-xs font-bold">Teléfono<input className="mt-2 w-full rounded border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#2866dc]" placeholder="+57 300 000 0000" /></label><label className="mb-4 block text-xs font-bold">Mensaje<textarea className="mt-2 min-h-28 w-full resize-none rounded border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-[#2866dc]" placeholder="¿En qué te podemos ayudar?" required /></label><button className="w-full rounded bg-[#2866dc] py-3 text-xs font-bold text-white">ENVIAR MENSAJE</button></form></main> }
