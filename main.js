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
    document.querySelector(".input").reset();
}

function popupClose(){
    document.querySelector(".popup-background").style.visibility = "hidden";
    document.querySelector(".transparent-click").style.visibility = "hidden";
}