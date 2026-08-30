var degree = prompt("enter your degree");

if (degree === null || degree.trim() === "") {
    alert("please your degree")
} else {
    var num = Number(degree);

    if (degree < 0 || degree > 100 ) {
        alert("invalid degree");
    } else if (num >= 90) {
        alert("excellent");
    } else if (num >= 80) {
        alert("very good");
    } else if (num >= 70) {
        alert("good");
    } else {
        alert("failed");
    }
}