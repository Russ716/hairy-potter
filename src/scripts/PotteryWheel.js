let pieceNumber = 1
export const makePottery = (clayShape, clayWeight, clayHeight) => {
    let clayObject = {
        shape: clayShape,
        weight: clayWeight,
        height: clayHeight,
        id: pieceNumber++
    }
    return clayObject
}
