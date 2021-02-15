const mainNav = document.querySelector('.main-nav')

function toggleMainNav(){
    mainNav.classList.toggle('active')
}

mainNav.addEventListener('click', toggleMainNav);


function changeImage () {

    if (document.getElementById("imgClickAndChange").src =="https://placebear.com/200/300")
    {

        document.getElementById("imgClickAndChange").src = "https://placebear.com/g/200/300";

    }

    else{

        document.getElementById("imgClickAndChange").src = "https://placebear.com/200/300";

    }

}