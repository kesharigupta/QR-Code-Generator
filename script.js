function generate() {
    let qrText = document.getElementById("qrText");
    let imgbox = document.getElementById("imgbox");
    let qrimage = document.getElementById("qrimage");

    if (qrText.value.length > 0) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgbox.classList.add("show-img");
        qrText.classList.remove("error");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
