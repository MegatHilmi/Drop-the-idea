function sendItBtn(){
    let bot={
        TOKEN: "2120048232:AAGGyf6NgDnEjSwAw9gyrJ82-Ss3cEgRJ0U",
        chatID: "397362062"
    }

    let message = document.querySelector("#text-area").value;

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`)
    console.log(message);
    document.querySelector(".popup-background").style.visibility = "visible";
    document.querySelector(".transparent-click").style.visibility = "visible";
    GSAP_animation(".animation-move");
    document.querySelector(".input").reset();
}


//---------------------function to call close send popup---------------------------------
function popupClose(){
    document.querySelector(".popup-background").style.visibility = "hidden";
    document.querySelector(".transparent-click").style.visibility = "hidden";
}


//---------------------function to call close and open link popup-------------------------------
function linkOpen(){
    document.querySelector(".link-popup-background").style.visibility = "visible";
    GSAP_animation(".link-animation-move");
}

function linkClose(){
    document.querySelector(".link-popup-background").style.visibility = "hidden";
}

//-----------------------------------GSAP animation for poping the popup-----------------------------

function GSAP_animation(box){
    TweenLite.from(box, 1, {bottom: 30, ease: Power2.easeOut});
    console.log("hahahah")
}