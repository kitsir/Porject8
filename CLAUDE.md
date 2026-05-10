# อร่อยซอย 8 (Aroysoi 8) — Project Brain

> ไฟล์นี้คือ shared memory ระหว่าง Claude Code CLI และทุก session
> อัพเดทไฟล์นี้ทุกครั้งที่มีการเปลี่ยนแปลงสำคัญ

---

## Work Session Protocol — วิธีทำงานข้ามเซสชัน

> **กฎเหล็ก:** ทุกครั้งที่ทำงานเสร็จ หรือก่อนปิด claude — ต้องอัพเดทส่วน "Last Session" และ "Next Steps" ด้านล่างนี้ก่อน

### สาเหตุที่ต้องทำ
Claude มี context window จำกัด — เมื่อเปิด session ใหม่ ประวัติการสนทนาเก่าจะหายไปหมด
ถ้าไม่บันทึกสถานะไว้ใน CLAUDE.md Claude จะไม่รู้ว่าทำอะไรไปถึงไหน ต้องอธิบายซ้ำทุกครั้ง

### วิธีเริ่ม session ใหม่
1. เปิด terminal แล้วพิมพ์ `aroy` (alias ที่สร้างไว้แล้ว — cd + claude ในคำสั่งเดียว)
2. Claude จะอ่าน CLAUDE.md อัตโนมัติ — ดูส่วน "Last Session" เพื่อรู้สถานะล่าสุด
3. บอก Claude ว่า "ทำต่อจากที่ค้างไว้" หรือบอกว่าอยากทำอะไรใหม่

### วิธีจบ session
ก่อนปิด claude ขอให้ Claude อัพเดท CLAUDE.md ด้วยคำสั่ง:
> "อัพเดท CLAUDE.md — บันทึกว่าทำอะไรไปวันนี้ และ next steps"

---

## Last Session — สถานะล่าสุด

**วันที่:** 2026-05-10 (รอบ 2)
**ทำอะไรไปบ้าง:**
- [x] **7-Eleven Restructure** — รวมทุกอย่างที่ขายใน 7-11 เข้าหมวด `at-7eleven` (rename จาก `pia-mini-7eleven`):
  - เปี๊ยะมินินมสด (3 รส: ฟักล้วน, ถั่วฟัก, งาดำ)
  - ชิฟฟอนคละรส (4 รส: กาแฟ, ใบเตย, โยเกิร์ต, ส้ม)
  - ชิฟฟอนมะพร้าว (ใหม่)
- [x] **ไข่ → ไข่เค็ม** ทั่วทั้ง products.js (ขนมเปี๊ยะใหญ่ ไข่เค็มทะลัก, ไข่เค็มบึ้ม, ถั่วล้วนไข่เค็ม, หยอดไข่เค็ม, ลาวาไข่เค็ม, ไข่เค็มขยี้ etc.) + tabLabels + footer.productItems
- [x] **ลบราคา** ออกจาก products.js + translations.js (ไม่มี 15 บาท / 10 บาท แล้ว)
- [x] **Home Hero** — เปลี่ยนจากภาพเดียว → Ken Burns slideshow 3 ภาพ + logo อร่อยซอย 8 ตรงกลาง (แทนข้อความ "ขนมเปี๊ยะนำโชค")
- [x] **Home 7-Eleven Section** — เปลี่ยนจาก flavor text → 3 product cards พร้อมโลโก้เซเว่นจริง (Wikimedia SVG) ทั้งบน badge และ header
- [x] **เพิ่ม heroImage** ที่หายไป — สายมู (CDN 2025/08/94757252...), แต้จิ๋ว (CDN 2025/08/be9f736b...)
- [x] Build ผ่าน clean (736ms, 473KB JS)

**Next Steps (ทำต่อได้เลย):**
- [ ] ภาพสินค้าจริง — โดยเฉพาะ ชิฟฟอนคละรส (ใช้ภาพ 779033.jpg ชั่วคราว) และ ชิฟฟอนมะพร้าว — ต้องหาภาพจริงจาก TikTok/IG
- [ ] วิดิโอ Hero — ตอนนี้ใช้ Ken Burns slideshow (3 ภาพ crossfade) เพราะหา URL วิดิโอจริงจาก aroysoi8.com ไม่ได้ ถ้ามีไฟล์ video MP4 ให้อัพโหลดเอง แล้วเปลี่ยน hero เป็น `<video>`
- [ ] SEO — เพิ่ม `<title>`, `<meta description>`, `og:image` ใน `index.html`
- [ ] Deploy — push ขึ้น Vercel หรือ Netlify
- [ ] เพิ่มภาพ ไทเฮา จริง — ตอนนี้ใช้ placeholder PNG จาก /2025/11/

---

## แบรนด์ / Brand

| | |
|---|---|
| ชื่อ | อร่อยซอย 8 (Aroi Soi 8) |
| บริษัท | บริษัท อร่อยซอย 8 จำกัด |
| ก่อตั้ง | พ.ศ. 2528 (1985) |
| สินค้าหลัก | ขนมเปี๊ยะ (Khanom Pia) |
| ที่ตั้งหลัก | 99 หมู่ 2 ต.ไชยภูมิ อ.ไชโย จ.อ่างทอง 14140 |
| เวลาเปิด | ทุกวัน 07:00–19:30 น. |

### ช่องทางติดต่อ
| | |
|---|---|
| โทร สาขาอ่างทอง | 081-564-9899 |
| โทร สายใต้ใหม่ / วังน้อย | 061-939-9396 |
| โทร สิงห์บุรี / โรจนะ / นครปฐม | 099-653-5989 |
| LINE OA | @soi888 → https://line.me/R/ti/p/@soi888 |
| Facebook | https://www.facebook.com/Aroisoieight |
| TikTok | @aroysoi8 |

### Assets
- Logo: `https://aroysoi8.com/wp-content/uploads/2024/12/11.png`
- ภาพสินค้า ไข่ทะลัก: `https://aroysoi8.com/wp-content/uploads/2025/07/782830_0.jpg`
- ภาพสินค้า ไข่บึ้ม: `https://aroysoi8.com/wp-content/uploads/2025/07/784282_0.jpg`
- ภาพสินค้า เค้ก: `https://aroysoi8.com/wp-content/uploads/2025/07/779033.jpg`
- ภาพสาขา อ่างทอง: `https://aroysoi8.com/wp-content/uploads/2025/07/S__6586378_0-1024x498.jpg`
- ภาพสาขา วังน้อย: `https://aroysoi8.com/wp-content/uploads/2025/07/S__6586377_0-1024x768.jpg`
- ภาพสาขา นครปฐม: `https://aroysoi8.com/wp-content/uploads/2025/07/S__6586374_0-1024x576.jpg`

---

## Tech Stack

| | |
|---|---|
| Framework | Vite + React 18 |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| ภาษา | Bilingual TH/EN (LanguageContext) |
| Data | Hardcoded (ไม่มี backend) |
| Dev server | `npm run dev` → http://localhost:5173 |
| Build | `npm run build` |

---

## Design System

### Colors (`tailwind.config.js`)
```
cream:    #F8F1E4   ← background sections, cards
ivory:    #FBFAF6   ← main background
gold:     #C8860A   ← accent, labels, borders
burgundy: #6B2018   ← pull quote bg, strong CTA
ink:      #1A1410   ← dark CTA bg, primary text
```

### Fonts
```
font-serif → "Cormorant Garamond"  ← headings ทุกตัว
font-thai  → Inter, "Bai Jamjuree" ← labels, nav, Thai UI text
font-body  → Inter, Sarabun        ← body text
```

### Design Philosophy
- **Quiet luxury** — ไม่ใช่ร้านขนมสนุกสีสด แต่เป็น premium editorial bakery
- Generous whitespace, photo-driven
- ไม่ใช้ emoji ในโค้ด
- Gold underline/border เป็น accent หลัก
- Framer Motion animations respect `prefers-reduced-motion`

---

## โครงสร้างไฟล์

```
src/
  context/
    LanguageContext.jsx     ← TH/EN toggle (useLang hook)
  data/
    products.js             ← categories array (6 หมวด)
    branches.js             ← 6 สาขา พร้อม nameEn, addressEn
    translations.js         ← T object — ข้อความ TH/EN ทุกหน้า
  components/
    Navbar.jsx              ← transparent→ivory scroll, TH/EN toggle, mobile drawer
    Footer.jsx              ← 4-col, bilingual
    LineFloatButton.jsx     ← fixed green circle, pulse
    HeroBanner.jsx          ← reusable (height, overlay, label, title, titleEn)
    ProductCard.jsx         ← link → /products/:catId/:itemId
    BranchCard.jsx          ← bilingual name/address, hours, map button
    CategorySection.jsx     ← bilingual category header + subgroup grids
    Timeline.jsx            ← alternating timeline, bilingual
  pages/
    Home.jsx                ← 8 sections, bilingual
    Story.jsx               ← editorial, drop-cap, timeline, pull quote, bilingual
    Products.jsx            ← sticky tab bar + IntersectionObserver, bilingual
    ProductDetail.jsx       ← sticky image, badges, related items
    Branches.jsx            ← 6 cards
    Wholesale.jsx           ← benefits + form → LINE OA
    Contact.jsx             ← phones, socials, form
  App.jsx                   ← BrowserRouter + LanguageProvider + AnimatePresence
  main.jsx
  index.css                 ← Tailwind directives
```

---

## ระบบภาษา (Bilingual)

### วิธีใช้ใน component ใหม่
```jsx
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const { lang } = useLang()          // lang = 'th' | 'en'
const { lang, toggleLang } = useLang()  // toggleLang() สลับภาษา
```

### วิธีเพิ่มข้อความใหม่ใน `translations.js`
```js
// เพิ่มใน T object ภายใต้ section ที่เกี่ยวข้อง
myKey: { th: 'ข้อความภาษาไทย', en: 'English text' }

// ใช้ใน JSX
{T.section.myKey[lang]}
```

### Toggle UI
- Navbar desktop: ปุ่ม `TH · EN` ขวาสุด
- Navbar mobile: อยู่ใน drawer header

---

## หมวดสินค้า (Categories) — `src/data/products.js`

### 1. ขนมเปี๊ยะใหญ่ ไข่ทะลัก (`pia-yai-talak`) ✅ มีรูป, ฮาลาล
**ไส้ถั่ว · เผือก · ฟัก:**
- ถั่วล้วนไข่ (`tlk-tualuan-kai`)
- ถั่วฟักไข่ (`tlk-tuafak-kai`)
- ถั่วฝอยทองไข่ (`tlk-tuafoythong-kai`)
- เผือกฝอยทองไข่ (`tlk-pueakfoythong-kai`)
- ฟักฝอยทองไข่ (`tlk-fakfoythong-kai`)
- ฟักล้วนไข่ (`tlk-fakluan-kai`)
- เผือกฟัก (`tlk-pueakfak`)

**ไส้ฝอย:**
- ฝอยทูโทน (`tlk-foytwotone`)
- ฝอยทอง (`tlk-foythong`)
- ฝอยใบเตย (`tlk-foybaitoey`)

**ไส้ทุเรียน พรีเมียม:**
- ทุเรียนฟักฝอยทองไข่ (`tlk-durian-fakfoythong-kai`)
- ทุเรียนฝอยทองหยอดไข่ (`tlk-durian-foythong-yodkai`)
- ทุเรียนฟักฝอยทองหยอดไข่ (`tlk-durian-fakfoythong-yodkai`)
- ทุเรียนลาวาไข่ (`tlk-durian-lava-kai`)

### 2. ขนมเปี๊ยะ ไข่บึ้ม (`pia-kai-bum`) ✅ มีรูป, ฮาลาล
ไข่เค็มเต็มใบ 1 ฟองทุกชิ้น:
- ถั่วล้วนไข่ (`kb-tualuan-kai`)
- ถั่วฟักไข่ (`kb-tuafak-kai`)
- ถั่วฝอยทองไข่ (`kb-tuafoythong-kai`)
- เผือกฟักไข่ (`kb-pueakfak-kai`)
- เผือกฝอยทองไข่ (`kb-pueakfoythong-kai`)
- มันม่วงฟักฝอยทองไข่ (`kb-manmuang-fakfoythong-kai`)

### 3. เปี๊ยะแต้จิ๋ว (`pia-taejew`) ✅ ฮาลาล, ไม่มีรูป
- แต้จิ๋วรวมไส้ (`tj-ruamsai`)
- แต้จิ๋วคู่ (`tj-koo`)

### 4. เปี๊ยะสายมู (`pia-saimu`) ⚠️ ไม่ฮาลาล, ไม่มีรูป
- ลาวาชีสรวมไส้ (`sm-lava-cheese`)

### 5. เค้ก & ของหวาน (`cake`) ✅ มีรูป, ไม่ฮาลาล
- ชิฟฟอน (`ck-chiffon`)
- เค้กมินิสอดไส้ (`ck-mini-sai`)
- เค้กมินิฝอย (`ck-mini-foy`)
- เค้ก 1 ปอนด์ (`ck-1pound`)
- เค้ก 2 ปอนด์ (`ck-2pound`)

### 6. เปี๊ยะมินิ & อื่นๆ (`pia-mini`) ✅ ฮาลาล, ไม่มีรูป
- เปี๊ยะปุ๊ปปั๊ป (`mn-puppap`)
- เปี๊ยะมินิถาด (`mn-mini-thad`)

---

## สาขา (Branches) — `src/data/branches.js`

| ID | ชื่อ | โทร | Map |
|----|------|-----|-----|
| 1 | สาขาใหญ่ อ่างทอง | 081-564-9899 | https://g.co/kgs/QFWbvZy |
| 2 | สาขา สายใต้ใหม่ (BKK) | 061-939-9396 | https://g.co/kgs/8kwT2nK |
| 3 | สาขา วังน้อย (อยุธยา) | 061-939-9396 | https://g.co/kgs/9Az3UYc |
| 4 | สาขา สิงห์บุรี | 099-653-5989 | https://g.co/kgs/vASZ8CD |
| 5 | สาขา โรจนะ อยุธยา | 099-653-5989 | https://g.co/kgs/CPFxgmQ |
| 6 | สาขา นครปฐม | 099-653-5989 | https://g.co/kgs/PmDLXJN |

---

## สิ่งที่ทำแล้ว ✅

- [x] Vite + React + Tailwind + Framer Motion setup
- [x] React Router v6 + AnimatePresence page transitions
- [x] Bilingual system (TH/EN) — LanguageContext + translations.js
- [x] Navbar (transparent→ivory scroll, TH/EN toggle, mobile drawer)
- [x] Footer (4-col bilingual)
- [x] LineFloatButton (pulse animation)
- [x] HeroBanner (reusable)
- [x] ProductCard, BranchCard (bilingual), CategorySection (bilingual), Timeline (bilingual)
- [x] Home page (8 sections, fully bilingual)
- [x] Story page (drop-cap, cinematic, timeline, pull quote burgundy, gallery, fully bilingual)
- [x] Products page (sticky tabs + IntersectionObserver, fully bilingual)
- [x] ProductDetail page (sticky image, badges, related)
- [x] Branches page (fully bilingual)
- [x] Wholesale page (form → LINE OA, fully bilingual)
- [x] Contact page (phones, socials, map link, form, fully bilingual)
- [x] .claude/launch.json (preview_start ใช้ได้)
- [x] branches.js มี nameEn + addressEn ครบทุกสาขา

---

## สิ่งที่ยังไม่ได้ทำ / TODO

- [ ] **ภาพสินค้าจริง** — ปัจจุบันใช้ภาพ packaging มีกราฟิกเยอะ ถ้าได้ภาพถ่ายอาหาร clean background จะดีกว่ามาก
- [ ] **ราคาสินค้า** — ยังไม่มีในข้อมูล ต้องถามเจ้าของร้าน
- [x] **ProductDetail bilingual** — ครบแล้ว (badges, labels, breadcrumb ใช้ T.detail)
- [ ] **SEO** — meta tags, og:image, structured data
- [ ] **Deploy** — ยังรันแค่ localhost (แนะนำ Vercel หรือ Netlify)

---

## Pattern สำคัญ

### เพิ่มหน้าใหม่
```jsx
// 1. สร้าง src/pages/NewPage.jsx
// 2. เพิ่ม Route ใน App.jsx
// 3. เพิ่ม link ใน Navbar links array
// 4. เพิ่ม keys ใน T object ใน translations.js
```

### เพิ่ม translation key
```js
// translations.js — เพิ่ม section ใหม่หรือ key ใหม่
newPage: {
  title: { th: '...', en: '...' },
}
```

### เพิ่มสินค้าหรือไส้ใหม่
```js
// products.js — เพิ่มใน items array ของ subgroup ที่ถูกต้อง
{ id: 'unique-id', name: 'ชื่อภาษาไทย' }
```

### FadeUp animation pattern (ใช้ซ้ำทุกหน้า)
```jsx
function FadeUp({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## Notes สำคัญ

- `font-thai` ใช้ **Inter + Bai Jamjuree** (ไม่ใช่แค่ Bai Jamjuree อย่างเดียว)
- `font-body` ใช้ **Inter + Sarabun**
- ภาพทั้งหมดดึงจาก `aroysoi8.com` — ถ้า CDN เปลี่ยน URL จะเสียหมด ควร host เองในอนาคต
- LINE OA `@soi888` → `https://line.me/R/ti/p/@soi888` — ใช้สำหรับ **ติดต่อทั่วไป เท่านั้น** ไม่ใช่ช่องทางสั่งซื้อ
- Form submit ทุก form → เปิด LINE OA (ไม่มี backend)
- `isVeg()` ใน ProductDetail เช็คจากชื่อสินค้า — ถ้าไม่มี "ไข่" และไม่มี "ทุเรียน" = veg

---

## ⭐ Strategy: เน้นการขายหน้าร้าน (Brick & Mortar Focus)

**ผู้ใช้ตัดสินใจ (2026-05-10):** ไม่เน้นการสั่งซื้อ delivery/online แต่เน้นให้ลูกค้า **ไปซื้อที่สาขา** หรือซื้อที่ **7-Eleven**

### Implications
- ProductDetail page → **ลบปุ่ม "สั่งผ่าน LINE" และเบอร์โทร 3 เบอร์ออก**
- แทนที่ด้วยส่วน **"Where to Buy / ช่องทางการจัดจำหน่าย"**:
  1. ลิงก์ปุ่มใหญ่ → "หาสาขาใกล้คุณ" → `/branches`
  2. ถ้าสินค้ามีในเซเว่น → แสดง badge "Available at 7-Eleven"
  3. LINE = "สอบถามเพิ่มเติม" (ติดต่อทั่วไป) ไม่ใช่ "สั่งซื้อ"
- Products page bottom CTA → เปลี่ยนจาก order เป็น "หาสาขา + ดูในเซเว่น"
- Home/Story CTAs → ปรับให้สอดคล้อง

---

## 🍡 ข้อมูลสินค้าจริง (Verified จากเว็บและ Social — 2026-05)

### A. เปี๊ยะใหญ่ ไข่ทะลัก (Salted Egg Burst)
- **น้ำหนัก:** 600 กรัม/กล่อง (5 ไข่/กล่อง)
- **สูตร:** นมสด, แป้งบางนุ่ม, ไส้ทะลักเต็มคำ
- **ฮาลาล:** ใช่
- **ราคา:** ~170 บาท/กล่อง · โปร 3 กล่อง 510 บาท
- **ภาพ:** `https://aroysoi8.com/wp-content/uploads/2025/07/782830_0.jpg`

### B. เปี๊ยะไข่บึ้ม (Whole Salted Egg)
- **สูตร:** นมสด, ไข่เค็มเต็มใบ 1 ฟอง/ชิ้น, แป้งบางหอม
- **1 ลูก 3 ไส้:** ถั่วฝอยทองไข่, เผือกฝอยทองไข่, ถั่วฟักไข่
- **ฮาลาล:** ใช่
- **ภาพ:** `https://aroysoi8.com/wp-content/uploads/2025/07/784282_0.jpg`

### C. เปี๊ยะมินินมสด (7-Eleven Exclusive) ⭐
- **ราคา:** 15 บาท/ชิ้น · ขาย **ทุกสาขา 7-Eleven**
- **3 รสชาติ:** ฟักล้วน · ถั่วฟัก · งาดำ
- **ฮาลาล:** ใช่

### D. เปี๊ยะมินิถาด
- **ขนาด:** ถาดใหญ่ พอดีคำ ทานง่าย
- **ใช้สำหรับ:** ของฝาก, ขายส่ง

### E. เปี๊ยะแต้จิ๋ว (Teochew-style)
- **ขนาด:** กลาง รสเข้มข้นแบบดั้งเดิม
- **2 แบบ:** แต้จิ๋วรวมไส้ · แต้จิ๋วคู่

### F. ขนมเปี๊ยะไทเฮา (NEW — Specialty) ⭐
- **น้ำหนัก:** 170 กรัม
- **สูตร:** แป้งนิ่ม ไข่ขยี้ (ไม่ใช่ "ลาวาชีส" — แก้ข้อมูลเก่าผิด)
- **เป็นรุ่นใหม่ พรีเมียม**
- **ภาพ:** `https://aroysoi8.com/wp-content/uploads/2025/11/...` (ต้อง verify)

### G. เค้กมินิลาวา สอดไส้ ⭐
- **น้ำหนัก:** 50 กรัม/ชิ้น · 10 ชิ้น/กล่อง
- **สูตร:** นมสด หวานน้อย ไส้เยิ้ม
- **7 รสชาติ:** ใบเตยนมสด · ชาไทยนมสด · โอวัลตินนมสด · นมกล้วยเกาหลี · ซอสสตรอเบอรี่ · ซอสส้มยูสุ · บลูเบอร์รี่
- **ราคาเปิดตัว:** ~10 บาท/ชิ้น
- **อยู่ในหมวดเค้ก** (ไม่ใช่สายมู — แก้ข้อมูลเก่าผิด)

### H. เค้กฝอยทอง 2 ปอนด์
- **น้ำหนัก:** 2 ปอนด์
- **สูตร:** เนื้อนุ่ม ฝอยทองหนาแน่น หวานน้อย อบสดใหม่ทุกวัน

### I. เค้กชิฟฟอน, เค้กมินิ
- ของหวานเสริม

---

## 🚨 ข้อมูลผิด ที่ต้องแก้ไข

| หมวด | ผิด (เก่า) | ถูก (ใหม่) |
|---|---|---|
| `pia-saimu` | "ลาวาชีสรวมไส้" | **เปี๊ยะไทเฮา** (170g, แป้งนิ่ม ไข่ขยี้) |
| `pia-saimu` ชื่อ | "เปี๊ยะสายมู / Lucky Charm Pia" | "เปี๊ยะไทเฮา / Tai Hao Pia" |
| `cake` ชื่อ | "เค้ก & ของหวาน / Cakes & Desserts" | **"เค้ก / Cakes"** ลบ "& ของหวาน" |
| `cake` items | ขาด "เค้กมินิลาวา" | **เพิ่ม:** เค้กมินิลาวา 7 รส (ย้ายมาจาก saimu) |

---

## 📋 TODO Plan (Reorganize for In-store Focus)

### Phase 1 — ข้อมูล
- [ ] แก้ `products.js`: ย้ายลาวาชีสไป cake, เปลี่ยน saimu → ไทเฮา, เปลี่ยนชื่อ cake category
- [ ] เพิ่ม field ใน products: `weight`, `pieces` (ต่อกล่อง), `at7Eleven`, `longDescription`, `ingredients`, `image` per item
- [ ] เพิ่มรูป real CDN URLs จาก shop page

### Phase 2 — UI
- [ ] **ProductDetail.jsx**: ลบ order LINE/phones, เพิ่ม "Where to Buy" section (Branches link + 7-Eleven badge)
- [ ] เพิ่ม "Product Specs" panel (weight, pieces, fillings list, pastry style)
- [ ] **Home.jsx**: เพิ่ม "7-Eleven Showcase" section (3 รสมินิ พร้อมรูป)
- [ ] **Products.jsx**: เปลี่ยน bottom CTA จาก order → "หาสาขาใกล้คุณ"

### Phase 3 — Translations
- [ ] เพิ่ม T.detail.whereToBuy, T.detail.atBranches, T.detail.at7Eleven keys
- [ ] เพิ่ม T.home.sevenSection.* keys (สินค้าในเซเว่น)

### Phase 4 — Polish
- [ ] Update CLAUDE.md ให้ตรงกับ state ใหม่
