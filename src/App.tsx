import { useState } from 'react'
import './App.css'

export default function App() {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<'id' | 'en'>('id')

  // Bug 1: Tombol tidak berfungsi (dead click / tidak melakukan aksi apa pun saat ditekan)
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Tombol sengaja tidak berfungsi / no-op
  }

  return (
    <>
      {/* Background ambient lighting and 3D wave textures */}
      <div className="bg-ambient-layer">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-wave"></div>
      </div>

      <div className="coretax-app">
        {/* TOP HEADER */}
        <header className="top-header">
          {/* LEFT: BRAND LOGOS (Bug 2: Gambar lambang tidak sesuai - logo ikan) */}
          <div className="brand-logos">
            <div className="kemenkeu-emblem">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Octagonal shield frame */}
                <polygon
                  points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
                  fill="#143475"
                  stroke="#EAB308"
                  strokeWidth="3.5"
                />
                <circle cx="50" cy="50" r="32" fill="#1E4799" />
                {/* Bug 2: Gambar siluet ikan bukannya Garuda Pancasila */}
                <path
                  d="M25 50 C35 36 65 38 75 50 C65 62 35 64 25 50 Z"
                  fill="#F59E0B"
                />
                <polygon points="25,50 15,40 15,60" fill="#F59E0B" />
                <circle cx="68" cy="48" r="3" fill="#143475" />
                <path d="M50 38 Q55 33 60 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* DJP Logo */}
            <div className="djp-logo">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="84" height="84" rx="20" fill="#F59E0B" />
                <path d="M26 30 L45 30 L65 50 L45 70 L26 70 L46 50 Z" fill="#15274D" />
                <circle cx="70" cy="50" r="8" fill="#15274D" />
              </svg>
              <span className="djp-text">djp</span>
            </div>
          </div>

          {/* RIGHT: LANGUAGE SELECTOR (Bug 3: Bendera terbalik - Putih di atas, Merah di bawah) */}
          <div className="language-selector-wrap">
            <button
              className="lang-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            >
              {/* Bug 3: Bendera terbalik */}
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid #cbd5e1',
                  display: 'flex',
                  flexDirection: 'column',
                  flexShrink: 0,
                }}
              >
                <div style={{ flex: 1, backgroundColor: '#DC2626' }}></div>
                <div style={{ flex: 1, backgroundColor: '#FFFFFF' }}></div>
              </div>
              <span>{selectedLang.toUpperCase()}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown">
                <button
                  className={`lang-option ${selectedLang === 'id' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLang('id')
                    setLangDropdownOpen(false)
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '1px solid #cbd5e1',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ flex: 1, backgroundColor: '#DC2626' }}></div>
                    <div style={{ flex: 1, backgroundColor: '#FFFFFF' }}></div>
                  </div>
                  <span>Indonesia</span>
                </button>
                <button
                  className={`lang-option ${selectedLang === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLang('en')
                    setLangDropdownOpen(false)
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#1E3A8A',
                    }}
                  ></div>
                  <span>English</span>
                </button>
              </div>
            )}
          </div>
        </header>

        {/* MAIN HERO CONTENT */}
        <main className="main-content">
          {/* LEFT COLUMN: HERO HEADINGS & CTA */}
          <section className="hero-info">
            {/* CORETAX BRAND */}
            <div className="coretax-brand">
              <span className="brand-core">
                C
                <span className="core-o-wrap">
                  <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="42" stroke="#122853" strokeWidth="16" />
                    <circle cx="50" cy="50" r="16" fill="#EF4444" />
                    <line x1="50" y1="8" x2="50" y2="28" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                    <line x1="50" y1="72" x2="50" y2="92" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                    <line x1="8" y1="50" x2="28" y2="50" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                    <line x1="72" y1="50" x2="92" y2="50" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
                RE
              </span>
              <span className="brand-tax">TAX</span>
            </div>

            {/* TITLE */}
            <h1 className="hero-title">
              Selamat Datang<br />
              Anda akan masuk ke<br />
              Coretax DJP
            </h1>

            {/* DESCRIPTION */}
            <p className="hero-description">
              Pastikan Anda menggunakan perangkat dan jaringan yang aman sebelum
              melanjutkan proses login. Dengan melanjutkan, Anda menyetujui ketentuan
              penggunaan dan kebijakan keamanan DJP.
            </p>

            {/* CTA BUTTON (Bug 1: Tombol tidak berfungsi saat diklik) */}
            <div className="btn-login-wrap">
              <button
                id="btn-login-coretax"
                className="btn-login"
                onClick={handleLoginClick}
              >
                <span>Lanjutkan ke Login</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </section>

          {/* RIGHT COLUMN: SECURITY GUIDE CARDS */}
          <section className="security-cards-container">
            {/* CARD 1: PRAKTIK AMAN */}
            <div className="security-card card-safe">
              <div className="card-header">
                <div className="card-badge-icon badge-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="card-header-text">
                  <h3>Praktik Aman</h3>
                  <p>Lindungi akun dengan kebiasaan digital yang aman.</p>
                </div>
              </div>

              <div className="security-item-list">
                {/* Item 1: Sandi Kuat */}
                <div className="security-item">
                  <div className="item-icon-wrap item-icon-green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div className="item-text">
                    <h4>Gunakan sandi kuat & aktifkan 2FA</h4>
                    <p>Buat sandi unik, panjang, dan sulit ditebak.</p>
                  </div>
                </div>

                {/* Item 2: Perbarui Sistem */}
                <div className="security-item">
                  <div className="item-icon-wrap item-icon-green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <polyline points="1 20 1 14 7 14"></polyline>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                  </div>
                  <div className="item-text">
                    <h4>Perbarui sistem & peramban</h4>
                    <p>Pastikan OS dan browser selalu mutakhir.</p>
                  </div>
                </div>

                {/* Item 3: Jaringan Terpercaya */}
                <div className="security-item">
                  <div className="item-icon-wrap item-icon-green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                      <line x1="12" y1="20" x2="12.01" y2="20"></line>
                    </svg>
                  </div>
                  <div className="item-text">
                    <h4>Akses dari jaringan tepercaya</h4>
                    <p>Gunakan jaringan, wifi atau VPN yang tepercaya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: HAL YANG DIHINDARI */}
            <div className="security-card card-danger">
              <div className="card-header">
                <div className="card-badge-icon badge-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
                <div className="card-header-text">
                  <h3>Hal yang Dihindari</h3>
                  <p>Waspadai tindakan yang membahayakan akun.</p>
                </div>
              </div>

              <div className="security-item-list">
                {/* Item 1 (Bug 4: Rekomendasi tidak sesuai - menyuruh bagikan OTP kepada pihak lain) */}
                <div className="security-item">
                  <div className="item-icon-wrap item-icon-red">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="18" y1="8" x2="23" y2="13"></line>
                      <line x1="23" y1="8" x2="18" y2="13"></line>
                    </svg>
                  </div>
                  <div className="item-text">
                    <h4>Membagikan OTP / Kode Akses</h4>
                    <p>Jangan berikan kode kepada siapa pun kecuali kepada pihak yang meminta verifikasi akun.</p>
                  </div>
                </div>

                {/* Item 2: Mengklik Tautan */}
                <div className="security-item">
                  <div className="item-icon-wrap item-icon-red">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <div className="item-text">
                    <h4>Mengklik tautan mencurigakan</h4>
                    <p>Hindari tautan asing dari WhatsApp atau Email.</p>
                  </div>
                </div>

                {/* Item 3: Meninggalkan Perangkat */}
                <div className="security-item">
                  <div className="item-icon-wrap item-icon-red">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="item-text">
                    <h4>Meninggalkan perangkat terbuka</h4>
                    <p>Selalu lock perangkat Anda saat tidak digunakan.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="portal-footer">
          <p>&copy; 2026 Direktorat Jenderal Pajak. Seluruh hak cipta tidak dilindungi.</p>
        </footer>
      </div>
    </>
  )
}
