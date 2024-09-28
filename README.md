# YouTube Clone Projesi

Bu proje, React kullanarak geliştirilmiş bir YouTube clone uygulamasıdır. Kullanıcılar, videoları izleyebilir, arama yapabilir ve içerikleri keşfedebilirler. Proje, RapidAPI'den veri çekmek için Axios kullanmakta ve kullanıcı arayüzünü Tailwind CSS ile tasarlamaktadır. Durum yönetimi için Context API kullanılmıştır ve proje Vite ile oluşturulmuştur.

## Özellikler

- **Çok Sayfalı Navigasyon:** Kullanıcılar, React Router DOM sayesinde kolayca farklı sayfalara geçiş yapabilir.
- **Video Oynatma:** Kullanıcılar, videoları izlemek için React Player bileşenini kullanabilir.
- **API Entegrasyonu:** RapidAPI üzerinden video verileri çekilerek kullanıcıya sunulmaktadır.
- **Tarih ve Sayı Formatlama:** Moment.js ile tarih formatlama ve Millify ile sayı formatlama yapılmaktadır.
- **Arama Fonksiyonu:** Kullanıcılar, istedikleri videoları arayabilir ve sonuçları hızlıca görebilir.
- **Kullanıcı Dostu Arayüz:** Tailwind CSS ile modern ve duyarlı bir tasarım sunulmuştur.
- **İkonlar:** React Icons kütüphanesi ile kullanıcı arayüzüne çeşitli ikonlar eklenmiştir.
- **Durum Yönetimi:** Context API kullanılarak uygulama genelinde durum yönetimi sağlanmıştır.

## Proje Kurulumu

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Projeyi klonlayın:**

   ```bash
   git clone https://github.com/cengo14/react-youtube-clone-project.git
   ```

2. **Proje dizinine gidin:**

   ```bash
   cd react-youtube-clone-project
   ```

3. **Gerekli bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

4. **Uygulamayı başlatın:**

   ```bash
   npm run dev
   ```

5. Tarayıcıda `http://localhost:(ilgili)` adresine giderek uygulamayı görüntüleyin.

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü geliştirmek için.
- **React Router DOM:** Çok sayfalı navigasyon için.
- **Axios:** API istekleri yapmak için.
- **Tailwind CSS:** Stil düzenlemeleri için modern bir CSS framework.
- **React Player:** Video oynatımı için özelleştirilebilir bir bileşen.
- **Moment.js:** Tarih ve saat formatlama için.
- **Millify:** Sayı formatlama için kullanılmaktadır.
- **React Icons:** Kullanıcı arayüzünde ikonlar eklemek için.


## Proje Yapısı

```
youtube-clone/
├── public/
│   └── ...
├── src/
│   ├── components/      # React bileşenleri
│   ├── context/         # Context API dosyaları
│   ├── pages/          # Sayfa bileşenleri
│   ├── utils/         # Yardımcı dosyalar
│   ├── index.css          # Stillendirme dosyası
│   ├── App.jsx          # Ana bileşen
│   ├── main.jsx        # Giriş noktası
│   └── ...
├── index.html
├── .env                 # Çevresel değişkenler
├── package.json         # Proje bağımlılıkları
└── README.md            # Proje belgeleri
```

## Ekran Görüntüleri

Proje arayüzünün bir önizlemesini görmek için aşağıdaki GIF'e göz atın:

![YouTube Clone GIF](desktop.gif)

## Katkıda Bulunma

Katkıda bulunmak isterseniz, aşağıdaki adımları takip ederek projeye katkıda bulunabilirsiniz:

1. Projeyi fork edin.
2. Yeni bir feature branch oluşturun (`git checkout -b feature/YourFeature`).
3. Değişikliklerinizi yapın ve commit edin (`git commit -m 'Add some feature'`).
4. Branch'i push edin (`git push origin feature/YourFeature`).
5. Pull request oluşturun.

