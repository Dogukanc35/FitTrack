Bana 3D tasarımlı Türkçe spor programı takip uygulaması yap. React + Three.js (3D) + Recharts (grafik) kullan.



GENEL TASARIM:

1\. 3D GÖRSEL TASARIM

&#x20;  - Arka planda animasyonlu 3D elementler (dönen küpler, sferik partiküller)

&#x20;  - Glassmorphism (cam etkisi) - half-transparent cards

&#x20;  - Neon gradient renkler (mor, mavi, pembe)

&#x20;  - Smooth animasyonlar ve hover efektleri

&#x20;  - Modern, futuristik atmosfer

&#x20;  - Parallax efekti (scroll'da arka plan hareket etsin)



2\. NAVİGASYON

&#x20;  - Floating navbar (yukarıda sabit)

&#x20;  - Logo + Linkler (Dashboard, Grafikler, Ayarlar)

&#x20;  - Dark mode toggle butonu



SAYFA BÖLÜMLERI:



A) DASHBOARD SAYFASI (Ana Sayfa)

&#x20;  - Üstte: 3D animasyonlu hero section

&#x20;  - Ortada: 2 sütunlu layout

&#x20;    \* Sol: Takvim (popup/modal olabilir)

&#x20;    \* Sağ: O günün workout detayları (3D card)

&#x20;  - Altında: Haftanın özeti (istatistikler - glass cards)

&#x20;  - Program seçme ve ekleme (modal)

&#x20;  - Hareket yönetimi (add/edit/delete)



B) GRAFIKLER SAYFASI (Yeni!)

&#x20;  - Üstte: Seçilen hareket dropdown

&#x20;  - Ortada: 3 tane grafik

&#x20;    1. LİNE CHART: Hareketin ağırlığı gün gün (son 30 gün)

&#x20;       - X eksen: Tarihler

&#x20;       - Y eksen: Ağırlık (kg)

&#x20;       - Farklı renkler (gradient)

&#x20;       - Hover'da detay göster

&#x20;    

&#x20;    2. BAR CHART: Tüm hareketlerin ort. ağırlığı

&#x20;       - Sütun başına 1 hareket

&#x20;       - Renk = ağırlık (koyu = ağır)

&#x20;    

&#x20;    3. PROGRESS METER: Bu ay tamamlanan antrenman yüzdesi

&#x20;       - Circular progress bar (3D görünümlü)

&#x20;       - Yüzde göster

&#x20;       - Tamamlanan gün sayısı



C) AYARLAR SAYFASI (Opsiyonel)

&#x20;  - Veri sıfırla butonu

&#x20;  - Verileri CSV olarak indir

&#x20;  - Tema ayarları (dark/light)



VERİ YAPISI (localStorage'da saklı):

{

&#x20; "2026-06-23": {

&#x20;   "program": "Göğüs ve Triceps",

&#x20;   "completed": true,

&#x20;   "exercises": \[

&#x20;     {

&#x20;       "id": 1,

&#x20;       "name": "Smith Machine Incline Bench Press",

&#x20;       "sets": "4x6-10",

&#x20;       "weight": 7.5,

&#x20;       "rest": "90-120s",

&#x20;       "tactic": "Sehpa 30-45°",

&#x20;       "history": \[

&#x20;         { "date": "2026-06-16", "weight": 7.0 },

&#x20;         { "date": "2026-06-23", "weight": 7.5 }

&#x20;       ]

&#x20;     }

&#x20;   ]

&#x20; }

}



GRAFİK ÖZELLİKLERİ:

1\. Line Chart

&#x20;  - Smooth curve (bezier)

&#x20;  - Gradient fill altında

&#x20;  - Animasyonlu yükleme

&#x20;  - Tooltip: Tarih + Ağırlık

&#x20;  - Y ekseninde min-max otomatik



2\. Bar Chart

&#x20;  - Renkli sütunlar

&#x20;  - Hover'da tamamlanan/tamamlanmayan göster

&#x20;  - Sıralama (ağırlığa göre descending)



3\. Circular Progress

&#x20;  - Donut şekil

&#x20;  - Animasyonlu fill

&#x20;  - Orta kısımda büyük yüzde

&#x20;  - Altında "Gün Tamamlandı" yazısı



RENKLER (3D Neon Tema):

\- Primary: #667eea (mor-mavi)

\- Secondary: #764ba2 (koyu mor)

\- Accent: #ff006e (pembe)

\- Success: #27ae60 (yeşil)

\- Background: #0a0e27 (çok koyu mavi)

\- Card: rgba(102, 126, 234, 0.1) (transparent purple)

\- Text: #ffffff (beyaz)



ANIMASYONLAR:

\- 3D arka plan: Sürekli dönen partiküller

\- Card hover: Scale + shadow

\- Grafik yükleme: Fade-in + slide-in

\- Button click: Pulse efekti

\- Sayfa geçişi: Fade + slide



RESPONSIVE:

\- Desktop: 3 sütun layout

\- Tablet: 2 sütun

\- Mobile: 1 sütun (vertical)

\- Grafikler mobile'de full-width



EKSTRA ÖZELLIKLER:

1\. Ağırlık Tarihçesi

&#x20;  - Her harekete "history" array'ı

&#x20;  - Veri kaydedilirken otomatik ekle

&#x20;  - Grafik bu history'den çeksin



2\. Grafik Filtreleri

&#x20;  - Son 7 gün / 30 gün / 90 gün

&#x20;  - Hareket seçimi dropdown



3\. Tahmin (Optional)

&#x20;  - Trend line (eğiliş çizgisi)

&#x20;  - "Sonraki hafta tahmini ağırlık" göster



SAYFALAR ARASI GEÇİŞ:

\- React Router kullan

\- Smooth page transitions

\- Back butonu



BAŞLANGIC VERİSİ (Demo):

\- Bugün: Göğüs ve Triceps (tamamlandı)

\- Dün: Sırt ve Biceps (tamamlandı)

\- 3 gün önce: Göğüs ve Triceps (tamamlandı)

\- Her harekete örnek weight history ekle (son 15 gün)



TEKNİK:

\- React + React Router (sayfa geçişi)

\- Three.js (3D arka plan)

\- Recharts (grafikler)

\- Tailwind (styling)

\- localStorage (veri saklama)



BONUS (İsteğe bağlı):

\- Comparison: 2 hareketin ağırlığını karşılaştır

\- Personal Record: En ağır ağırlık göster

\- Consistency: Antrenman tutarlılığı (haftada kaç gün)

\- Export: Grafiği PNG olarak indir

