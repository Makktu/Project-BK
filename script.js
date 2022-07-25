'use strict';

function showMessage(theMessage) {
    messageArea.innerHTML += `<br>${theMessage}`;
}

// ***********************************************
// ***********************************************

let allowedFileTypes = ['jpg', 'jpeg', 'png'];

const submitBtn = document.getElementById('submit-btn');
const messageArea = document.getElementById('message-area');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevents the page from reloading as it normally would within a <form> tag

    let theUploadedFile = document.getElementById('upload-file-btn').files[0]; // gets the file as an object

    console.log(theUploadedFile); // check your browser console for a full list of the object with properties that can be checked!

    // here we're working with just two of the properties: name, type, and size.

    let allowedFileSize = 10100000;

    // I've picked an arbitrary limit of just over 10MB for this example (10.1 million bytes)

    // JS object image sizes are measured in bytes

    if (theUploadedFile.size > allowedFileSize) {
        alert('That image is too big. Maximum 10MB in size please');
        return;
        // exits from the Submit button click event without further action if file is too big
    }

    showMessage(theUploadedFile.name);
    showMessage(theUploadedFile.type);

    // *****************************************
    // ****** CHECK FILENAME EXTENSION *********
    // *****************************************

    // first, get the part of the file name after the last-placed '.' in the text string (in case of filenames like 'image.something.something-else.jpg')

    // check that the filename does include a dot '.'

    for (let letter = 0; letter < theUploadedFile.name.length; letter++) {
        if (letter == '.') {
            // carry out check
        }
    }

    // let userFileExtension = theUploadedFile.name.splice(
    //     theUploadedFile.name.lastIndexOf('.'),
    //     theUploadedFile.name.length - 1
    // );

    console.log(userFileExtension);
});
