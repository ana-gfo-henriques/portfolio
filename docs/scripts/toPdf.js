import {jsPDF} from "https://cdn.skypack.dev/jspdf";
// import jspdfAutotable from 'https://cdn.skypack.dev/jspdf-autotable';

const page = document.getElementById("body");

console.log("before doc");

document.addEventListener('DOMContentLoaded', function() {
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        size: "a4"
    });
    doc.html(page, {
        callback: function(doc) {
            doc.save('sample-document.pdf');
        },
        x: 0,
        y: 0,
        width: 297,
        height: 210
    });

    console.log("after doc");

 }, false);