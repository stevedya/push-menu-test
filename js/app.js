(function () {
    /* wrapped in an iffe for best practice */

    /* Select all elements needed for nav controls */
    let navButton = document.querySelector('.hamburger');
    let navClose = document.querySelector('.close-nav');
    let pushNav = document.querySelector('.push-nav');
    let wrapper = document.querySelector('.wrapper');

    //event listener for clicks on nav button
    navButton.addEventListener('click', function (e) {
        //Prevent default link action
        e.preventDefault();
        //Use a class to toggle the nav open or closed
        pushNav.classList.toggle('open');
        //Move the content right as well to make it look pushed
        wrapper.classList.toggle('nav-open');
    });

    //event listener for clicks on close button
    navClose.addEventListener('click', function (e) {
        e.preventDefault();
        pushNav.classList.remove('open');
        wrapper.classList.remove('nav-open');

    });


    /* Dropdown nav js */
    //Using all so that if there are more dropdowns they will work too
    let dropdownLinks = document.querySelectorAll('.dropdown-link');
    for (let link of dropdownLinks) {
        link.addEventListener('click', function (e) {
            //Toggle dropdown open class
            this.classList.toggle('dropdown-open');
        });
    }


})();