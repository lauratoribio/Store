
window.onload = () => {

    let printToDom = (data) => {

         let body = document.querySelector("body")
         let divCard = document.querySelectorAll(".card")
         let i = 0
         for(let product of data) {
             i = i + 1
             let imageId = "productImage" + i
             let titleId = "productName" + i
             let priceId = "productPrice" + i

             let cardImage = document.getElementById(imageId)
             cardImage.src = product.image
             let cardTitle = document.getElementById(titleId)
             cardTitle.innerText = product.title
             let cardPrice = document.getElementById(priceId)
             cardPrice.innerText = product.price + "€"

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

    fetch('https://fakestoreapi.com/products?limit=11')
    .then(res=>res.json())
    .then(json=> {
        console.log(json)
        printToDom(json)
    })

}