import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const LINE_URL = 'https://line.me/R/ti/p/@soi888'
const LOGO = 'https://aroysoi8.com/wp-content/uploads/2024/12/11.png'

export default function Footer() {
  const { lang } = useLang()
  const ft = T.footer
  const productItems = ft.productItems[lang]
  const branchItems = ft.branchItems[lang]

  return (
    <footer className="bg-cream border-t border-gold/20">
      {/* Wordmark row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10 border-b border-gold/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <img src={LOGO} alt="อร่อยซอย 8" className="h-16 w-auto object-contain mb-3" />
            <p className="font-serif italic text-2xl text-ink/60 tracking-wide">
              {ft.tagline[lang]}
            </p>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white font-thai font-medium px-6 py-3 rounded-full hover:bg-[#05b34c] transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            {ft.orderLine[lang]}
          </a>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{ft.aboutLabel[lang]}</h4>
          <p className="font-body text-sm text-ink/70 leading-relaxed whitespace-pre-line">
            {ft.address[lang]}
          </p>
          <p className="font-body text-sm text-ink/70 mt-3">{ft.hours[lang]}</p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{ft.productsLabel[lang]}</h4>
          <ul className="space-y-2">
            {productItems.map((label) => (
              <li key={label}>
                <Link to="/products" className="font-body text-sm text-ink/70 hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h4 className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{ft.branchesLabel[lang]}</h4>
          <ul className="space-y-2">
            {branchItems.map((b) => (
              <li key={b}>
                <Link to="/branches" className="font-body text-sm text-ink/70 hover:text-gold transition-colors">
                  {b}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{ft.contactLabel[lang]}</h4>
          <ul className="space-y-2 font-body text-sm text-ink/70">
            <li><a href="tel:0815649899" className="hover:text-gold transition-colors">081-564-9899</a></li>
            <li><a href="tel:0619399396" className="hover:text-gold transition-colors">061-939-9396</a></li>
            <li><a href="tel:0996535989" className="hover:text-gold transition-colors">099-653-5989</a></li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/Aroisoieight" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink/50 hover:text-gold transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" aria-label="LINE" className="text-ink/50 hover:text-[#06C755] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20 max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-ink/40">{ft.rights[lang]}</p>
        <p className="font-serif italic text-xs text-gold/60">EST. 1985 · ANG THONG</p>
      </div>
    </footer>
  )
}
