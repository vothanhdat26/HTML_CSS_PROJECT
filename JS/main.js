const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const amapEl = document.getElementById("ampm");
//  lay du lieu tu may tinh
function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }
    h = h < 10 ? "0" + h : h;
    // neu h nho hon 10 thi them so 0+h con ko nho hon thi chi ghi h
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    amapEl.innerText = ampm
    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock()