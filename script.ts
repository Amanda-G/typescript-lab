interface Mountain {
    mtnName: string,
    height: number
}

const mountians: Mountain[] = [
    { mtnName: "Kilimanjaro", height: 19341 },
    { mtnName: "Everest", height: 29029 },
    { mtnName: "Denali", height: 20310 }
]

const findNameOfTallestMountain = (MountainArray: Mountain[]): string => {
    let tallestMountain: Mountain = MountainArray[0]
    MountainArray.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain
        }
    })
    return tallestMountain.mtnName
}
let tallestMtn = findNameOfTallestMountain(mountians)
console.log(tallestMtn)

interface Product {
    productName: string,
    price: number
}

const products: Product[] = [
    { productName: "Tumbler Cup", price: 9.95 },
    { productName: "Magic Trackpad", price: 130 },
    { productName: "Tums", price: 3.99 },
    { productName: "Smart Tv", price: 289 },
]

const calcAverageProductPrice = (productArray: Product[]): number => {
    let totalPrice = 0;
    productArray.forEach((product) => {
        totalPrice += product.price
    })
    return totalPrice / productArray.length
}
let avgPrice = calcAverageProductPrice(products)
console.log(avgPrice)

interface InventoryItem {
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
    { product: { productName: "motor", price: 10.00 }, quantity: 10 },
    { product: { productName: "sensor", price: 12.50 }, quantity: 4 },
    { product: { productName: "LED", price: 1.00 }, quantity: 20 },
]

const calcInventoryValue = (inventoryArray: InventoryItem[]): number => {
    let totalInventory = 0;
    inventoryArray.forEach((product) => {
        totalInventory += product.quantity * product.product.price
    })
    return totalInventory
}
let totalValue = calcInventoryValue(inventory)
console.log(totalValue)

