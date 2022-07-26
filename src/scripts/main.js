// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Cocoa Mug", 1, 4)
let ashtray = makePottery("Cigar rest", 2, 1)
let chipDip = makePottery("Chip 'n Dip", 9, 6)
let centerpiece = makePottery("Cornucopia", 4, 15)
let vase = makePottery("Carnations vase", 7, 10)
//console.log(mug);
// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 222)
let firedAshtray = firePottery(ashtray, 221)
let firedChipDip = firePottery(chipDip, 220)
let firedCenterpiece = firePottery(centerpiece, 2199)
let firedVase = firePottery(vase, 2198)
//console.log(firedMug);
// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(firedMug)
let sellAshtray = toSellOrNotToSell(firedAshtray)
let sellChipDip = toSellOrNotToSell(firedChipDip)
let sellCenterpiece = toSellOrNotToSell(firedCenterpiece)
let sellVase = toSellOrNotToSell(firedVase)
//console.log(sellMug);
let printThis = PotteryList()
document.querySelector(".potteryList").innerHTML = printThis;

// Invoke the component function that renders the HTML list
/*let mugHTML = PotteryList(sellMug)
let ashtrayHTML = PotteryList(sellAshtray)
let chipDipHTML = PotteryList(sellChipDip)
let centerpieceHTML = PotteryList(sellCenterpiece)
let vaseHTML = PotteryList(sellVase)
*/
//console.log(mugHTML);
//let parentHTMLElement = document.querySelector(".PotteryList")
//parentHTMLElement = usePottery()