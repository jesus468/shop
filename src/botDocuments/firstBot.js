/*------------------------------------- variables -------------------------------------*/
const mainBotContainer = document.createElement("DIV");
const optionsContainer = document.createElement("DIV");
const characterContainer = document.createElement("DIV");
const botCharacter = document.createElement("IMG");
const tourBody = document.querySelector(".inner-body");

var j = 0;
manButton = document.createElement("button");
womanButton = document.createElement("button");
const yesButtonSE = document.createElement("button");
noButtonSE = document.createElement("button");
okButton = document.createElement("button");
genderVer = true;

/*-------------------- bot main container --------------------*/

mainBotContainer.classList.add("bot-main-container");
mainBotContainer.style.width = "200px";
mainBotContainer.style.height = "250px";
//mainBotContainer.style.border = "solid black 2px"
mainBotContainer.style.position = "fixed"
mainBotContainer.style.right = "0"
mainBotContainer.style.bottom ="0"
mainBotContainer.style.zIndex ="3"
mainBotContainer.setAttribute("id","main-bot-container")

tourBody.insertBefore(mainBotContainer, tourBody.firstChild);

/*-------------------- options Container --------------------*/
optionsContainer.style.width = "100%"
optionsContainer.style.height = "100%"
optionsContainer.style.position = "absolute"
optionsContainer.classList.add("options-container");

mainBotContainer.appendChild(optionsContainer)

/*-------------------- character Container --------------------*/
characterContainer.style.width = "100%"
characterContainer.style.height = "100%"
characterContainer.style.position = "absolute"
characterContainer.classList.add("character-container");

mainBotContainer.appendChild(characterContainer)


/*-------------------- imagen-bot --------------------*/

botCharacter.style.width = " 100%"
botCharacter.classList.add("masculino")
botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/default.png`);    

characterContainer.appendChild(botCharacter);

/*------------------------------------- Listeners -------------------------------------*/
mainBotContainer.addEventListener("mouseenter", ()=>{
    if(genderVer){
        botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/salutation.png`);
        createCharacterDialog();
        characterDialog.textContent="Hola!!!";
        characterDialogContainer.appendChild(characterDialog);
        mainBotContainer.appendChild(characterDialogContainer);
    }
})

mainBotContainer.addEventListener("mouseleave", ()=>{
    if(genderVer){
        botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/default.png`);   
        characterDialogContainer.remove();
    }
})
optionsContainer.addEventListener("click", (e)=>{
    characterDialogContainer.remove();
    if(e.target.id === "ok-button"){
        genderVer = false;
    botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/deLado.png`);    

        while(optionsContainer.firstChild){
            optionsContainer.firstChild.remove();
        }
        characterDialogContainer.remove();

        firstQuestion();
        
    }
    else if(e.target.id === "masculine-gender"){
        botCharacter.classList.add("masculino");
        botCharacter.classList.remove("femenino")
        botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/default.png`);    
    }
    else if(e.target.id === "femenine-gender"){
        botCharacter.classList.remove("masculino");
        botCharacter.classList.add("femenino")
        botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/default.png`);
    }
    else if(e.target.id==="" && genderVer){
        
            /*+++++++++++++ gender question +++++++++++++*/
            borrar=document.querySelector(".hasclick");
            if(borrar){
                borrar.remove();
            }

            createCharacterDialog();
            characterDialog.textContent="Que genero prefieres?";
            characterDialogContainer.appendChild(characterDialog)
            mainBotContainer.appendChild(characterDialogContainer);

            /*+++++++++++++ gender buttons +++++++++++++*/

            firstButtons = document.createElement("DIV");
            secondButtons = document.createElement("DIV");

            firstButtons.classList.add("line-buttons-1");
            firstButtons.classList.add("line-buttons");

            secondButtons.classList.add("line-buttons-2");
            secondButtons.classList.add("line-buttons");


            manButton.classList.add("character-buttons");
            womanButton.classList.add("character-buttons");
            okButton.classList.add("character-buttons");


            okButton.setAttribute("id", "ok-button");
            manButton.setAttribute("id", "masculine-gender");
            womanButton.setAttribute("id", "femenine-gender");

            okButton.textContent= "Ok";
            manButton.textContent = "Masculino";
            womanButton.textContent = "Femenino";

            optionsContainer.appendChild(firstButtons);
            optionsContainer.appendChild(secondButtons);
            firstButtons.appendChild(manButton);
            firstButtons.appendChild(womanButton);
            secondButtons.appendChild(okButton);
        
    }
    else if(e.target.id === "yes-button"){
        console.log(characterDialogContainer)
        characterDialogContainer.remove();
        optionsContainer.firstChild.remove();
        firstQuestion();

    }
    else if(e.target.id==="no-button"){
        characterDialogContainer.remove();   
        createCharacterDialog();
        characterDialog.textContent="vale, hasta luego!";
        characterDialogContainer.appendChild(characterDialog)
        mainBotContainer.appendChild(characterDialogContainer);
        optionsContainer.firstChild.remove();
        botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/parting.png`);    


        setTimeout(()=>{
            botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/default.png`);    
            todos=document.querySelectorAll(".character-dialog-container");
            console.log(todos.length);
            for(i=0;i<todos.length;i++){
                console.log("borrando",i)
                todos[i].remove();
            }
        },2500)
    }
    else{
        createCharacterDialog()
        characterDialog.textContent="¿Necesitas algo más?";
        characterDialogContainer.appendChild(characterDialog)
        mainBotContainer.appendChild(characterDialogContainer);

        somethingElse();
    }
        

    
})


/*------------------------------------- functions -------------------------------------*/

function createCharacterDialog(){   
    characterDialogContainer = document.createElement("DIV");
    characterDialogContainer.classList.add("character-dialog-container");
    characterDialogContainer.style.bottom = mainBotContainer.clientHeight-30+"px";

    characterDialog = document.createElement("P");
    characterDialog.classList.add("character-dialog")
}

function firstQuestion(){
    characterDialogContainer.remove();

    createCharacterDialog();
    characterDialog.textContent="¿En qué puedo ayudarte?";
    characterDialogContainer.appendChild(characterDialog)
    mainBotContainer.appendChild(characterDialogContainer);

    OptionList = document.createElement("UL");

    Option1 = document.createElement("LI");
    Option2 = document.createElement("LI");
    Option3 = document.createElement("LI");
    Option4 = document.createElement("LI");

    Option1.textContent="¿Para qué sirve la página?";
    Option2.textContent="¿Dónde veo mis productos seleccionados?";
    Option3.textContent="¿Puedo cambiar el personaje?";
    Option4.textContent="Quiero un tour completo";

    Option1.setAttribute("id","option1");
    Option2.setAttribute("id","option2");
    Option3.setAttribute("id","option3");
    Option4.setAttribute("id","option4");

    Option1.classList.add("character-options");
    Option2.classList.add("character-options");
    Option3.classList.add("character-options");
    Option4.classList.add("character-options");

    OptionList.appendChild(Option1);
    OptionList.appendChild(Option2);
    OptionList.appendChild(Option3);
    OptionList.appendChild(Option4);

    characterDialogContainer.appendChild(OptionList);

    optionsLinten = document.querySelectorAll(".character-options");
        console.log(optionsLinten);
        console.log(optionsLinten.length);

        for(i=0; i < optionsLinten.length ;i++){
            optionsLinten[i].addEventListener("click",(e)=>{
                if(e.target.id === "option1"){
                    option1Answer();
                }else if(e.target.id === "option2"){
                    option2Answer();
                    
                }else if(e.target.id === "option3"){
                    option3Answer();
                    
                }else if(e.target.id === "option4"){
                    option4Answer();
                    
                }
            })
        }


};

function option1Answer(){
    botCharacter.setAttribute("src",`src/images/bot/${botCharacter.classList}/firstQuestion.png`);    
    characterDialogContainer.remove();
    createCharacterDialog();
    characterDialog.textContent="Es la maquetación de una tienda virtual, donde puedes  añadir tus objetos deseados a tu carrito de compras";
    characterDialogContainer.appendChild(characterDialog)
    mainBotContainer.appendChild(characterDialogContainer);
};
function option2Answer(){
    characterDialogContainer.remove();
    createCharacterDialog();
    characterDialog.textContent="En la parte superior derecha de tu pantalla, hay un icono de carrito de compras, pon el mouse sobre el, y ese es";
    characterDialogContainer.appendChild(characterDialog)
    mainBotContainer.appendChild(characterDialogContainer);
};
function option3Answer(){
    characterDialogContainer.remove();
    createCharacterDialog();
    characterDialog.textContent="Por supuesto";
    characterDialogContainer.appendChild(characterDialog)
    mainBotContainer.appendChild(characterDialogContainer);
    setTimeout(()=>{
        characterDialogContainer.remove();
        genderVer = true;
        createCharacterDialog();
        characterDialog.textContent="Has un click";
        characterDialogContainer.classList.add("hasclick")
        characterDialogContainer.appendChild(characterDialog)
        mainBotContainer.appendChild(characterDialogContainer);

    },1500)
};
function option4Answer(){


    tourBackground = document.createElement("DIV");
    tourBackground.classList.add("tour-background");
    tourBackground.classList.add("full-screen");

    tourClickScreen = document.createElement("DIV");
    tourClickScreen.classList.add("full-screen");
    tourClickScreen.style.zIndex = "5";


    buto1 = document.createElement("A");
    buto2 = document.createElement("A");
    buto3 = document.createElement("A");


    buto1.classList.add("character-buttons")
    buto2.classList.add("character-buttons")
    buto3.classList.add("character-buttons")

    //buto1.setAttribute("href", "#name-logo");
    //buto2.setAttribute("href", "#carrito");
    //buto3.setAttribute("href", "#main-bot-container");

    buto1.textContent ="logo";
    buto2.textContent ="carrito";
    buto3.textContent ="bot";



    tourBody.appendChild(tourBackground);
    tourBody.appendChild(tourClickScreen);
    characterDialogContainer.remove();



    /*-------------- mover bot --------------*/
    mainBotContainer.style.left= (document.body.clientWidth/2) +"px";
    mainBotContainer.style.bottom ="25%";

    characterDialogContainer.remove();   
    createCharacterDialog();
    characterDialog.textContent=`Pues comencemos
    
    click para continuar`;
    characterDialogContainer.appendChild(characterDialog)
    mainBotContainer.appendChild(characterDialogContainer);

    tourClickScreen.addEventListener("click",()=>{
        j++;

        liContainer = document.querySelector(".links-container");
        switch (j){
            case 1:{
                characterDialogContainer.remove();   
                createCharacterDialog();
                characterDialog.textContent= "Empecemos por la parte superior";
                characterDialogContainer.appendChild(characterDialog)
                mainBotContainer.appendChild(characterDialogContainer);
                break;
            }
            case 2:{
                characterDialogContainer.remove();   
                createCharacterDialog();
                characterDialog.textContent= "Aquí tenemos el logo de la marca";
                characterDialogContainer.appendChild(characterDialog)
                mainBotContainer.appendChild(characterDialogContainer);

                tourBody.style.scale = "1.5";
                tourBody.style.transform= "translate(20%,20%)";
                mainBotContainer.style.transform ="translate(-70%,-50%)"
                break;

            } 
            case 3:{
                characterDialogContainer.remove();   
                createCharacterDialog();
                characterDialog.textContent= "De este lado encontramos varias opciones";
                characterDialogContainer.appendChild(characterDialog)
                mainBotContainer.appendChild(characterDialogContainer);

                tourBody.style.transform= "translate(-18%,17%)";
                mainBotContainer.style.transform ="translate(90%,-50%)"
                break;
            } 
            case 4:{
                characterDialogContainer.remove();   
                createCharacterDialog();
                characterDialog.textContent= "Aqui puedes ir a una página que te da más información sobre nosotros";
                characterDialogContainer.appendChild(characterDialog)
                mainBotContainer.appendChild(characterDialogContainer);

                liContainer.children[0].classList.add("seleccionado-tour");
                break;
            } 
            case 5:{
                characterDialogContainer.remove();   
                createCharacterDialog();
                characterDialog.textContent= "Con poner el mouse encima de este icono, se despliega el buscador";
                characterDialogContainer.appendChild(characterDialog)
                mainBotContainer.appendChild(characterDialogContainer);

                liContainer.children[0].classList.remove("seleccionado-tour");
                liContainer.children[1].classList.add("seleccionado-tour");
                break;
            }
            case 6:{
                characterDialogContainer.remove();   
                createCharacterDialog();
                characterDialog.textContent= "Con poner el mouse encima de este icono, ves tus productos en el carrito";
                characterDialogContainer.appendChild(characterDialog)
                mainBotContainer.appendChild(characterDialogContainer);

                liContainer.children[1].classList.remove("seleccionado-tour");
                liContainer.children[2].classList.add("seleccionado-tour");
                break;
            } 
        }
        
        console.log("iteracion:", j);
    })


                    //buto1.addEventListener("click",(e)=>{
                //
                    //    console.log("e. clientx", e.clientX,"e. clientY", e.clientY);
                    //    console.log("body height", document.body.clientHeight,"body width", document.body.clientWidth);
                    //    console.log("tourbody height", tourBody.clientHeight,"tourbody width", tourBody.clientWidth);

                    //    tourBody.style.transform= "translate(11%,11%)";
                //
                    //})



};
function somethingElse(){
    firstButtons = document.createElement("DIV");
    firstButtons.classList.add("line-buttons");

    yesButtonSE.setAttribute("id","yes-button");
    noButtonSE.setAttribute("id","no-button");

    yesButtonSE.classList.add("character-buttons");
    noButtonSE.classList.add("character-buttons");

    yesButtonSE.textContent="si";
    noButtonSE.textContent="no";

    if(!optionsContainer.firstChild){
        firstButtons.appendChild(yesButtonSE);
        firstButtons.appendChild(noButtonSE);
        optionsContainer.appendChild(firstButtons);
    }
    
};