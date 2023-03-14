import { jsPDF } from "jspdf";

const page = document.getElementById("body");

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
 }, false);