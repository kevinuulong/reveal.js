// This fixes URL's that look like: slides.kevinuulong.com/s/github#/ => slides.kevinuulong.com/s/github/#/
function fixUrl() {
    let url = window.location.href;
    if (url.match(/(\w)(#)(.*)/) != null) {
        url = url.replace(/(\w)(#)(.*)/, "$1/#$3");
        window.location.href = url;
    }
}
