// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.


// Kodu buraya yazalım...

const ages: number[] = [];



// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.


// Kodu buraya yazalım...

const gameBoard: string[][] = [];


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}


// Kodu buraya yazalım...

type Product = {
    name: string;
    price: number;
};

const ornekUrun: Product = { name: "coffee mug", price: 11.50 };



// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.


// Kodu buraya yazalım...
// Ürünlerin fiyat toplamını hesaplayan fonksiyon
function getTotal(products: Product[]): number {
    let toplam = 0;

    for (const product of products) {
        toplam += product.price;
    }

    return toplam;
}

// Test etmek için örnek bir array ve console.log (İsterseniz ekleyebilirsiniz):
const urunListesi: Product[] = [
    { name: "coffee mug", price: 11.50 },
    { name: "notebook", price: 8.50 },
    { name: "pen", price: 5.00 }
];

console.log("Toplam Tutar:", getTotal(urunListesi)); 
