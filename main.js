function showModal(title, text, videoIds) {
    let modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = text;

    let videoSelector = document.getElementById("video-selector");
    let videoContainer = document.getElementById("modal-video-container");

    // Kosongkan isi sebelumnya
    videoSelector.innerHTML = "";
    videoContainer.innerHTML = "";

    if (videoIds.length > 0) {
        updateVideo(videoIds[0]); // Tampilkan video pertama sebagai default
    }

    // Buat tombol untuk mengganti video
    videoIds.forEach((id, index) => {
        let button = document.createElement("button");
        button.innerText = "Video " + (index + 1);
        button.onclick = function () {
            updateVideo(id);
        };
        videoSelector.appendChild(button);
    });

    document.getElementById("modal").style.display = "flex";
    
}

function updateVideo(videoId) {
    let videoContainer = document.getElementById("modal-video-container");

    // Pastikan videoId tidak kosong atau undefined
    if (!videoId) {
        videoContainer.innerHTML = "<p>Video tidak tersedia.</p>";
        return;
    }

    videoContainer.innerHTML = `
        <iframe width="100%" height="315"
            src="https://www.youtube.com/embed/${videoId}" 
            frameborder="0" allowfullscreen>
        </iframe>
    `;
}
    modal.style.display = "flex";
    modal.style.opacity = "0"; // Set awal transparan
    setTimeout(() => modal.style.opacity = "1", 50); // Tambahkan efek transisi


function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Pastikan modal tetap tersembunyi saat halaman pertama kali dimuat
    document.getElementById("modal").style.display = "none";
});

// tamabahan script terakhir
document.addEventListener("DOMContentLoaded", function () {      
    let cards = document.querySelectorAll(".card");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.9;

        cards.forEach(card => {
            let cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});










