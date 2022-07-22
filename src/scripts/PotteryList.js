import { usePottery } from "./PotteryCatalog.js"
//import { toSellOrNotToSell } from "./PotteryCatalog.js"
//^The PotteryList function must get the items to be sold from the PotteryCatalog.js module.
//let salesList = toSellOrNotToSell()
let potteryString = ``
export const PotteryList = () => {
    //^Define and export a PotteryList function.
    let potteryArray = usePottery()
    
    for (const piece of potteryArray) { 
        potteryString += `<section class="pottery" id="pottery--${piece.id}">
        <h2 class="pottery__shape">${piece.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${piece.weight} grams and is ${piece.height} cm in height
        </div>
        <div class="pottery__price">
        Price is $${piece.price}
        </div>
        </section>`
    }
    return potteryString
}
console.log(PotteryList());

//The PotteryList function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.