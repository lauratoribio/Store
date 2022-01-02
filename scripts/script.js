
window.onload = () => {

    let printToDom = (data) => {

         let body = document.querySelector("body")
         let divCard = document.querySelectorAll(".card")
         for(let product of data) {
             let cardImage = document.querySelector(".productImage")
             cardImage.src = product.image
             let cardTitle = document.querySelector(".productName")
             cardTitle.innerText = product.title
             let cardPrice = document.querySelector(".productPrice")
             cardPrice.innerText = product.price
             divCard.appendChild(cardImage)
             divCard.appendChild(cardTitle)
             divCard.appendChild(cardPrice)
         }
    } 

            // let divCard1 = document.getElementById("#card1")
        // for(let product of data) {
        //     let cardImage = document.getElementById("#productImage")
        //     cardImage.src = product.image
        //     let cardTitle = document.getElementById("#productName")
        //     cardTitle.innerText = product.title
        //     let cardPrice = document.getElementById("#productPrice")
        //     cardPrice.innerText = product.price
        //     divCard1.appendChild(cardImage)
        //     divCard1.appendChild(cardTitle)
        //     divCard1.appendChild(cardPrice)
            

        // }

    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=> {
        console.log(json)
        printToDom(json)
    })

}