<!-- Global Responsive Pop-Up -->
<div id="responsive-showcase" class="popup">
  <div class="popup-content">
    <span class="close" id="closePopup">&times;</span>
    <div class="frame-options">
      <button class="frame-option" data-view="desktop" title="Desktop">
        <img src="https://img.icons8.com/ios-filled/24/FFFFFF/monitor.png" alt="Desktop">
      </button>
      <button class="frame-option" data-view="tablet" title="Tablet">
        <img src="https://img.icons8.com/ios-filled/24/FFFFFF/ipad.png" alt="Tablet">
      </button>
      <button class="frame-option" data-view="phone" title="Phone">
        <img src="https://img.icons8.com/ios-filled/24/FFFFFF/iphone.png" alt="Phone">
      </button>
    </div>
    <div class="iframe-container desktop">
      <iframe id="demoIframe" src="" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
    </div>
  </div>
</div>

<style>
  /* Pop-Up Styles */
  .popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Background hitam */
    z-index: 9999;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background: black;
    border-radius: 10px;
    width: 90%;
    max-width: 1048px;
    max-height: 80%; /* Membatasi tinggi maksimum menjadi 80% layar */
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Menyembunyikan konten yang keluar dari batas */
    margin: auto; /* Membuat kontainer popup berada di tengah layar */
  }

  .popup-content {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    color: white; /* Warna close putih */
  }

  .frame-options {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #222;
    border-bottom: 1px solid #444;
  }

  .frame-options button {
    background: none;
    border: none;
    margin: 0 10px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }

  .frame-options button img {
    width: 24px;
    height: 24px;
  }

  .frame-options button.active {
    opacity: 1;
  }

  .iframe-container {
    flex: 1; /* Membuat kontainer iframe mengambil sisa ruang */
    height: 600px; 
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .iframe-container iframe {
    border: none;
    width: 100%;
    height: 100%; /* Mengisi penuh kontainer */
  }

  /* Tampilan Desktop */
  .iframe-container.desktop {
    width: 100%; /* Set a larger width for scaling */
    height: 100%; /* Set a larger height for scaling */
    transform: scale(1); /* Scale down to fit */
  }

  /* Tambahkan batas tinggi pada tablet dan phone */
.iframe-container.tablet iframe {
  width: 768px;
  max-height: calc(80vh - 50px); /* Batasi tinggi 80% layar, dikurangi tinggi bar */
}

.iframe-container.phone iframe {
  width: 375px;
  max-height: calc(80vh - 50px); /* Sama seperti di atas */
}
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('responsive-showcase');
    const iframe = document.getElementById('demoIframe');
    const closePopup = document.getElementById('closePopup');
    const frameOptions = document.querySelectorAll('.frame-option');
    const iframeContainer = document.querySelector('.iframe-container');

    // Open Pop-Up
    document.querySelectorAll('a[href$="#showcase"]').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const url = link.href.replace('#showcase', ''); // Get the base URL
        iframe.src = url; // Load the URL in the iframe
        popup.style.display = 'flex'; // Show pop-up
        setActiveView('desktop'); // Default view
      });
    });

    // Close Pop-Up
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
      iframe.src = ''; // Clear iframe source
    });

    // Switch Views
    frameOptions.forEach(option => {
      option.addEventListener('click', () => {
        const view = option.dataset.view;
        setActiveView(view);
      });
    });

    function setActiveView(view) {
  // Hapus kelas aktif dari semua opsi
  frameOptions.forEach(option => option.classList.remove('active'));
  // Tambahkan kelas aktif ke opsi yang dipilih
  document.querySelector(`.frame-option[data-view="${view}"]`).classList.add('active');
  
  // Terapkan tampilan yang dipilih ke iframe-container
  iframeContainer.className = `iframe-container ${view}`;

  // Pastikan iframe tidak memotong area bawah
  const iframe = document.getElementById('demoIframe');
  iframe.style.width = view === 'desktop' ? '100%' : view === 'tablet' ? '768px' : '375px';
  iframe.style.height = `calc(100vh - 50px)`; // Tinggi layar penuh dikurangi tinggi bar
}

  });
</script>
