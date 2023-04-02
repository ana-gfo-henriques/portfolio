function generatePDF() {

    const element = document.getElementById('body');
			
    var opt = {
        margin:       0,
        css:          'styles/zine.css',
        filename:     'a4.pdf',
        image:        { type: 'webp', quality: 1 },
        html2canvas:  { scale: 5 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    if (!checkMobile()) {
        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdfObj) {
            pdfObj.autoPrint();
            window.open(pdfObj.output('bloburl'), '_blank');
        });
        // alert("test is working");
    } else {
        html2pdf().set(opt).from(element).toPdf().save();
        // alert("mobile");
        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdfObj) {
            window.open(pdfObj.output('bloburl'), '_blank');
        });
    }
}

function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    } else {
        return false;
    }
 }