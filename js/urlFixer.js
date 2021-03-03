// This fixes URL's that look like: sites.kevinuulong.com/s/github#/ => sites.kevinuulong.com/s/github/#/
let url = window.location.href;
if (url.match(/(\w)(#)(.*)/) != null) {
    url = url.replace(/(\w)(#)(.*)/, "$1/#$3");
    window.location.href = url;
}
