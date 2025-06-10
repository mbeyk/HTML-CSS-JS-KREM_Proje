const sepetÖzeti = document.querySelector(".sepetÖzeti");
const sepetEkle = document.querySelectorAll(".sepetEkle");
const onay = document.querySelector(".onay");
const gelenSipariş = document.querySelector(".gelenSipariş");


// butona basıldığında gidilecek sayfalar
document.addEventListener("DOMContentLoaded", () => {
    const musteri = document.querySelector(".musteri");
    const garson = document.querySelector(".garson");
    const mutfakPersoneli = document.querySelector(".mutfakPersoneli");
    const sepeteGit = document.querySelector(".sepeteGit");
  
    if (musteri) {
      musteri.addEventListener("click", () => {
        window.open("menüM.html", "_blank");
      });
    }
  
    if (garson) {
      garson.addEventListener("click", () => {
        window.open("garson.html", "_blank");
      });
    }
  
    if (mutfakPersoneli) {
      mutfakPersoneli.addEventListener("click", () => {
        window.open("mutfak.html", "_blank");
      });
    }
  
    if (sepeteGit) {
      sepeteGit.addEventListener("click", () => {
        window.location.href = "sepetM.html";
      });
    }

    if (onay) {
      onay.addEventListener("click", () => {
        if(sepetÖzeti.textContent.trim() !== "" )
        window.location.href = "siparişTakipM.html";
      });
    }

  });

  
  // Sepete Ekle butonları için
document.addEventListener('DOMContentLoaded', () => {
  const sepeteEkleBtns = document.querySelectorAll('.sepetEkle');

  sepeteEkleBtns.forEach(btn => {
    btn.onclick = () => {
      const parent = btn.parentElement;
      const ad = parent.querySelector('h1').textContent.trim();
      const fiyat = parent.querySelector('.fiyat').textContent.trim();

      const yeniUrun = `${ad}  ${fiyat}`;

      // Sepete ekle (dizi olarak tut)
      const eskiSepet = JSON.parse(localStorage.getItem('sepet')) || [];
      eskiSepet.push(yeniUrun);
      localStorage.setItem('sepet', JSON.stringify(eskiSepet));

       // Görsel geri bildirim
    btn.textContent = "Eklendi ✅";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";

    // 2 saniye sonra eski haline dönsün istersen:
    setTimeout(() => {
      btn.textContent = "Sepete Ekle";
      btn.style.backgroundColor = ""; // varsayılan rengine döner
      btn.style.color = "";
    }, 2000);
    };
  });

  // Eğer sepetM.html'deysek sepete yazdır
  const sepetDiv = document.querySelector('.sepetÖzeti');
  if (sepetDiv) {
    const sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    sepetDiv.innerHTML = sepet.map(u => `<p>${u}</p>`).join('');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const onay = document.querySelector(".onay");

  if (onay) {
    onay.addEventListener("click", () => {
      const sepet = JSON.parse(localStorage.getItem('sepet')) || [];
      const masaNo = document.querySelector("#masaNo").value;

      if (sepet.length > 0) {
        const siparisObjesi = {
          masa: masaNo,
          urunler: sepet
        };

        localStorage.setItem('onaylananSiparis', JSON.stringify(siparisObjesi));
        localStorage.removeItem('sepet');
        window.location.href = "siparişTakipM.html";
      } else {
        alert("Sepet boş!");
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const siparisDiv = document.querySelector(".gelenSipariş");

  if (siparisDiv) {
    const siparisObjesi = JSON.parse(localStorage.getItem('onaylananSiparis'));

    if (siparisObjesi && siparisObjesi.urunler?.length > 0) {
      const masaYazı = `<strong>Masa: ${siparisObjesi.masa}</strong>`;
      const urunYazı = siparisObjesi.urunler.map(u => `<p>${u}</p>`).join('');
      siparisDiv.innerHTML = `${masaYazı}<br>${urunYazı}`;
    } else {
      siparisDiv.innerHTML = "<p>Gelen sipariş yok.</p>";
    }
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const alindiBtn = document.querySelector('.buttonKapsayici > .alindi');

  if (alindiBtn) {
    alindiBtn.onclick = () => {
      console.log("Mutfağın Alındı butonuna tıklandı");

      // Durum bilgisini localStorage'a kaydet
      localStorage.setItem('siparisDurum', 'alindi');

      alert("Durum 'Alındı' olarak kaydedildi.");
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const alindiM = document.querySelector('.durumTakip > .alindiM');

  if (alindiM) {
    const durum = localStorage.getItem('siparisDurum');

    if (durum && durum === 'alindi') {
      alindiM.style.backgroundColor = "green";
      console.log("Durum güncellendi: Alındı");
      localStorage.removeItem('siparisDurum');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hazirlaniyorBtn = document.querySelector('.buttonKapsayici > .hazirlaniyor');

  if (hazirlaniyorBtn) {
    hazirlaniyorBtn.onclick = () => {
      console.log("Mutfağın Hazırlanıyor butonuna tıklandı");

      // Durum bilgisini localStorage'a kaydet
      localStorage.setItem('siparisDurum', 'hazirlaniyor');

      alert("Durum 'Hazirlaniyor' olarak kaydedildi.");
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hazirlaniyorM = document.querySelector('.durumTakip > .hazirlaniyorM');

  if (hazirlaniyorM) {
    const durum = localStorage.getItem('siparisDurum');

    if (durum && durum === 'hazirlaniyor') {
      hazirlaniyorM.style.backgroundColor = "green";
      console.log("Durum güncellendi: Alındı");
      localStorage.removeItem('siparisDurum');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hazirBtn = document.querySelector('.buttonKapsayici > .hazir');


  if (hazirBtn) {
    hazirBtn.onclick = () => {
      console.log("Mutfağın Hazır butonuna tıklandı");

      // Durum bilgisini localStorage'a kaydet
      localStorage.setItem('siparisDurum', 'hazir');

      alert("Durum 'Hazir' olarak kaydedildi.");
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hazirM = document.querySelector('.durumTakip > .hazirM');

  if (hazirM) {
    const durum = localStorage.getItem('siparisDurum');

    if (durum && durum === 'hazir') {
      hazirM.style.backgroundColor = "green";
      console.log("Durum güncellendi: Alındı");
      localStorage.removeItem('siparisDurum');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hazirG = document.querySelector('.garson > .hazirG');

  if (hazirG) {
    const durum = localStorage.getItem('siparisDurum');

    if (durum && durum === 'hazir') {
      hazirG.style.backgroundColor = "green";
      console.log("Durum güncellendi: Alındı");
      localStorage.removeItem('siparisDurum');
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const teslimEtBtn = document.querySelector('.teslimEt');

  if (teslimEtBtn) {
    teslimEtBtn.onclick = () => {
      console.log("Mutfağın Alındı butonuna tıklandı");

      // Durum bilgisini localStorage'a kaydet
      localStorage.setItem('siparisDurum', 'teslimEt');

      alert("Durum 'Teslim Edildi' olarak kaydedildi.");
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const teslimEdildiM = document.querySelector('.durumTakip > .teslimEdildiM');

  if (teslimEdildiM) {
    const durum = localStorage.getItem('siparisDurum');

    if (durum && durum === 'teslimEt') {
      teslimEdildiM.style.backgroundColor = "green";
      console.log("Durum güncellendi: Alındı");

      // Durum işlendikten sonra localStorage'dan siliniyor
      localStorage.removeItem('siparisDurum');
    }
  }
});

document.querySelector(".durumGüncelleme").addEventListener("click", function() {
    location.reload(); // sayfayı yeniler
});


