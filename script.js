// ===============================
// PAGE CHANGE
// ===============================

function goToPage(pageId, choice = null) {

    document
        .querySelectorAll(".page")
        .forEach(page => page.classList.remove("active"));

    const target =
        document.getElementById(
            typeof pageId === "string"
                ? pageId
                : `page${pageId}`
        );

    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }


    // ==========================
    // PAGE 3
    // ==========================

    if(pageId===3){

        document
        .getElementById("page3Text")
        .textContent=

        "Agar aapne YES choose kiya, toh main samajh gaya ki kabhi-kabhi maine aapko call karke pareshaan kiya. Uske liye dil se sorry. Agar aapne NO choose kiya, toh matlab maine itna disturb nahi kiya jitna mujhe lagta tha. Dono cases me, aap mere liye hamesha special rahogi. 💗";

    }



    // ==========================
    // PAGE 5
    // ==========================

    if(pageId===5){

        document
        .getElementById("page5Text")
        .textContent=

        choice==="yes"

        ?

        "Thank you... 💖 Agar aap mujhe good boy samajhti ho toh ye mere liye bohot special baat hai. Main hamesha aur better banne ki koshish karunga."

        :

        "Agar aapko lagta hai ki main abhi good boy nahi hu toh bhi main improve karunga. Aapki opinion mere liye bohot important hai. 🤍";

    }



    // ==========================
    // PAGE 7
    // ==========================

    if(pageId===7){

        if(choice==="yes"){

            document
            .getElementById("page7Title")
            .textContent="Thank You 💖";

            document
            .getElementById("page7Text")
            .textContent=

            "Aapne mujhe maaf kar diya... Iske liye dil se thank you. Main future me aur careful rahunga. 🌸";

        }

        else{

            document
            .getElementById("page7Title")
            .textContent="I Understand 🤍";

            document
            .getElementById("page7Text")
            .textContent=

            "Agar aap abhi maaf nahi karna chahti toh bhi main aapke decision ki respect karta hu. Main wait karunga jab tak aap comfortable feel karo.";

        }

    }

}
// ====================================
// FLOATING HEARTS
// ====================================

function createHearts(){

    const container=document.querySelector(".hearts");

    if(!container) return;

    for(let i=0;i<22;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=
        (6+Math.random()*5)+"s";

        heart.style.animationDelay=
        Math.random()*4+"s";

        heart.style.opacity=
        .3+Math.random()*.7;

        heart.style.transform=
        `scale(${0.6+Math.random()}) rotate(45deg)`;

        container.appendChild(heart);

    }

}



// ====================================
// FLOATING SPARKLES
// ====================================

function createSparkles(){

    const container=document.querySelector(".sparkles");

    if(!container) return;

    const icons=["✨","🌸","💖","🎀","🐾"];

    for(let i=0;i<25;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.innerHTML=
        icons[Math.floor(Math.random()*icons.length)];

        s.style.left=Math.random()*100+"%";

        s.style.top=Math.random()*100+"%";

        s.style.animationDelay=
        Math.random()*4+"s";

        s.style.fontSize=
        (12+Math.random()*16)+"px";

        container.appendChild(s);

    }

}



// ====================================
// PAGE 2 BUTTON GAME
// ====================================

function makeYesButtonRun(buttonId,rowId,noButtonId){

    const yesBtn=document.getElementById(buttonId);

    const row=document.getElementById(rowId);

    const noBtn=document.getElementById(noButtonId);

    let scale=1;

    if(!yesBtn||!row||!noBtn) return;

    function move(){

        scale+=0.12;

        noBtn.style.transform=
        `scale(${scale})`;

        const rowRect=row.getBoundingClientRect();

        const btnRect=yesBtn.getBoundingClientRect();

        const maxX=Math.max(
            rowRect.width-btnRect.width,
            20
        );

        yesBtn.style.position="absolute";

        yesBtn.style.left=
        Math.random()*maxX+"px";

        yesBtn.style.top=
        Math.random()*90+"px";

    }

    yesBtn.addEventListener("mouseenter",move);

    yesBtn.addEventListener("click",move);

}
// ====================================
// PAGE 4 BUTTON GAME
// ====================================

function makeNoButtonRun(buttonId,rowId,yesButtonId){

    const noBtn=document.getElementById(buttonId);

    const row=document.getElementById(rowId);

    const yesBtn=document.getElementById(yesButtonId);

    let scale=1;

    if(!noBtn||!row||!yesBtn) return;

    function move(){

        scale+=0.12;

        yesBtn.style.transform=
        `scale(${scale})`;

        const rowRect=row.getBoundingClientRect();

        const btnRect=noBtn.getBoundingClientRect();

        const maxX=Math.max(
            rowRect.width-btnRect.width,
            20
        );

        noBtn.style.position="absolute";

        noBtn.style.left=
        Math.random()*maxX+"px";

        noBtn.style.top=
        Math.random()*90+"px";

    }

    noBtn.addEventListener("mouseenter",move);

    noBtn.addEventListener("click",move);

}



// ====================================
// DOM LOADED
// ====================================

document.addEventListener("DOMContentLoaded",()=>{

    createHearts();

    createSparkles();

    makeYesButtonRun(
        "page2Yes",
        "page2Buttons",
        "page2No"
    );

    makeNoButtonRun(
        "page4No",
        "page4Buttons",
        "page4Yes"
    );

});



// ====================================
// SMALL CLICK ANIMATION
// ====================================

document.addEventListener("click",(e)=>{

    if(!e.target.classList.contains("btn")) return;

    e.target.animate(

        [

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.94)"
            },

            {
                transform:"scale(1)"
            }

        ],

        {

            duration:180

        }

    );

});



// ====================================
// FLOATING EFFECT ON CARDS
// ====================================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=(e.clientX-rect.left)/rect.width-.5;

        const y=(e.clientY-rect.top)/rect.height-.5;

        card.style.transform=

        `rotateY(${x*6}deg)
         rotateX(${y*-6}deg)
         translateY(-4px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});