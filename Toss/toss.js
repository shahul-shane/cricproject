let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipbtn = document.querySelector("#flip-button");
let rstbtn = document.querySelector("#reset-button");


flipbtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards"
        }, 100);
        tails++;
    }
    disableBtn();
});


function disableBtn(){
    flipbtn.disabled = true;
    setTimeout(function(){
        flipbtn.disabled = false;
    }, 3000);
}

rstbtn.addEventListener("click",() => {
    coin.style.animation = "none";
});