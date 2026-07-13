# 💪 FitTrack 3D — Spor Programı Takip Uygulaması

3D tasarımlı, futuristik bir Türkçe antrenman takip uygulaması.
**React + Three.js + Recharts + Tailwind + React Router** ile yapıldı. Tüm veriler tarayıcının `localStorage`'ında saklanır (sunucu yok).

## 🚀 Çalıştırma ve Canlıya Alma

### Yerel Geliştirme
```bash
npm install      # bağımlılıkları yükle (ilk seferde)
npm run dev      # geliştirme sunucusu -> http://localhost:5173
```

### 🌐 GitHub Pages'te Canlıya Alma (Otomatik)
Proje GitHub Actions ile otomatik deploy edilecek şekilde ayarlanmıştır. Sadece kodu GitHub'a yükleyin:
1. `git init`, `git add .`, `git commit -m "ilk commit"`
2. Kendi GitHub reponuzu oluşturup bağlayın: `git remote add origin <repo-url>`
3. `git push -u origin main`
4. GitHub'da deponuzun **Settings > Pages** sekmesine gidin.
5. "Source" kısmını **GitHub Actions** olarak seçin. Kodlar `main` branchine her pushlandığında uygulama canlıya alınacaktır.

## ✨ Özellikler

### 🎨 Tasarım
- Three.js ile animasyonlu 3D arka plan (dönen küpler, torus, ikosahedron + sferik partiküller)
- Fare ve scroll'a tepki veren **parallax** kamera
- **Glassmorphism** (cam efekti) kartlar, neon mor/mavi/pembe gradyanlar
- Smooth animasyonlar, hover efektleri, sayfa geçişleri
- Açık / koyu tema (navbar'dan veya Ayarlar'dan)
- Tam responsive (mobil / tablet / masaüstü)

### 🏠 Dashboard
- 3D animasyonlu hero (dönen torus knot)
- Takvim — günleri seç, tamamlanan/planlı günler renkli işaretli
- Seçili günün workout detay kartı (3D card)
- Hareket ekle / düzenle / sil + hızlı ağırlık girişi
- Program seç/ekle modalı (hazır programlar veya özel ad)
- Haftanın özeti (tamamlanan, hacim, tutarlılık, haftalık çubuk)

### 📊 Grafikler
1. **Line Chart** — seçilen hareketin gün gün ağırlığı (gradient dolgu, smooth eğri, trend çizgisi + gelecek hafta tahmini)
2. **Bar Chart** — tüm hareketlerin ortalama ağırlığı (ağırlığa göre sıralı, renk = ağırlık)
3. **Circular Progress** — bu ay tamamlanan antrenman yüzdesi (3D görünümlü donut)
- Filtreler: Son 7 / 30 / 90 gün
- Hareket karşılaştırma (2 hareket aynı grafikte)
- Kişisel rekorlar (PR), tutarlılık grafiği
- Grafiği **PNG** olarak indir

### ⚙️ Ayarlar ve Veri Yönetimi
- **JSON Yedek Al / Geri Yükle**: Verilerini cihazlar arası taşımak veya güvene almak için.
- Depolama (Kota) doluluğunu görselleştirme ve uyarı sistemi.
- Demo verisine sıfırla / tüm verileri kalıcı sil
- Verileri **CSV** olarak indir (Excel uyumlu)
- Açık / koyu tema değişimi


## 🗂️ Veri Yapısı (localStorage)

```json
{
  "2026-06-23": {
    "program": "Göğüs ve Triceps",
    "completed": true,
    "exercises": [
      {
        "id": 1,
        "name": "Smith Machine Incline Bench Press",
        "sets": "4x6-10",
        "weight": 40,
        "rest": "90-120s",
        "tactic": "Sehpa 30-45°",
        "history": [{ "date": "2026-06-16", "weight": 37.5 }]
      }
    ]
  }
}
```

İlk açılışta otomatik olarak demo veri yüklenir (bugün, dün ve önceki günlere ait programlar + son ~15 günün ağırlık geçmişi).

## 📁 Yapı

```
src/
  components/   Background3D, Hero3D, Navbar, Calendar, WorkoutCard,
                WeekSummary, ProgramModal, ExerciseForm, Modal,
                GlassCard, CircularProgress
  context/      AppContext (veri + tema + tüm CRUD işlemleri)
  data/         demoData (program şablonları + demo üretici)
  pages/        Dashboard, Charts, Settings
  utils/        helpers, storage, charts, export
```
