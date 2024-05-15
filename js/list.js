const shoppingList = ['twix', 'pringles', 'cioccolato', 'fanta', 'noodles', 'acqua'];

const ulList = document.querySelector("ul");

let index = 0;

while (index < shoppingList.length) {
    const liList = document.createElement("li");
    liList.append(shoppingList[index]);
    ulList.appendChild(liList);

    index++
}