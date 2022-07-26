function showMessage(theMessage) {
    messageArea.innerHTML += `<br><br>${theMessage}`;
}

let theGallery = [];

let allowedFileTypes = /(\.jpg|\.jpeg|\.png)$/i;
// RegEx can be expanded to allow more file types, e.g. .gif, etc

let allowedFileSize = 5100000;
// image size limit of just over 5MB for this example

const submitBtn = document.getElementById('submit-btn');
const messageArea = document.getElementById('message-area');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // prevents the page from reloading as it normally would within a <form> tag

    let theUploadedFile = document.getElementById('upload-file-btn').files[0]; // gets the file as an object

    console.log(theUploadedFile);

    // **********************************

    // PERFORM THE CHECKS ON
    // 1) FILE TYPE
    // 2) FILE SIZE

    // 1)
    if (!allowedFileTypes.exec(theUploadedFile.name)) {
        // exits from the Submit button click event without further action if the filetype is not one of the accepted types
        showMessage('That filetype is not accepted');
        return;
    }

    // 2)
    if (theUploadedFile.size > allowedFileSize) {
        // exits from the Submit button click event without further action if file is too large
        showMessage(
            `That image is too big. Maximum ${(
                allowedFileSize / 1000000
            ).toFixed(1)}MB in size please`
        );
        return;
    }

    // if both checks are cleared:

    showMessage(
        `ACCEPTED!<br>Name: ${theUploadedFile.name}<br>Type: ${theUploadedFile.type}<br>Size: ${theUploadedFile.size} bytes`
    );
    // now image manipulation, resizing, display etc can take place
    theGallery[theGallery.length] =
        URL.createObjectURL(theUploadedFile).slice(5);

    console.log('>>>', theGallery);

    showGallery(theGallery);
});

function showGallery(theGallery) {
    let imageShow = document.getElementById('output');

    for (let image = 0; image < theGallery.length; image++) {
        console.log(theGallery[image]);
        let frame = document.createElement('img');
        frame.src = theGallery[image];
        console.log(frame);
        imageShow.appendChild(frame);
    }
}
