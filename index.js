var taskList = [];
// var itemList = [];

function addCardName() {
    const cardName = document.getElementById("pop-up-text").value;

    const tempObj = {
        name: cardName,
        items: [] 
    };

    taskList.push(tempObj);
    console.log(cardName);
    console.log(taskList);
    createCard();
}

function addItemName () {
    const itemText = document.getElementById("item-text").value;

    const itemObj = {
        item: itemText
    }

    for (var i = 0; i < taskList.length; i++) {
        for (var j = 0; j < taskList[i].items.length; j++) {
            taskList[i].items.push(itemObj);
        }
    }

    // taskList.items.push(itemObj);
    console.log(itemText);
    console.log(taskList);
    createItem();
}

function createItem() {
    // cardContentLeft.innerText = itemText.value;
    const cardBodyTop = document.getElementsByClassName("card-body-top");
    const realContent = document.createElement("div");
    const cardContentLeft = document.createElement("div");
    const cardContentRight = document.createElement("div");
    const markDoneBtn = document.createElement("a");

    realContent.setAttribute("class", "real-content");
    cardContentLeft.setAttribute("class", "card-content-left");
    cardContentRight.setAttribute("class", "card-content-right");
    markDoneBtn.setAttribute("class", "mark-done-btn");

    cardContentRight.appendChild(markDoneBtn);
    realContent.appendChild(cardContentLeft);
    realContent.appendChild(cardContentRight);

    for (var i = 0; i < cardBodyTop.length; i++) {
        cardBodyTop[i].appendChild(realContent);
    }

    // cardBodyTop.appendChild(realContent);

    // const itemText = document.getElementById("item-text").value;

    // const itemObj = {
    //     item: itemText
    // }


    // for (var i = 0; i < taskList.length; i++) {
    //         taskList[i].items.push(itemObj);
    // }

    // for (var i = 0; i < itemList.length; i++) {
    //     cardContentLeft.innerText = itemList[i].item;
    //  }



    for (var i = 0; i < taskList.length; i++) {
        for (var j = 0; j < taskList[i].items.length; j++) {
            // taskList[i].items[j].push(itemObj);
            // taskList[i].items[j].push(itemObj);
            cardContentLeft.innerText = taskList[i].items[j].item;
        }
    }
}



function createCard () {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    const newCard = document.createElement("div");
    const cardHead = document.createElement("div");
    const cardHeadContent = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardBodyTop = document.createElement("div");
    const cardBodyBottom = document.createElement("div");
    const cardBottom1 = document.createElement("div");
    const cardBottom2 = document.createElement("div");
    const cardDeleteBtn = document.createElement("a");
    const cardTaskAddBtn = document.createElement("a");

    newCard.setAttribute("class", "main-card");
    cardHead.setAttribute("class", "main-card-head");
    cardHeadContent.setAttribute("class", "card-head-content");
    cardBody.setAttribute("class", "main-card-body");
    cardBodyTop.setAttribute("class", "card-body-top");
    cardBodyBottom.setAttribute("class", "card-body-bottom");
    cardBottom1.setAttribute("class", "card-bottom1");
    cardBottom2.setAttribute("class", "card-bottom2");
    cardDeleteBtn.setAttribute("class", "card-delete-btn");
    cardTaskAddBtn.setAttribute("class", "card-task-add-btn");


    //////////////////////////////
    // For Name on top of the card
    for (var i = 0; i < taskList.length; i++) {
        cardHeadContent.innerText = taskList[i].name;
    }
    // markDoneBtn.innerText = "Mark Done";
    cardDeleteBtn.innerText = "-";
    cardTaskAddBtn.innerText = "+";


     ////////////////
     // For Each Item
    //  for (var i = 0; i < taskList.length; i++) {
    //     cardContentLeft.innerText = taskList[i].items.item;
    //  }


    cardBottom2.appendChild(cardTaskAddBtn);
    cardBottom1.appendChild(cardDeleteBtn);
    cardBodyBottom.appendChild(cardBottom1);
    cardBodyBottom.appendChild(cardBottom2);

    // cardContentRight.appendChild(markDoneBtn);
    // cardBodyTop.appendChild(cardContentLeft);
    // cardBodyTop.appendChild(cardContentRight);

    cardBody.appendChild(cardBodyTop);
    cardBody.appendChild(cardBodyBottom);

    cardHead.appendChild(cardHeadContent);

    newCard.appendChild(cardHead);
    newCard.appendChild(cardBody);
    newItem.appendChild(newCard);
    list.appendChild(newItem);


    cardTaskAddBtn.onclick =  function createItemPopUp () {
        const modal = document.getElementById("create-item-pop-up");
        modal.showModal();
        console.log("shown");
    }
}




function showPopUp () {
    const modal = document.getElementById("create-card-pop-up");
    modal.showModal();
    console.log("shown");
}

function hidePopUp () {
    const modal2 = document.getElementById("create-card-pop-up");
    modal2.close();
    console.log("hidden");
}

function closeItemPopUp () {
    const modal = document.getElementById("create-item-pop-up");
    modal.close();
    console.log("hidden");
}








    // var allItems = document.querySelectorAll("li");
    // var tab = [];
    // var index;

    // for (var i = 0; i < allItems.length; i++) {
    //     tab.push(allItems[i].innerHTML)
    // }

    // for (var i = 0; i < allItems.length; i++) {
    //     allItems[i].onclick = function() {
    //         // allItems.remove();

    //         index = tab.indexOf(this);
    //         console.log(index);
    //         console.log(allItems);
    //         // this.innerHTML.remove();
    //     }
    // }


        // cardDeleteBtn.onclick = function deleteCard () {
    //     // const newCard = document.getElementById("main-card");

    //     // newCard.remove()
    // }


    // for (var i = 0; i <allItems.length; i++) {
    //     tab.push(allItems[i].cardBodyTop)
    //     console.log(allItems[i].cardBodyTop);
    // }



















