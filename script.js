window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementByIs("item-form")

    form.addEventListener("submit", (event) => {
        handleItemForm();
    });
}

function handleItemForm(event, formRef) {
    if(event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();

    return false;
}

    function addItemToShoppingList(){
    let itemName = document.getElementByID("item-name");
    let itemAmount = document.getElementByID("item-amount");
    let id = getRandomInt(0, 10000000);

    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
       removeListItem(id);
    });
}

function createListItemHtml(itemName, itemAmount) {
    return `<li id="item${id}">
                ${itemName} - ${itemAmount}
                <button id="button${id}" type="button">Delete Item</button>
            </li>`;
}
function removeListItem(id) {
    let ListItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);

}

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}