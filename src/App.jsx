import { useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  CreditCard,
  FileCheck2,
  Landmark,
  Megaphone,
  Menu,
  MessageCircleMore,
  Search,
  ShieldCheck,
  UsersRound,
  X,
} from 'lucide-react'
import './App.css'
import { PBT_LIST } from './pbtData.js'
import PbtLogo from './PbtLogo.jsx'

const councils = PBT_LIST.map((pbt) => ({
  id: `${pbt.type}-${pbt.name}`,
  code: pbt.type,
  name: pbt.name,
  service: 'Perkhidmatan PBT',
  badge: pbt.name[0],
  logo: pbt.logo,
  scene: pbt.scene,
}))

const services = [
  { title: 'Urus Lesen', icon: FileCheck2, tone: 'blue' },
  { title: 'Pembaharuan Lesen', icon: Building2, tone: 'green' },
  { title: 'Bayaran Dalam Talian', icon: CreditCard, tone: 'blue' },
  { title: 'Notis & Kompaun', icon: FileCheck2, tone: 'amber' },
  { title: 'Aduan & Maklum Balas', icon: MessageCircleMore, tone: 'violet' },
  { title: 'Hebahan PBT', icon: Megaphone, tone: 'red' },
  { title: 'Profil Perniagaan', icon: UsersRound, tone: 'cyan' },
  { title: 'Data & Insights', icon: ChartNoAxesColumnIncreasing, tone: 'green' },
  { title: 'Peluang & Perkhidmatan', icon: Landmark, tone: 'amber' },
]

const stats = [
  { value: '5+', label: 'PBT Aktif', icon: Landmark },
  { value: '100,000+', label: 'Usahawan Berdaftar', icon: UsersRound },
  { value: '200,000+', label: 'Lesen Diurus', icon: FileCheck2 },
  { value: 'Selamat', label: '& Dipercayai', icon: ShieldCheck },
]

function Skyline({ className = '' }) {
  return (
    <div className={`skyline ${className}`} aria-hidden="true">
      <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
      <span className="skyline-tower" />
      <span className="skyline-water" />
    </div>
  )
}

function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCouncil, setSelectedCouncil] = useState(councils[0].id)
  const councilRail = useRef(null)

  const moveCouncils = (direction) => {
    councilRail.current?.scrollBy({ left: direction * 270, behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#utama" aria-label="myPATIL Biz, halaman utama">
          <span className="brand-name">myPATIL <b>Biz</b></span>
          <span className="brand-caption">BUSINESS · PBT · MALAYSIA</span>
        </a>

        <button className="mobile-menu icon-button" type="button" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigasi utama">
          <a className="active" href="#utama" onClick={() => setMenuOpen(false)}>Utama</a>
          <a href="#perkhidmatan" onClick={() => setMenuOpen(false)}>PBT &amp; Perkhidmatan</a>
          <a href="#pbt" onClick={() => setMenuOpen(false)}>Untuk Perniagaan</a>
          <a href="#hebahan" onClick={() => setMenuOpen(false)}>Berita &amp; Hebahan</a>
          <a href="#panduan" onClick={() => setMenuOpen(false)}>Panduan</a>
          <a href="#hubungi" onClick={() => setMenuOpen(false)}>Hubungi</a>
        </nav>

        <div className="header-actions">
          {searchOpen && <input className="search-input" autoFocus aria-label="Cari portal" placeholder="Cari perkhidmatan..." />}
          <button className="icon-button search-button" type="button" aria-label={searchOpen ? 'Tutup carian' : 'Cari'} onClick={() => setSearchOpen(!searchOpen)}>
            {searchOpen ? <X /> : <Search />}
          </button>
          <button className="language-button" type="button">BM <ChevronDown size={14} /></button>
          <a className="button button-outline header-login" href="https://bizpay.mypatil.my/login" target="_blank" rel="noopener noreferrer">Log Masuk</a>
          <a className="button button-primary header-register" href="https://bizpay.mypatil.my/register" target="_blank" rel="noopener noreferrer">Daftar Akaun</a>
        </div>
      </header>

      <section className="hero" id="utama">
        <Skyline className="hero-skyline" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Portal rasmi untuk usahawan</p>
            <h1>Urus Perniagaan Anda<br />{' '}dengan PBT, <span>Dalam Satu Portal.</span></h1>
            <p className="hero-description">myPATIL Biz memudahkan urusan lesen, pembayaran, notis, kompaun dan pelbagai perkhidmatan PBT untuk semua usahawan. Mudah, pantas dan selamat.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://bizpay.mypatil.my/login" target="_blank" rel="noopener noreferrer">Log Masuk <ArrowRight size={17} /></a>
              <a className="button button-outline" href="https://bizpay.mypatil.my/register" target="_blank" rel="noopener noreferrer">Daftar Akaun</a>
            </div>
            <div className="quick-links" aria-label="Pintasan perkhidmatan">
              <a href="#pbt"><Building2 /><span>Akses<br />semua PBT</span></a>
              <a href="#perkhidmatan"><FileCheck2 /><span>Urus lesen &amp;<br />pembaharuan</span></a>
              <a href="#perkhidmatan"><CreditCard /><span>Bayaran<br />dalam talian</span></a>
              <a href="#perkhidmatan"><FileCheck2 /><span>Notis &amp;<br />kompaun</span></a>
              <a href="#hebahan"><MessageCircleMore /><span>Maklumat &amp;<br />hebahan PBT</span></a>
            </div>
          </div>

          <aside className="announcement" id="hebahan" style={{ '--background-image': 'url(/images/pbt-backgrounds/mbip.jpg)' }}>
            <div className="announcement-copy">
              <span className="new-tag">Baharu</span>
              <h2>MBIP kini berada di myPATIL Biz</h2>
              <p>Iskandar Puteri e-Lesen kini boleh diakses melalui myPATIL Biz. Urus lesen anda dengan lebih mudah.</p>
              <a href="#pbt" className="announcement-link">Urus Lesen Sekarang <ArrowRight size={15} /></a>
            </div>
            <div className="council-mark" aria-label="Logo MBIP"><img src="/logos/pbt/mbip.png" alt="Logo MBIP" /></div>
          </aside>

          <div className="hero-controls" aria-label="Kawalan slaid">
            <button className="round-arrow" aria-label="Slaid sebelumnya" type="button"><ArrowLeft size={16} /></button>
            <button className="round-arrow" aria-label="Slaid seterusnya" type="button"><ArrowRight size={16} /></button>
          </div>
          <div className="hero-pagination" aria-label="Slaid 1 daripada 3"><i className="selected" /><i /><i /></div>
        </div>
      </section>

      <section className="content-section council-section" id="pbt">
        <div className="section-heading">
          <div><h2>Pilih PBT / Perkhidmatan Anda</h2><p>Akses terus ke sistem lesen dan perkhidmatan PBT di bawah myPATIL Biz.</p></div>
          <a className="section-link" href="/pbt">Lihat semua PBT <ArrowRight size={15} /></a>
        </div>
        <div className="council-wrap">
          <div className="council-rail" ref={councilRail}>
            {councils.map((council) => (
              <button className={`council-card ${council.scene} ${selectedCouncil === council.id ? 'is-selected' : ''}`} key={council.id} type="button" onClick={() => setSelectedCouncil(council.id)} aria-pressed={selectedCouncil === council.id} style={{ '--background-image': `url(${council.background})` }}>
                <Skyline className="card-skyline" />
                <span className="card-badge">{council.badge}<PbtLogo src={council.logo} alt={`Logo ${council.code} ${council.name}`} /></span>
                {council.status && <span className="new-tag card-tag">{council.status}</span>}
                <span className="card-content"><b>{council.code}</b><strong>{council.name}</strong><span>{council.service}</span></span>
                <span className="card-arrow"><ArrowRight size={17} /></span>
                <span className="image-note">Imej placeholder</span>
              </button>
            ))}
          </div>
          <div className="rail-controls">
            <button className="round-arrow" type="button" aria-label="PBT sebelumnya" onClick={() => moveCouncils(-1)}><ArrowLeft size={16} /></button>
            <button className="round-arrow" type="button" aria-label="PBT seterusnya" onClick={() => moveCouncils(1)}><ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      <section className="content-section services-section" id="perkhidmatan">
        <div className="section-heading compact-heading"><div><h2>Perkhidmatan Untuk Perniagaan</h2></div></div>
        <div className="service-grid">
          {services.map(({ title, icon: Icon, tone }, index) => (
            <a className="service-item" href={index === 5 ? '#hebahan' : '#pbt'} key={title}>
              <span className={`service-icon ${tone}`}><Icon size={23} strokeWidth={2.1} /></span>
              <span>{title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="trust-band" id="panduan">
        <Skyline className="trust-skyline" />
        <div className="trust-inner">
          <div className="trust-intro"><h2>Disokong oleh Pelbagai PBT<br />di Seluruh Malaysia</h2><p>Berjuta usahawan mempercayai myPATIL untuk urusan perniagaan mereka.</p></div>
          <div className="stats-grid">
            {stats.map(({ value, label, icon: Icon }) => <div className="stat-item" key={label}><Icon /><div><strong>{value}</strong><span>{label}</span></div></div>)}
          </div>
          <a className="trust-more" href="https://mypatil.my" target="_blank" rel="noopener noreferrer" aria-label="Layari mypatil.my"><ArrowUpRight size={19} /></a>
        </div>
      </section>

      <footer className="site-footer" id="hubungi">
        <a className="brand footer-brand" href="#utama"><span className="brand-name">myPATIL <b>Biz</b></span><span className="brand-caption">BUSINESS · PBT · MALAYSIA</span></a>
        <span>Portal rasmi perkhidmatan PBT untuk usahawan Malaysia</span>
        <a href="https://biz.mypatil.my/bantuan" target="_blank" rel="noopener noreferrer">Bantuan &amp; Hubungi <ArrowRight size={14} /></a>
      </footer>
    </main>
  )
}

export default App
