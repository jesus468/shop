class mainProduct extends HTMLElement{
    constructor(){ 
        super ();
        this.ntitle;
        this.summary;
        this.price;
        this.image;
    }

    static get observedAttributes(){
        return["ntitle","summary","price","image"];
    }

    attributeChangedCallback(nameAtr,oldValue,newValue){
        switch(nameAtr){
            case "ntitle":
                this.ntitle = newValue;
            break;
            case "summary":
                this.summary = newValue;
            break;
            case "price":
                this.price = newValue;
            break;
            case "image":
                this.image = newValue;
            break;
        }/*
        if(nameAtr==nTitle){
            this.nTitle = "bueno jsgdf";
        }*/
    }
    connectedCallback(){
        this.style.width = "300px";
        /*this.style.height = "375px";*/
        this.style.margin = "20px";
        this.style.borderRadius = "20px";
        this.innerHTML =
        `<div style="display:flex; justify-content:center;" class="img">
            <Image style="/object-fit: cover; WIDTH:90%; margin: 10px;border-radius: 20px" src="${this.image}"></Image>
        </div>                            
        <div class="product" >
            <h2 style="margin: 0 auto;">${this.ntitle}</h2>  
            <p style="justify-content: left;">${this.summary}</p> 
            
            <div style="display: flex; justify-content: space-between; padding: 15px 40px">
                <h4>${this.price+"$"}</h4> 
                <i title="Add to shopping cart" class="fa-solid fa-cart-shopping add-cart-icon"  style="color: #92959b;" ></i>
            </div>  
        </div>`
    } 
}

window.customElements.define(("main-product") ,mainProduct);







