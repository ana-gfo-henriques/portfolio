function generatePDF() {

    const element = document.getElementById('body');
			
    var opt = {
        margin:       0,
        css:          'styles/zine.css',
        filename:     'a4_zine.pdf',
        image:        { type: 'webp', quality: 1 },
        html2canvas:  { scale: 5 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };

    if (!checkMobile()) {
        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdfObj) {
            pdfObj.autoPrint();
            window.open(pdfObj.output('bloburl'), '_blank');
        });
        // alert("test is working");
    } else {
        html2pdf(element);

        // alert("mobile test working");
        // setTimeout(delete_overlay, 2500);
        // IDEA: find a way to print blob or arraybuffer onto canvas and then append that canvas to body
    }
}

function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    } else {
        return false;
    }
}

 function delete_overlay() {
    var one = document.getElementById("delete1");
    var two = document.getElementById("delete2");
    one.style.display = "none";
    two.style.display = "none";
}