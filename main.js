/*+++++++++++++++++++++++ variables +++++++++++++++++++++++++*/ 

navLink = document.querySelector(".links-container");
//%%%%%%%%%%%%%%%% more buttons definitions
moreButton = document.querySelector(".modify-button");
divMorebutton = document.querySelector(".div-modify-button")/*
moreBUTTON = document.querySelector(".more-button");*/
more1 = document.querySelector(".more-B");
more2 = document.querySelector("#more2");
productsContainer = document.querySelector(".products-container");

//%%%%%%%%%%%%%%%% new products data
inputTitle = document.querySelector("#product-title");
inputSummary = document.querySelector("#product-summary");
inputPrice = document.querySelector("#product-price");
let pTitle=[] , pSummary=[], pPrice=[]; 












//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% more buttons functions

moreButton.addEventListener("mouseenter", (e)=> {
        if(e.target.classList.contains("modify-button")){
            moreButton.classList.toggle("popUp");
            console.log("entro");
        }
        e.stopPropagation();

});
    moreButton.addEventListener("mouseout", (e)=> {
    console.log("salio");
    moreButton.classList.toggle("popUp");
});

moreButton.addEventListener("click", ()=> {
    console.log("click");
    if(moreButton.classList.contains("popUp")){
        moreButton.classList.toggle("popUp");
    }
    if(moreButton.classList.contains("turnOut")){
        moreButton.classList.toggle("turnOut");

    }
    if(moreButton.classList.contains("turnIn")){ 
        moreButton.classList.toggle("turnOut");
    }
    /*divMorebutton.classList.toggle("open-div");*/
    divMorebutton.classList.toggle("close-div");
    more1.classList.toggle("hide");
    more1.nextElementSibling.classList.toggle("hide");
    more2.classList.toggle("hide");

    moreButton.classList.toggle("turnIn");


});

/*  ###########################################  */
/*  ###########  insert data block  ###########  */
/*  ###########################################  */


const isMore = divMorebutton.children[0].classList.contains("add");
const isMoreD = divMorebutton.children[1].classList.contains("del");
const dataSection=document.querySelector(".insert-data-container");
const dataCancelButton = document.querySelector("#cancel-button");
const dataUploadButton = document.querySelector("#upload-button");

const productImage = document.getElementById("product-image");
const imageView = document.getElementById("img-view");
const dropArea = document.getElementById("drop-area");
let imgLinked = false;


//---------- data section upload/cancel



dataCancelButton.onclick = function(){
    dataSection.classList.add("none");
}
dataUploadButton.onclick = function(){
    console.log(imgLinked)
    if(!inputTitle.value=="" && !inputSummary.value=="" && !inputPrice.value==""  && imgLinked){
        const newProduct = document.createElement("main-product");
        let imgLink = URL.createObjectURL(productImage.files[0]);
        
        newProduct.setAttribute("image", `${imgLink}`);
        newProduct.setAttribute("ntitle", `${pTitle}`);
        dataId=deleteWhiteSpace(pTitle);
        newProduct.setAttribute("data-id", `${dataId}`);
        newProduct.setAttribute("summary", `${pSummary}`);
        newProduct.setAttribute("price", `${pPrice}`);
        productsContainer.append(newProduct);
        dataSection.classList.add("none");

    }else{
        alert("rellene todos los campos");
    }
}
//---------------- upload image block (drag and drop) -----------------
productImage.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(productImage.files[0]);
    imgLinked=true;
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent= "";
    
};

dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
dropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    productImage.files = e.dataTransfer.files;
    uploadImage();
    
})



//---------- Add webElement


if(isMore){
    divMorebutton.children[0].addEventListener("click",(e)=>{
        dataSection.classList.remove("none");
    });
}
//---------- delete webElement

if(isMoreD){
    divMorebutton.children[1].addEventListener("click",()=>{
        //alert("este quita");
        productsContainer.lastChild.remove();
    });
}

//######################## NEW PRODUCT DATA INPUTS 

inputTitle.addEventListener("keyup", (a)=>{
    console.log("desde titulo");
    pTitle = inputs(a);
    isEmpty (a);
});
inputTitle.addEventListener("blur",(a)=>{
    isEmpty(a);
})
inputSummary.addEventListener("keyup", (a)=>{
    console.log("desde resumen");
    pSummary = inputs(a);
    isEmpty (a);
});
inputSummary.addEventListener("blur",(a)=>{
    isEmpty(a);
})
inputPrice.addEventListener("keyup", (a)=>{
    console.log("desde precio");
    pPrice = inputs(a);
    isEmpty (a);
});
inputPrice.addEventListener("blur",(a)=>{
    isEmpty(a);
})
function inputs (e){
    return(e.target.value)
}
function isEmpty (e){
    if(e.target.value == ""){
        console.log(e.target);                                           //.classList.remove("none");
        console.log(e.target.previousSibling.previousSibling.classList.remove("none"));
    }else{
        console.log(e.target.previousSibling.previousSibling.classList.add("none"));
    }
}
function deleteWhiteSpace(e){
    newE = e.replace(/\s+/g, '');
    console.log(newE);
    return(newE);
}

/*  ###########################################  */
/*  ###########  add shopping cart  ###########  */
/*  ###########################################  */
const cartSection = document.querySelector(".shopping-cart-section");
const cart = document.querySelector(".cart");
const table = document.querySelector("table");
const cartContainer = document.querySelector(".shopping-cart-container");
let productCounter = 0 ; 
let carrito= [];

//console.log(cart)

cart.addEventListener("mouseenter", ()=>{
    cartSection.classList.remove("none");
});
cartContainer.addEventListener("mouseenter", ()=>{
    cartSection.classList.remove("none");
});
cartContainer.addEventListener("mouseleave", hideCartSection);
cart.addEventListener("mouseleave", hideCartSection);

function hideCartSection (){
    cartSection.classList.add("none");
};

registrandoEnventListeners()
function registrandoEnventListeners(){
    productsContainer.addEventListener("click", agregandoAlCarrito);
};

function agregandoAlCarrito(e){
    e.preventDefault();
    productCounter++;

    if(e.target.classList.contains("add-cart-icon")){
        const pickedProduct = e.target.parentElement.parentElement;
        console.log(pickedProduct);
        
        leerDatosProductos(pickedProduct);
    }
}
function limpiarCarrito(){
    while(cartContainer.children[1]){
        //console.log("este es el segunfo hijo del cart container", cartContainer.children[1]);
        cartContainer.removeChild(cartContainer.children[1]);
    }   
}
function leerDatosProductos(father){
    const infoProducts={
        imagen: father.parentElement.children[0].children[0].src,
        titulo: father.children[0].textContent,
        amount: 1,
        precio: father.children[2].children[0].textContent,
        productId: father.parentElement.getAttribute("data-id")
    }

    //confirmo que el producto no este repetido en el carrito
    //nFather = father.parentElement;
    //console.log(nFather);
    console.log(carrito);
    console.log(father.productId);
    const existe = carrito.some( productoX => productoX.productId === infoProducts.productId );
    if(existe){
        const productos = carrito.map( productoX => {
            if(productoX.productId === infoProducts.productId){
                productoX.amount++;
                return productoX;
            }else{
                return productoX;
            }
        })
        carrito = [...productos];
    }else{
        carrito = [...carrito, infoProducts]
        
    }
    console.log(existe);
    
/*
    if(existe){
        console.log(existe);
    }else{
        console.log(existe);
        
    }
    */

    /*
    console.log(infoProducts.imagen);
    console.log(infoProducts.titulo);
    console.log(infoProducts.amount);
    console.log(infoProducts.precio);
    console.log(infoProducts.productId);*/
    console.log(carrito)

    creatingProductCart()
};

function creatingProductCart(){

    limpiarCarrito();

    carrito.forEach( (carrito)=>{  
        const row = document.createElement("tr");
        //console.log("este es el de cuando selecciona tu sabes ", carrito);
        row.innerHTML = `
        <td>
            <img src="${carrito.imagen}" style="width: 75px"></img>
        </td>
        <td>
            <p class="cart-content">${carrito.titulo}</p>
        </td>
        <td>
            <p class="cart-content">${carrito.amount}</p>
        </td>
        <td>
            <p class="cart-content">${carrito.precio}</p>
        </td>
        <td  ><p data-id="${carrito.productId}" class="eliminar">x</p></td>`
        productAdded();
        cartContainer.append(row);
    })
}
cartContainer.onclick = function borrarProducto(e){
    console.log(e.target);
    if(e.target.classList.contains("eliminar")){
        
        let cantidad = e.target.parentElement.parentElement.children[2].children[0].textContent;
        console.log(cantidad);
        console.log("e . target", e.target.getAttribute("data-id"));
        idUsed = e.target.getAttribute("data-id");
        console.log("antes del if",cantidad);
        productCounter--;   
        productAdded()
        if(Number(cantidad) == 1){
            //------------------------------------------------------------------------------- necesito quitar el producto del arreglo 
            targetId = e.target.getAttribute("data-id");
            carrito = carrito.filter( produ => produ.productId !== targetId);
            console.log(carrito);
            e.target.parentElement.parentElement.remove();
        }else{
            cantidad2 = Number(cantidad)-1;
            console.log("cantidad2", cantidad2);
            console.log("cantidad", cantidad);

            const existe = carrito.some( productoX => productoX.productId === idUsed );
            if(existe){
                const productos = carrito.map( productoX => {
                    if(productoX.productId === idUsed){
                        console.log(productoX.amount);
                        productoX.amount--;
                        console.log(productoX.amount);

                        return productoX;
                    }else{
                        return productoX;
                    }
                })
                carrito = [...productos];
            }else{
                carrito = [...carrito, infoProducts]
                
             }
            creatingProductCart()
            console.log(cantidad);

        }
        
        //
    }
    
    
}
cartParent = cart.parentElement; 
    

function productAdded(){
    counter = document.createElement("div");
    counter.classList.add("counter"); 
    //cartParent = cart.parentElement; 
    console.log(cartParent.children.length);
    for(index = cartParent.children.length-1; index >= 0 ; index--) {

        if(cartParent.children[index].classList.contains("counter")){
            console.log(cartParent.children[index].classList.contains("counter"))
            cartParent.children[index].textContent = `${productCounter}`;
            break;
        }else{
            console.log ("no encontro ");
            counter.innerHTML = `
            <p class="p-counter">${productCounter}</p>`;
            cart.parentElement.append(counter);
        }
        
        
        
    }
/*
    if(contiene){
        console.log("si contiene");
    }else{
        console.log("no contiene");
    }*/   
}

/*  ###########################################  */
/*  ###########  Searching section  ###########  */
/*  ###########################################  */
let outMouse = true;
const searchInput = document.getElementById("search-input");    
console.log(navLink)

navLink.children[1].children[1].addEventListener("mouseenter", (e)=>{
    if(e.target.parentElement.classList.contains("link-search")){
        navLink.children[1].classList.add("extended");
        navLink.children[1].children[0].classList.remove("none")
    }
} );
navLink.children[1].children[0].children[0].addEventListener("mouseenter", (e)=>{
    if(e.target.parentElement.classList.contains("link-search")){
        navLink.children[1].classList.add("extended");
        navLink.children[1].children[0].classList.remove("none")
    }
} );

navLink.children[1].children[0].children[0].addEventListener("mouseout", (e)=>{
    console.log("mouse out")
    console.log(e.target)
    if(e.target.parentElement.parentElement.classList.contains("link-search") && outMouse ){
        navLink.children[1].classList.remove("extended");
        navLink.children[1].children[0].classList.add("none")
    }
} );

navLink.children[1].children[0].children[0].addEventListener("click", (e)=>{
    outMouse = false;

    /* funcion blur */
    window.onclick = function outImput(e){
    console.log(e.target);
    e.target.addEventListener("blur",()=>{console.log("click en pantalla")
        outMouse = true;
    })
}

    
});

searchInput.addEventListener("keyup", (a)=>{
    pSearch = inputs(a).toUpperCase();
    cantProduct = productsContainer.children.length;

    if(!pSearch==""){
        console.log("desde search");
        for (i=0; i<cantProduct; i++){
            producTitle = productsContainer.children[i].children[1].children[0];
            productText = producTitle.textContent.toUpperCase();
            console.log("for")
            if(!productText.includes(pSearch)){
                console.log("no contiene")
                producTitle.parentElement.parentElement.style.display = "none";

            }
        }
    }else{
        for (i=0; i<cantProduct; i++){
            productsContainer.children[i].style.display = "block";
        }
    }
    /* buscando el producto */
   

});

