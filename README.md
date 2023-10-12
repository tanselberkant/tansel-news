## Projeyi Başlatmak

Root klasörde terminal'de `npm install` yapın
Daha sonra `npm start` komutu ile uygulamayı başlatabilirsiniz

[http://localhost:3000](http://localhost:3000) Adresine giderek projeyi görüntüleyebilirsiniz

## Ödevler Üzerindeki Yorumlarım

UI Tasarımını çıkarmak için TailwindCSS'i kullandım. Kendimi tailwindcss ile çok rahat hissettiğim için onu tercih ettim. Anasayfa haricinde diğer sayfaları yapmadım. Bunun için hem zaman ayıramadım hem de anasayfa görüntüsüne benzer bir başka görüntüyü kopyala yapıştır yaparak bir şey çıkarıp bunu göstermeyi mantıklı bulamadım.
Tasarımı çıkarken Figma'yı örnek aldım ve renkleri ve genel yapıyı oradan seçtim. Fakat tüm cihazlar için özel responsive çalışması yapmadım. Yine de responsive bir görünüm verdim fakat bunu Figma tasarımıyla doğru orantılı bir şekilde yaparak zaman kaybetmek istemedim.

State Yönetimi için Redux tercih ettim. Bu tercihimin asıl sebebi redux konusunda az bilgili olmamdı. Şuanda çalıştığım şirkette Context kullanıyoruz ve bu yapılarda temelde kuruluyor ve sonra unutuluyor her zaman aktif yazılmadıkları için. Benim redux'ı tekrar kendime hatırlatmak istediğim bir dönemde bu fırsatı görünce redux'ı kendime hatırlatarak redux ile state yönetimini tercih ettim. Global bir state'e nerede ihtiyacım olur ki nerede kullanım derken tasarımda yazar isimlerini görünce aklıma geren fikirle proje açılış ekranında userName kabul eden bir input alanı ile kendimce bir state yapısı kurmak istedim.

Server State yönetimi için React Query tecrübem olduğu için onu kullanmak istedim. Çalıştığım yerde deneyimleme fırsatım oldu. Açıkcası mantığını beğendim bir yapı fakat gelen veride filtreleme yapılması gereken bazı özel durumlarda sorun yaşadığımız bazı yerlerde kullanmamayı tercih ettiğimiz bir şeye dönüştü sonradan. Yine belli yerlerde belli amaçlarda kullanabildiğim için burada da bunu tercih ettim.

Haber portalını görünce internetten Ücretsiz API'ler araştırdım ve 1000 istekli bir API bulunca projeye onu entegre ettim. Ve verimi oradan temin etmek istedim.

Navigasyon konusunu görünceye kadar aklımda Next ile geliştirme fikri vardı fakat React Router'ı görünce özellikle istenildiğini düşünerek bende o yolda ilerledim. İki farklı sayfa daha koydum, içi boş olsalarda yapının çalıştığını göstermek istedim. Aynı zamanda bir protected route diye düşünebileceğimiz bir login (isim girme zorunluğu) yaptım.

Localization'ı ingilizce ve türkçe olarak çok temel seviye de hazırladım.

## Final Sözlerim

Pazartesi task konusunda bilgilendirildikten sonra task'ı inceledim ve biraz zaman ayırmaya çalıştım. İlk üzüldüm çünkü keşke cumartesi bilgilendirilseydim de haftasonu zaman ayırsaydım dedim. İş yerinde yoğun bir hafta geçirdim ve bir akşamımda özel bir durum için kaynadı. Çalıştığım saatlerde ya da iş yerinde pek fazla bu taskla ilgilenemedim çünkü o davranışın etik olmayacağını düşünüyordum.

Değerlendirmelerinizde belki fikir verebilecek şeyleri ve kendi fikirlerimi sizlerle paylaşmak istedim. Task'ı yapmak zor gelmedi ve ya sıkılarak yapmadım onu da söylemek isterim. Uzun zamandır next yazıyordum ve tekrar react yazmak ve bir proje kurmak eğlenceliydi.

Tüm ekibinize teşekkür ederim.
