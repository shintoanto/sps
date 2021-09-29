function FirstVideo() {
    document.getElementById('imageOne').style.display = 'none'
    document.getElementById('videoOne').style.display = 'block'
    document
        .getElementById('firsVideolink')
        .setAttribute('src', 'https://www.youtube.com/embed/I9QGnNvrmoY?autoplay=1')
}

function VideoTwo() {
    document.getElementById('second-img').style.display = 'none'
    document.getElementById('video-two').style.display = 'block'
    document
        .getElementById('video-two-content')
        .setAttribute('src', 'https://www.youtube.com/embed/ckub1RSlhic?autoplay=1')
}

function thirdVideo() {
    document.getElementById('third-img').style.display = 'none'
    document.getElementById('third-video').style.display = 'block'
    document
        .getElementById('third-video-content')
        .setAttribute('src', 'https://www.youtube.com/embed/xkmM6h32lnM?autoplay=1')
}

function fourthVideo() {
    document.getElementById('fourth-img').style.display = 'none'
    document.getElementById('fourth-video').style.display = 'block'
    document
        .getElementById('fourth-video-content')
        .setAttribute('src', 'https://www.youtube.com/embed/vhG3wKGp2mc?autoplay=1')
}

var floatbutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        floatbutton.style.display = "block";
    } else {
        floatbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function fifthVideo() {
    document.getElementById('fifth-img').style.display = 'none'
    document.getElementById('fifth-video').style.display = 'block'
    document
        .getElementById('fifth-video-content')
        .setAttribute('src', 'https://www.youtube.com/embed/m_hx0Ebg5Yo?autoplay=1')
}