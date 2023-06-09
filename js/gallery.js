"use strict";

/**
 * Selects a random full image at the start and displays it.
 */
function showRandomImageAtStart() {
    // TODO: Select all 6 links (<a>) in the thumbnail section. They contain the URLs to the full images.
    let linkElements = document.getElementsByClassName('card-link')

    // TODO: Select a random entry out of these 6.
    let random = getRandomInt(0,6);
    let randomLinkElement = linkElements[random];
    // TODO: Implement switchFullImage() below.
    // TODO: Call switchFullImage() with the URL of the random image and the alt attribute of the thumbnail (it contains the description)
    switchFullImage(randomLinkElement.getAttribute('href'), randomLinkElement.firstElementChild.getAttribute('alt'))
    // TODO: Set a background color (classes .bg-dark and .text-white) to the card-body of your random image (hint: it's the sibling element of your link).
    randomLinkElement.nextElementSibling.classList.add("bg-dark");
    randomLinkElement.nextElementSibling.classList.add("text-white");

}

/**
 * Prepare the links on the full images so that they execute the following tasks:
 * - Switch the full image to the one that has been clicked on.
 * - Set the highlight under the current thumbnail.
 * - Load the notes for the current image.
 */
function prepareLinks() {
    // TODO: Select all the 6 links (<a>) in the thumbnail section.
    let linkElements = document.getElementsByClassName('card-link');
    for (let i = 0; i< linkElements.length; i++){
        
    linkElements[i].addEventListener('click', function(e){
        e.preventDefault();
        for(let linkElement of linkElements)
        if (linkElement.nextElementSibling.classList.contains("bg-dark")&& linkElement.nextElementSibling.classList.contains("text-white"))
        {
            linkElement.nextElementSibling.classList.remove("bg-dark");
            linkElement.nextElementSibling.classList.remove("text-white");
        }
    this.nextElementSibling.classList.add("bg-dark", "text-white");
    switchFullImage(this.getAttribute('href'), this.firstElementChild.getAttribute('alt'));
    loadNotes(this.getAttribute('href'));
    });
   
    }
   
    // TODO: Set an event listener for the click event on every <a> element.
    
    //  (or advanced: think of a way to do it with one single handler)

    // TODO: The callback of the listener should do the following things:

    //  - Remove the .bg-dark and .text-white classes from the card where it's currently set.
    //  - Add both classes again to the card where the click happened (hint: "this" contains the very <a> element, where the click happened).
    //  - Call switchFullImage() with the URL clicked link and the alt attribute of the thumbnail.
    //  - Implement and then call loadNotes() with the key for the current image (hint: the full image's URL makes an easy and unique key).
    //  - Prevent the default action for the link (we don't want to follow it).
}

/**
 * Stores or deletes the updated notes of an image after they have been changed.
 */
function storeNotes() {
    // TODO: Select the notes field and add a blur listener.
    let notes = document.getElementById('notes');
    console.log(notes);
    notes.addEventListener('blur', () => {
        
        let key = document.getElementsByClassName('figure-img')[0].src;
        if (notes.innerHTML === "") {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, notes.innerText);
            console.log(key);
        }
    
    });
    
    // TODO: When the notes field loses focus, store the notes for the current image in the local storage.
    // TODO: If the notes field is empty, remove the local storage entry.
    // TODO: Choose an appropriate key (hint: the full image's URL makes an easy and unique key).
}

/**
 * Switches the full image in the <figure> element to the one specified in the parameter. Also updates the image's alt
 * attribute and the figure's caption.
 * @param {string} imageUrl The URL to the new image (the image's src attribute value).
 * @param {string} imageDescription The image's description (used for the alt attribute and the figure's caption).
 */
function switchFullImage(imageUrl, imageDescription) {
    // TODO: Get the <img> element for the full image. Select it by its class or tag name.
    let imageElement = document.getElementsByClassName("figure-img")[0];
    // TODO: Set its src and alt attributes with the values from the parameters (imageUrl, imageDescription).
    imageElement.setAttribute('src', imageUrl);
    imageElement.setAttribute('alt', imageDescription);
    // TODO: Select the <figcaption> element.
    let figcaptionElement = document.getElementsByTagName("figcaption")[0];

    // TODO: Set the description (the one you used for the alt attribute) as its text content.
    figcaptionElement.innerText = imageDescription;
}

/**
 * Loads the notes from local storage for a given key and sets the contents in the notes field with the ID notes.
 * @param {string} key The key in local storage where the entry is found.
 */
function loadNotes(key) {
    // TODO: Select the notes field.
    let notes = document.getElementById('notes');
    // X- TODO: Select the notes field.
    if (localStorage.getItem(key) === "") {
        notes.innerHTML = "Enter your notes here!";
        notes.innerHTML = localStorage.getItem(key);
        console.log(notes.innerText);
    }
    else {
        notes.innerHTML = localStorage.getItem(key);
        console.log(key);
    }
   
    // TODO: Check the local storage at the provided key.
   

      
    //  - If there's an entry, set the notes field's HTML content to the local storage's content.
    //  - If there's no entry, set the default text "Enter your notes here!". 
}

/**
 * Returns a random integer value between min (included) and max (excluded).
 * @param {number} min The minimum value (included).
 * @param {number} max The maximum value (excluded).
 * @returns {number} A random integer value between min (included) and max (excluded).
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Gets the whole thing started.
 */
showRandomImageAtStart();
prepareLinks();
storeNotes();
