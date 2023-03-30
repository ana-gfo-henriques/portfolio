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
        // alert("mobile");
        var windowSize; "width=" + window.innerWidth + ",height=" + window.innerHeight + ",scrollbars=no";
        html2pdf().set(opt).from(element).save();
        // window.open(pdfObj.output('bloburl'), '_blank');
        window.open(pdfObj.output('bloburl'), 'popup', windowSize);
    }
}

function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    } else {
        return false;
    }
    // alert(answer ? 'It is a mobile device' : 'It is not a mobile device');
 }