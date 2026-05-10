// ─────────────────────────────────────────────────────────────────────────────
//  Aroysoi 8 — Product Data (Verified 2026-05-10)
//  ทุก category มี:
//    name, nameEn, tagEn, description, descriptionEn,
//    longDescription, longDescriptionEn  ← detail สำหรับ ProductDetail page
//    weight, weightEn                    ← น้ำหนัก/ขนาด หลัก
//    pastry, pastryEn                    ← สูตรแป้ง
//    ingredients[], ingredientsEn[]      ← ส่วนผสมหลัก
//    heroImage, halal, at7Eleven
//    subgroups[] → items[]               ← items มี id, name, nameEn (+ ใส่ note ถ้าจำเป็น)
//
//  หมายเหตุ: ทุกที่ที่กล่าวถึง "ไข่" ในไส้ขนมเปี๊ยะ = "ไข่เค็ม" (salted egg yolk)
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  // ───────────────────────── 1. ไข่ทะลัก ─────────────────────────
  {
    id: 'pia-yai-talak',
    name: 'ขนมเปี๊ยะใหญ่ ไข่ทะลัก',
    nameEn: 'Large Khanom Pia — Egg Burst',
    tagEn: 'Signature · Khanom Pia',
    description: 'แป้งบางนุ่ม ไส้ทะลักเต็มคำ ไข่เค็มจัดเต็ม',
    descriptionEn: 'Thin soft pastry, generously filled, bursting with salted egg.',
    longDescription:
      'สูตรเฉพาะของอร่อยซอย 8 ที่สืบทอดมากว่า 40 ปี — แป้งบางนุ่มเหมือนใบบัว เปิดออกแล้วไส้ทะลักเต็มคำ คัดไข่เค็มไข่แดงเข้มถึง 5 ฟองต่อกล่อง รสชาติกลมกล่อม หอมนมสด ทุกชิ้นทำมือพิถีพิถัน อบสดใหม่จากครัวอ่างทอง',
    longDescriptionEn:
      "Aroysoi 8's signature recipe of more than 40 years — pastry as thin and soft as a lotus leaf, packed with filling that bursts at the first bite, with 5 deep-yolk salted eggs in every box. A balanced, fresh-milk aroma in every piece, hand-folded with care and baked fresh daily at our Ang Thong kitchen.",
    weight: '600 กรัม · ไข่เค็ม 5 ฟอง ต่อกล่อง',
    weightEn: '600 g · 5 salted egg yolks per box',
    pastry: 'แป้งบางนุ่ม สูตรนมสด',
    pastryEn: 'Thin, soft pastry · fresh-milk recipe',
    ingredients: ['ถั่วล้วน', 'ฟัก', 'เผือก', 'ฝอยทอง', 'ทุเรียน', 'ไข่เค็ม', 'นมสด'],
    ingredientsEn: ['Mung Bean', 'Winter Melon', 'Taro', 'Golden Thread', 'Durian', 'Salted Egg', 'Fresh Milk'],
    halal: true,
    at7Eleven: true,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/07/782830_0.jpg',
    subgroups: [
      {
        title: 'ไส้ถั่ว · เผือก · ฟัก',
        titleEn: 'Bean · Taro · Winter Melon',
        items: [
          { id: 'tlk-tualuan-kai',       name: 'ถั่วล้วน ไข่เค็ม',         nameEn: 'Pure Bean & Salted Egg' },
          { id: 'tlk-tuafak-kai',        name: 'ถั่วฟัก ไข่เค็ม',          nameEn: 'Bean, Winter Melon & Salted Egg' },
          { id: 'tlk-tuafoythong-kai',   name: 'ถั่วฝอยทอง ไข่เค็ม',       nameEn: 'Bean, Golden Thread & Salted Egg' },
          { id: 'tlk-pueakfoythong-kai', name: 'เผือกฝอยทอง ไข่เค็ม',      nameEn: 'Taro, Golden Thread & Salted Egg' },
          { id: 'tlk-fakfoythong-kai',   name: 'ฟักฝอยทอง ไข่เค็ม',        nameEn: 'Winter Melon, Golden Thread & Salted Egg' },
          { id: 'tlk-fakluan-kai',       name: 'ฟักล้วน ไข่เค็ม',          nameEn: 'Pure Winter Melon & Salted Egg' },
          { id: 'tlk-pueakfak',          name: 'เผือกฟัก',                nameEn: 'Taro & Winter Melon' },
        ],
      },
      {
        title: 'ไส้ฝอย',
        titleEn: 'Golden Thread Filling',
        items: [
          { id: 'tlk-foytwotone', name: 'ฝอยทูโทน',  nameEn: 'Two-Tone Golden Thread' },
          { id: 'tlk-foythong',   name: 'ฝอยทอง',     nameEn: 'Golden Thread' },
          { id: 'tlk-foybaitoey', name: 'ฝอยใบเตย',   nameEn: 'Pandan Golden Thread' },
        ],
      },
      {
        title: 'ไส้ทุเรียน พรีเมียม',
        titleEn: 'Premium Durian',
        items: [
          { id: 'tlk-durian-fakfoythong-kai',    name: 'ทุเรียน ฟักฝอยทอง ไข่เค็ม',       nameEn: 'Durian, Winter Melon, Golden Thread & Salted Egg' },
          { id: 'tlk-durian-foythong-yodkai',    name: 'ทุเรียน ฝอยทอง หยอดไข่เค็ม',      nameEn: 'Durian, Golden Thread & Drizzled Salted Egg' },
          { id: 'tlk-durian-fakfoythong-yodkai', name: 'ทุเรียน ฟักฝอยทอง หยอดไข่เค็ม',   nameEn: 'Durian, Winter Melon, Golden Thread & Drizzled Salted Egg' },
          { id: 'tlk-durian-lava-kai',           name: 'ทุเรียน ลาวาไข่เค็ม',             nameEn: 'Durian Lava Salted Egg' },
        ],
      },
    ],
  },

  // ───────────────────────── 2. ไข่เค็มบึ้ม ─────────────────────────
  {
    id: 'pia-kai-bum',
    name: 'ขนมเปี๊ยะไข่บึ้ม',
    nameEn: 'Khanom Pia — Whole Salted Egg',
    tagEn: 'Classic · Khanom Pia',
    description: 'ไข่เค็มเต็มใบ 1 ฟองทุกชิ้น แป้งบางหอมละมุน',
    descriptionEn: 'A whole salted egg in every piece — thin, fragrant, and delicate pastry.',
    longDescription:
      'ไข่เค็มเต็มใบ 1 ฟอง ที่ซ่อนอยู่ใจกลางขนมเปี๊ยะแต่ละชิ้น แป้งบางสูตรนมสด ผสานความหวานหอมของไส้ถั่ว/เผือก/มันม่วง กับความเค็มมันของไข่แดงอย่างลงตัว 1 กล่องคัดมา 3 ไส้ ให้ลองหลายรสในมื้อเดียว',
    longDescriptionEn:
      'A whole salted egg hidden inside every piece — thin fresh-milk pastry, balancing the gentle sweetness of bean, taro and purple yam fillings with the rich, savoury yolk. Each box mixes 3 fillings so you can taste several flavours in one sitting.',
    weight: 'ไข่เค็ม 1 ฟอง = 1 ลูก · กล่อง 3 ไส้',
    weightEn: '1 salted egg per piece · 3 fillings per box',
    pastry: 'แป้งบาง สูตรนมสด',
    pastryEn: 'Thin, fresh-milk pastry',
    ingredients: ['ถั่วล้วน', 'ฟัก', 'เผือก', 'มันม่วง', 'ฝอยทอง', 'ไข่เค็ม', 'นมสด'],
    ingredientsEn: ['Mung Bean', 'Winter Melon', 'Taro', 'Purple Yam', 'Golden Thread', 'Salted Egg', 'Fresh Milk'],
    halal: true,
    at7Eleven: true,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/07/784282_0.jpg',
    subgroups: [
      {
        title: 'ไส้ทั้งหมด',
        titleEn: 'All Fillings',
        items: [
          { id: 'kb-tualuan-kai',              name: 'ถั่วล้วน ไข่เค็ม',              nameEn: 'Pure Bean & Salted Egg' },
          { id: 'kb-tuafak-kai',               name: 'ถั่วฟัก ไข่เค็ม',               nameEn: 'Bean, Winter Melon & Salted Egg' },
          { id: 'kb-tuafoythong-kai',          name: 'ถั่วฝอยทอง ไข่เค็ม',            nameEn: 'Bean, Golden Thread & Salted Egg' },
          { id: 'kb-pueakfak-kai',             name: 'เผือกฟัก ไข่เค็ม',              nameEn: 'Taro, Winter Melon & Salted Egg' },
          { id: 'kb-pueakfoythong-kai',        name: 'เผือกฝอยทอง ไข่เค็ม',           nameEn: 'Taro, Golden Thread & Salted Egg' },
          { id: 'kb-manmuang-fakfoythong-kai', name: 'มันม่วงฟักฝอยทอง ไข่เค็ม',      nameEn: 'Purple Yam, Winter Melon, Golden Thread & Salted Egg' },
        ],
      },
    ],
  },

  // ───────────────────────────── 3. แต้จิ๋ว ─────────────────────────────
  {
    id: 'pia-taejew',
    name: 'เปี๊ยะแต้จิ๋ว',
    nameEn: 'Teochew-style Pia',
    tagEn: 'Heritage · Teochew',
    description: 'ขนาดรองลงมา รสชาติเข้มข้นแบบดั้งเดิม',
    descriptionEn: 'Medium-sized with a bold, traditional flavour in the classic Teochew style.',
    longDescription:
      'ขนมเปี๊ยะสไตล์จีนแต้จิ๋ว ขนาดกะทัดรัด รสคลาสสิกแบบดั้งเดิม ไม่ใส่ไข่เค็มในไส้ เน้นรสถั่วและฟักแท้ๆ — มีให้เลือก 2 ไส้: ถั่วล้วน และ ถั่วฟัก · "แต้จิ๋วคู่" คือกล่องคู่ที่บรรจุทั้งสองไส้รวมในกล่องเดียว ให้ได้ลองทั้งสองรสในกล่องเดียว',
    longDescriptionEn:
      'Pastry in the traditional Teochew Chinese style — compact size, classic flavours, no salted egg in the filling. Offered in 2 fillings: Pure Bean and Bean & Winter Melon. The "Teochew Duo" box pairs both fillings together so you can enjoy both classics in a single box.',
    weight: 'ขนาดกลาง',
    weightEn: 'Medium size',
    pastry: 'แป้งสไตล์แต้จิ๋ว กรอบนอกนุ่มใน',
    pastryEn: 'Teochew-style pastry — crisp outside, soft inside',
    ingredients: ['ถั่วล้วน', 'ฟัก'],
    ingredientsEn: ['Mung Bean', 'Winter Melon'],
    halal: true,
    at7Eleven: false,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/08/be9f736b-5247-4404-889a-343211c913f4.jpg',
    subgroups: [
      {
        title: 'ไส้เดี่ยว',
        titleEn: 'Single Filling',
        items: [
          { id: 'tj-tualuan', name: 'แต้จิ๋ว ถั่วล้วน',  nameEn: 'Teochew — Pure Bean' },
          { id: 'tj-tuafak',  name: 'แต้จิ๋ว ถั่วฟัก',   nameEn: 'Teochew — Bean & Winter Melon' },
        ],
      },
      {
        title: 'แบบกล่องคู่',
        titleEn: 'Duo Box',
        items: [
          {
            id: 'tj-koo',
            name: 'แต้จิ๋วคู่ ถั่วล้วน + ถั่วฟัก',
            nameEn: 'Teochew Duo — Pure Bean + Bean & Winter Melon',
            note: 'กล่องเดียวมี 2 ลูก — ถั่วล้วน 1 + ถั่วฟัก 1',
            noteEn: 'One box · 2 pieces — Pure Bean × 1, Bean & Winter Melon × 1',
          },
        ],
      },
    ],
  },

  // ───────────────────────── 4. ไทเฮา ─────────────────────────
  {
    id: 'pia-taihao',
    name: 'ขนมเปี๊ยะไทเฮา',
    nameEn: 'Tai Hao Khanom Pia',
    tagEn: 'New · Premium',
    description: 'รุ่นใหม่ ขนาด 170 กรัม สูตรแป้งนิ่ม ไข่เค็มขยี้',
    descriptionEn: "New release · 170 g · ultra-soft pastry, 'crushed salted-egg' filling.",
    longDescription:
      'ขนมเปี๊ยะรุ่นใหม่ล่าสุดจากอร่อยซอย 8 — ขนาด 170 กรัม สูตรพิเศษที่เน้น "แป้งนิ่ม ไข่เค็มขยี้" คือขยี้ไข่เค็มกับไส้ให้กระจายทั่วทั้งลูก ทำให้ทุกคำได้รสไข่เค็มกลมกลืน ไม่กระจุกอยู่ตรงกลาง แป้งนุ่มกว่ารุ่นก่อน เหมาะสำหรับคนที่ชอบเนื้อนุ่มและรสไข่เค็มเข้มข้นทั่วถึง',
    longDescriptionEn:
      "Aroysoi 8's newest pastry — 170 g size, with a special 'soft pastry, crushed salted-egg' technique where the salted egg is broken up through the filling so every bite carries the egg's flavour evenly, instead of being concentrated in the centre. Softer pastry than our classic line, made for those who love a tender bite and rich, all-through salted-egg taste.",
    weight: '170 กรัม ต่อลูก',
    weightEn: '170 g per piece',
    pastry: 'แป้งนิ่มพิเศษ · ไข่เค็มขยี้',
    pastryEn: 'Extra-soft pastry · crushed salted-egg technique',
    ingredients: ['ถั่วล้วน', 'ฟัก', 'ไข่เค็ม'],
    ingredientsEn: ['Mung Bean', 'Winter Melon', 'Salted Egg'],
    halal: true,
    at7Eleven: false,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/11/ไทเฮา-300x300.png',
    subgroups: [
      {
        title: 'ไส้ทั้งหมด',
        titleEn: 'All Fillings',
        items: [
          { id: 'th-tualuan', name: 'ไทเฮา ถั่วล้วน', nameEn: 'Tai Hao — Pure Bean' },
          { id: 'th-tuafak',  name: 'ไทเฮา ถั่วฟัก',  nameEn: 'Tai Hao — Bean & Winter Melon' },
        ],
      },
    ],
  },

  // ───────────────────────────── 5. สายมู ─────────────────────────────
  {
    id: 'pia-saimu',
    name: 'เปี๊ยะสายมู',
    nameEn: 'Sai Muu — Lucky Charm Pia',
    tagEn: 'Lucky · Auspicious',
    description: 'เปี๊ยะสายมู เสริมโชค ไส้พิเศษคัดสรร',
    descriptionEn: 'Lucky-charm pia for those who seek good fortune — selected fillings.',
    longDescription:
      'ขนมเปี๊ยะสายมู ออกแบบมาเพื่อสายมูเตลู คนชอบไหว้พระเสริมโชค เป็นของฝากมงคล — คัดไส้ที่หวานหอม สะอาด ทานง่าย เหมาะสำหรับเป็นของไหว้และของฝากในเทศกาลมงคล สีของไส้มันม่วงเสริมความเป็นมงคล ฝอยทองคือทอง = ความรุ่งเรือง',
    longDescriptionEn:
      "Sai Muu pia — created for those who follow the 'sai muu' auspicious lifestyle: temple visits, fortune-seeking, blessing offerings. Fillings are chosen for their cleanness and easy-to-share sweetness, perfect for offerings or gifts during auspicious occasions. The purple-yam filling carries auspicious colour, and the golden thread symbolises prosperity.",
    weight: 'ขนาดมาตรฐาน',
    weightEn: 'Standard size',
    pastry: 'แป้งบาง สูตรนมสด',
    pastryEn: 'Thin, fresh-milk pastry',
    ingredients: ['ถั่วล้วน', 'ฟัก', 'มันม่วง', 'ฝอยทอง'],
    ingredientsEn: ['Mung Bean', 'Winter Melon', 'Purple Yam', 'Golden Thread'],
    halal: true,
    at7Eleven: false,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/08/94757252-8044-4b40-9019-086fc8147ab9.jpg',
    subgroups: [
      {
        title: 'ไส้ทั้งหมด',
        titleEn: 'All Fillings',
        items: [
          { id: 'sm-tualuan',            name: 'สายมู ถั่วล้วน',            nameEn: 'Sai Muu — Pure Bean' },
          { id: 'sm-tuafoythong',        name: 'สายมู ถั่วฝอยทอง',          nameEn: 'Sai Muu — Bean & Golden Thread' },
          { id: 'sm-tuafak',             name: 'สายมู ถั่วฟัก',             nameEn: 'Sai Muu — Bean & Winter Melon' },
          { id: 'sm-manmuang-foythong',  name: 'สายมู มันม่วงฝอยทอง',      nameEn: 'Sai Muu — Purple Yam & Golden Thread' },
        ],
      },
    ],
  },

  // ──────────────────── 6. 7-Eleven Lineup ────────────────────
  {
    id: 'at-7eleven',
    name: '7-Eleven',
    nameEn: 'At 7-Eleven',
    tagEn: 'Available at 7-Eleven',
    description: 'รุ่นที่หาซื้อได้ในร้านสะดวกซื้อ 7-Eleven ทุกสาขาทั่วประเทศ',
    descriptionEn: 'Our lineup available at every 7-Eleven across Thailand.',
    longDescription:
      'รวมสินค้าอร่อยซอย 8 ที่วางจำหน่ายในร้านสะดวกซื้อ 7-Eleven ทุกสาขาทั่วประเทศ — ตั้งแต่เปี๊ยะมินินมสด 3 รสคลาสสิก ไปจนถึงเค้กชิฟฟอนเนื้อนุ่มในกล่องคละรส และเค้กชิฟฟอนมะพร้าวสูตรใหม่ที่กำลังฮิต ทุกชิ้นใช้สูตรเดียวกับรุ่นใหญ่ในสาขา ส่งสดใหม่ทุกวัน หาซื้อง่าย ราคาเข้าถึงได้',
    longDescriptionEn:
      'Aroysoi 8 products available at every 7-Eleven nationwide — from our 3 classic fresh-milk mini pia, to our soft chiffon cake assortment, plus the trending new coconut chiffon. All using the same recipes as our flagship line, delivered fresh daily, easy to find and easy on the wallet.',
    weight: 'หลายขนาด · ดูแต่ละรุ่น',
    weightEn: 'Various sizes · see each product',
    pastry: 'แป้งบาง สูตรนมสด · เค้กเนื้อนุ่ม',
    pastryEn: 'Thin fresh-milk pastry · soft chiffon cake',
    ingredients: ['ถั่ว', 'ฟัก', 'งาดำ', 'นมสด', 'ฝอยทอง', 'มะพร้าว'],
    ingredientsEn: ['Bean', 'Winter Melon', 'Black Sesame', 'Fresh Milk', 'Golden Thread', 'Coconut'],
    halal: true,
    at7Eleven: true,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/07/779033.jpg',
    subgroups: [
      {
        title: 'เปี๊ยะมินินมสด · 3 รส',
        titleEn: 'Mini Fresh-Milk Pia · 3 Flavours',
        note: 'พอดีคำ แป้งบาง ไส้แน่น สดใหม่ทุกวัน',
        noteEn: 'Bite-sized, thin pastry, packed filling, restocked fresh daily.',
        items: [
          { id: 'm7-fakluan', name: 'เปี๊ยะมินิ ฟักล้วน', nameEn: 'Mini Pia — Pure Winter Melon' },
          { id: 'm7-tuafak',  name: 'เปี๊ยะมินิ ถั่วฟัก',  nameEn: 'Mini Pia — Bean & Winter Melon' },
          { id: 'm7-ngadam',  name: 'เปี๊ยะมินิ งาดำ',     nameEn: 'Mini Pia — Black Sesame' },
        ],
      },
      {
        title: 'ชิฟฟอน',
        titleEn: 'Chiffon',
        note: 'เค้กชิฟฟอนเนื้อนุ่ม สดใหม่ทุกวัน',
        noteEn: 'Soft chiffon cake, restocked fresh daily.',
        items: [
          { id: 'cf-orange',  name: 'ชิฟฟอน ส้ม',      nameEn: 'Chiffon — Orange' },
          { id: 'cf-coconut', name: 'ชิฟฟอน มะพร้าว',  nameEn: 'Chiffon — Coconut' },
        ],
      },
    ],
  },

  // ───────────────────────────── 7. เค้ก ─────────────────────────────
  {
    id: 'cake',
    name: 'เค้ก',
    nameEn: 'Cakes',
    tagEn: 'Bakery',
    description: 'เค้กเนื้อนุ่ม อบสดใหม่ทุกวัน',
    descriptionEn: 'Soft, fluffy cakes freshly baked every day.',
    longDescription:
      'เค้กเนื้อนุ่ม อบสดใหม่ทุกวันจากเตาอ่างทอง ใช้ไข่และนมสดคุณภาพ หวานน้อย เน้นความหอมของวัตถุดิบ — ตั้งแต่เค้กฝอยทองคลาสสิก ไปจนถึงเค้กมินิลาวาที่ตัดเปิดแล้วซอสไหลเยิ้ม 7 รสให้ลองครบ',
    longDescriptionEn:
      "Soft cakes baked fresh every day at our Ang Thong oven — quality eggs and fresh milk, light sweetness, ingredients that speak for themselves. From the classic golden-thread cake to our 7-flavour mini lava cakes that ooze sauce when you cut them open.",
    weight: 'หลายขนาด',
    weightEn: 'Various sizes',
    pastry: 'เนื้อเค้กนุ่ม สูตรนมสด',
    pastryEn: 'Soft cake · fresh-milk recipe',
    ingredients: ['นมสด', 'ไข่', 'แป้งเค้ก', 'ฝอยทอง', 'ลาวาซอส'],
    ingredientsEn: ['Fresh Milk', 'Egg', 'Cake Flour', 'Golden Thread', 'Lava Sauce'],
    halal: false,
    at7Eleven: false,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/07/779033.jpg',
    subgroups: [
      {
        title: 'เค้กฝอยทอง',
        titleEn: 'Golden Thread Cake',
        items: [
          { id: 'ck-foythong-2pound', name: 'เค้กฝอยทอง 2 ปอนด์', nameEn: 'Golden Thread Cake — 2 lb' },
          { id: 'ck-foythong-1pound', name: 'เค้กฝอยทอง 1 ปอนด์', nameEn: 'Golden Thread Cake — 1 lb' },
          { id: 'ck-mini-foy',        name: 'เค้กมินิฝอย',         nameEn: 'Mini Golden Thread Cake' },
        ],
      },
      {
        title: 'เค้กมินิลาวา · สอดไส้',
        titleEn: 'Mini Lava Cake · Filled',
        note: '50 กรัม ต่อชิ้น · 10 ชิ้น ต่อกล่อง',
        noteEn: '50 g per piece · 10 pieces per box',
        items: [
          { id: 'ck-lava-baitoey',     name: 'เค้กมินิลาวา ใบเตยนมสด',     nameEn: 'Mini Lava — Pandan Fresh Milk' },
          { id: 'ck-lava-thaitea',     name: 'เค้กมินิลาวา ชาไทยนมสด',     nameEn: 'Mini Lava — Thai Tea Fresh Milk' },
          { id: 'ck-lava-ovaltine',    name: 'เค้กมินิลาวา โอวัลตินนมสด',  nameEn: 'Mini Lava — Ovaltine Fresh Milk' },
          { id: 'ck-lava-bananakorea', name: 'เค้กมินิลาวา นมกล้วยเกาหลี', nameEn: 'Mini Lava — Korean Banana Milk' },
          { id: 'ck-lava-strawberry',  name: 'เค้กมินิลาวา ซอสสตรอเบอรี่',  nameEn: 'Mini Lava — Strawberry Sauce' },
          { id: 'ck-lava-yuzu',        name: 'เค้กมินิลาวา ซอสส้มยูสุ',     nameEn: 'Mini Lava — Yuzu Orange Sauce' },
          { id: 'ck-lava-blueberry',   name: 'เค้กมินิลาวา บลูเบอร์รี่',    nameEn: 'Mini Lava — Blueberry' },
        ],
      },
    ],
  },

  // ─────────────────────────── 8. เปี๊ยะมินิ ───────────────────────────
  {
    id: 'pia-mini',
    name: 'เปี๊ยะมินิ',
    nameEn: 'Mini Pia',
    tagEn: 'Bite-sized · Gift',
    description: 'พอดีคำ ทานง่าย ของฝากดีๆ',
    descriptionEn: 'Bite-sized, easy to eat — a perfect gift.',
    longDescription:
      'รุ่นมินิที่ขายตามสาขา — มี 2 แบบให้เลือก: เปี๊ยะมินิถาดสำหรับงานเลี้ยง ของฝาก หรืองานบุญ จัดเป็นถาดสวยพกง่าย และเปี๊ยะปุ๊บปั๊บที่เป็นเปี๊ยะลูกเล็กพอดีคำ แพ็คเป็นถุงทานเล่นได้สะดวก เหมาะกับคนที่อยากชิมเล่น หรือซื้อแบ่งกันในครอบครัว',
    longDescriptionEn:
      'Branch-exclusive mini line — two formats available: the Mini Pia Tray, packed in a clean tray ideal for parties, gifts and merit-making; and the Pup-Pap Mini, tiny bite-sized pia in handy snack bags, perfect for casual tasting or sharing.',
    weight: 'มินิถาด · ถุงปุ๊บปั๊บ',
    weightEn: 'Tray · Pup-Pap snack bag',
    pastry: 'แป้งบาง สูตรนมสด',
    pastryEn: 'Thin, fresh-milk pastry',
    ingredients: ['ถั่ว', 'ฟัก', 'เผือก'],
    ingredientsEn: ['Bean', 'Winter Melon', 'Taro'],
    halal: true,
    at7Eleven: false,
    heroImage: 'https://aroysoi8.com/wp-content/uploads/2025/11/11-300x300.png',
    subgroups: [
      {
        title: 'เปี๊ยะมินิถาด',
        titleEn: 'Mini Pia Tray',
        note: 'จัดเป็นถาดสวย เหมาะของฝาก งานเลี้ยง งานบุญ',
        noteEn: 'Packed in an elegant tray — ideal for gifts, parties, merit-making.',
        items: [
          { id: 'mn-mini-thad', name: 'เปี๊ยะมินิถาด', nameEn: 'Mini Pia Tray' },
        ],
      },
      {
        title: 'เปี๊ยะปุ๊บปั๊บ',
        titleEn: 'Pup-Pap Mini',
        note: 'เปี๊ยะลูกเล็กพอดีคำ แพ็คถุง ทานเล่นได้สะดวก',
        noteEn: 'Tiny bite-sized pia in snack bags — easy to grab and share.',
        items: [
          { id: 'mn-puppap', name: 'เปี๊ยะปุ๊บปั๊บ', nameEn: 'Pup-Pap Mini Pia' },
        ],
      },
    ],
  },
]
