function change() {
    document.getElementById('img').style.display = 'none'
    let video = document.getElementById('video');
    video.style.display = 'block';
    let url = video.getAttribute("src");
    url = url + "?autoplay=1&mute=1 ";
    video.setAttribute("src", url);
}