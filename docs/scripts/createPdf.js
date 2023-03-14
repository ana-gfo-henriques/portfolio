// // import {jsPDF} from "https://cdn.skypack.dev/jspdf";

// // const page = document.getElementById("body");

// // console.log("before doc");

// // document.addEventListener('DOMContentLoaded', function() {
// //     const doc = new jsPDF({
// //         orientation: "landscape",
// //         unit: "mm",
// //         size: "a4"
// //     });
// //     doc.html(page, {
// //         callback: function(doc) {
// //             doc.save('sample-document.pdf');
// //         },
// //         x: 0,
// //         y: 0,
// //         width: 297,
// //         height: 210
// //     });

// //     console.log("after doc");

// //  }, false);

// var content = document.getElementById('body');
// var button = document.getElementById('btnDownload');

// function generatePDF(){
//   var doc = new jsPDF({
//     orientation: "landscape",
//     size: "a4"
//   });
//   doc.html(content, {
//     callback: function(doc) {
//         doc.save('sample-document.pdf');
//     },
//         x: 0,
//         y: 0,
//         width: 1122.520,
//         height: 793.695
//   });

// //   doc.setFontSize(14);
// //   doc.text(20, 20, content.value);
// //   doc.text(35, 25, "Paranyan loves jsPDF");
// //   doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
// //   doc.save('my.pdf');
// }

// button.addEventListener('click', generatePDF);





window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print(){
    console.log("starting function");
    var elementHTML = document.querySelector("#body");
    docPDF.html(elementHTML, {
    callback: function(docPDF) {
    docPDF.save('myDocument.pdf');
    },
    x: 0,
    y: 0,
    width: 1122.520,
    windowWidth: 793.695
    });
    console.log("ending function");
}