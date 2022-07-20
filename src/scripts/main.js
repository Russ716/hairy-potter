// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Cocoa Mug", 5, 4)
let ashtray = makePottery("Cigar rest", 3, 1)
let chipDip = makePottery("Chip 'n Dip", 12, 6)
let centerpiece = makePottery("Cornucopia", 25, 15)
let vase = makePottery("Carnations vase", 10, 15)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 200)
let firedAshtray = firePottery(ashtray, 2000)
let firedChipDip = firePottery(chipDip, 2100)
let firedCenterpiece = firePottery(centerpiece, 2200)
let firedVase = firePottery(vase, 2300)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(firedMug)
let sellAshtray = toSellOrNotToSell(firedAshtray)
let sellChipDip = toSellOrNotToSell(firedChipDip)
let sellCenterpiece = toSellOrNotToSell(firedCenterpiece)
let sellVase = toSellOrNotToSell(firedVase)

// Invoke the component function that renders the HTML list



