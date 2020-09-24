let increase = document.querySelectorAll(".increase_price")

let decrease = document.querySelectorAll(".decrease_price")

let removes = document.querySelectorAll(".remove")

let toggle_fav = document.querySelectorAll(".fav")



for(let button_increase of increase){
    button_increase.addEventListener("click" , (e) =>{
        let quantity = e.target.parentElement.querySelector(".quantity")
        let price = e.target.parentElement.parentElement.querySelector(".unit-price")
        let unit_price = e.target.parentElement.parentElement.querySelector(".price")
        quantity.innerHTML++
        price.innerHTML = unit_price.innerHTML * quantity.innerHTML
        calculate()
        
    })
}

for(let button_decrease of decrease){
    button_decrease.addEventListener("click" , (e)=>{
        let quantity = e.target.parentElement.querySelector(".quantity")
       let price = e.target.parentElement.parentElement.querySelector(".unit-price")
       let unit_price = e.target.parentElement.parentElement.querySelector(".price")
       if( quantity.innerHTML>0){
        quantity.innerHTML--
        price.innerHTML = price.innerHTML - unit_price.innerHTML
        calculate()
       }
       
    })
}

for(let button_remove of removes){
    button_remove.addEventListener("click" , (e) => {
       if(confirm("Do you want to remove this element?")){
        let element_removed = e.target.parentElement.parentElement.parentElement.querySelector(".shopping-element")
        element_removed.remove(element_removed)
        /* e.target.parentElement.parentElement.parentElement.remove() */
       }
    })
}

for( let fav_button of toggle_fav){
    fav_button.addEventListener("click" , (e) => {
        var heart = e.target.value
        e.target.value = "♡" 
        if(heart == "♡"){
            e.target.value = "❤"
        }
    })

}


function calculate() {
 let prices = document.querySelectorAll(".unit-price")
 let total = document.querySelector("#total")
 let s = 0
 for (price of prices){
   s += price.innerHTML*1
 }
 total.innerHTML =s
}


calculate()

