function enlargeLogo() {
    let img = document.createElement("img");
    if (screen.width <= 400) {
        img.setAttribute('src', 'images/liberty_bell_in_quakertown_small_360px.jpg');
        img.setAttribute('alt', 'Enlarged Version of Liberty house in Quakertown Pennsylvania with replica Liberty Bell');
    } else if (screen.width <= 800 && screen.width > 400) {
        img.setAttribute('src', 'images/liberty_bell_in_quakertown_medium_700px.jpg');
        img.setAttribute('alt', 'Enlarged Version of Liberty house in Quakertown Pennsylvania with replica Liberty Bell');
    } else {
        img.setAttribute('src', 'images/liberty_bell_in_quakertown_large_960px.jpg');
        img.setAttribute('alt', 'Enlarged Version of Liberty house in Quakertown Pennsylvania with replica Liberty Bell');
    }
    document.querySelector('div.lightbox-target').appendChild(img);
};