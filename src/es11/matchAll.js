const regex =/\b(manzana)+\b/g;
const fruta = 'manzana,mango,coco, tamarindo,manzana ';

for (const match of fruta.matchAll(regex)){
    console.log(match);
}