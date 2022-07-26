# Prototype testing of simple image upload for a website.

## The user should be able to upload an image file only.

All vanilla JavaScript/HTML ✅

The client-side dialogue window should limit the user choice to the specified file types. ✅

If the client overrides the dialogue window and tries to upload another filetype, server-side validation should prevent further action. ✅

If the file is larger than the maximum allowed (5MB in this case), server-side validation should prevent upload. ✅

The final check: analysis of the data in the file to ensure that 1) this is an image file, and 2) it does not contain arbitrarily executing code, etc. (TBD) ❗(Might need an external node package for this one unfortunately. Still looking for a secure vanilla JS solution.)

---

https://www.npmjs.com/package/image-js – something like this package would be ideal for image manipulation of all sorts, but it requires installation and maintenance.
