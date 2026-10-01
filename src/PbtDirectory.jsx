import { useState } from 'react'
import { ArrowLeft, ArrowRight, Building2, Search } from 'lucide-react'
import './App.css'
import './PbtDirectory.css'
import { PBT_LIST } from './pbtData.js'
import PbtLogo from './PbtLogo.jsx'

const appBase = import.meta.env.BASE_URL

function PbtSkyline() {
  return (
    <div className="skyline card-skyline" aria-hidden="true">
      <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
      <span className="skyline-tower" />
      <span className="skyline-water" />
    </div>
  )
}

function PbtDirectory() {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase('ms')
  const visiblePbt = PBT_LIST.filter(({ type, name }) => `${type} ${name}`.toLocaleLowerCase('ms').includes(normalizedQuery))

  return (
    <main className="directory-page">
      <header className="directory-header">
        <a className="brand" href={appBase} aria-label="myPATIL Biz, halaman utama">
          <span className="brand-name">myPATIL <b>Biz</b></span>
          <span className="brand-caption">BUSINESS · PBT · MALAYSIA</span>
        </a>
        <a className="directory-home" href={appBase}><ArrowLeft size={16} /> Kembali ke Utama</a>
        <div className="directory-account-actions">
          <a className="button button-outline" href="https://bizpay.mypatil.my/login" target="_blank" rel="noopener noreferrer">Log Masuk</a>
          <a className="button button-primary" href="https://bizpay.mypatil.my/register" target="_blank" rel="noopener noreferrer">Daftar Akaun</a>
        </div>
      </header>

      <section className="directory-hero">
        <div className="directory-hero-inner">
          <p className="directory-eyebrow"><Building2 size={15} /> Direktori perkhidmatan PBT</p>
          <h1>Senarai PBT</h1>
          <p>Pilih pihak berkuasa tempatan daripada senarai perkhidmatan myPATIL Biz.</p>
          <div className="directory-total"><strong>{PBT_LIST.length}</strong><span>PBT dalam direktori</span></div>
        </div>
      </section>

      <section className="directory-content" aria-labelledby="directory-list-title">
        <div className="directory-toolbar">
          <div className="directory-title">
            <h2 id="directory-list-title">Semua PBT</h2>
            <p>{visiblePbt.length} daripada {PBT_LIST.length} PBT dipaparkan</p>
          </div>
          <div className="directory-filters">
            <label className="directory-search">
              <Search size={17} aria-hidden="true" />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama PBT" aria-label="Cari nama PBT" />
            </label>
          </div>
        </div>

        <div className="directory-pbt-grid">
          {visiblePbt.map(({ type, name, scene, logo, background }) => (
            <article className={`directory-pbt-card ${scene}`} key={`${type}-${name}`} style={{ '--background-image': `url(${background})` }}>
              <PbtSkyline />
              <span className="card-badge"><Building2 size={16} /><PbtLogo src={logo} alt={`Logo ${type} ${name}`} /></span>
              <span className="card-content"><b>{type}</b><strong>{name}</strong></span>
              <span className="card-arrow"><ArrowRight size={17} /></span>
              <span className="image-note">Imej placeholder</span>
            </article>
          ))}
          {visiblePbt.length === 0 && (
            <p className="directory-empty">Tiada PBT yang sepadan dengan carian ini.</p>
          )}
        </div>
      </section>

      <footer className="directory-footer">
        <a className="brand footer-brand" href={appBase}><span className="brand-name">myPATIL <b>Biz</b></span><span className="brand-caption">BUSINESS · PBT · MALAYSIA</span></a>
        <span>Direktori PBT untuk usahawan Malaysia</span>
        <a href={appBase}>Kembali ke portal <ArrowRight size={14} /></a>
      </footer>
    </main>
  )
}

export default PbtDirectory