var taskList = [];

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

function addCardName() {
    const cardName = document.getElementById("pop-up-text").value;

    const tempObj = {
        name: cardName
    };

    taskList.push(tempObj);
    createCard();
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

    cardDeleteBtn.innerText = "-";
    cardTaskAddBtn.innerText = "+";

    cardBottom2.appendChild(cardTaskAddBtn);
    cardBottom1.appendChild(cardDeleteBtn);
    cardBodyBottom.appendChild(cardBottom1);
    cardBodyBottom.appendChild(cardBottom2);
    cardBody.appendChild(cardBodyTop);
    cardBody.appendChild(cardBodyBottom);
    cardHead.appendChild(cardHeadContent);
    newCard.appendChild(cardHead);
    newCard.appendChild(cardBody);
    newItem.appendChild(newCard);
    list.appendChild(newItem);

    //////////////////////////////
    // For Name on top of the card
    for (var i = 0; i < taskList.length; i++) {
        cardHeadContent.innerText = taskList[i].name;
    }

    cardDeleteBtn.onclick = function deleteCard() {
        newItem.remove();
    }


    cardTaskAddBtn.onclick =  function createItemPopUp () {
        const modal = document.getElementById("create-item-pop-up");
        modal.showModal();
        const itemText = document.getElementById("item-text");
        const itemAddBtn = document.getElementById("item-add-btn");
        const itemPopUpCloseBtn = document.getElementById("item-close-btn");


        itemAddBtn.onclick = function createItem() {
            const realContent = document.createElement("div");
            const cardContentLeft = document.createElement("div");
            const cardContentRight = document.createElement("div");
            const markDoneBtn = document.createElement("a");
        
            realContent.setAttribute("class", "real-content");
            cardContentLeft.setAttribute("class", "card-content-left");
            cardContentRight.setAttribute("class", "card-content-right");
            markDoneBtn.setAttribute("class", "mark-done-btn");
            markDoneBtn.setAttribute("href", "#");
        
            cardContentLeft.innerText = itemText.value;
            markDoneBtn.innerText = "Mark Done";
        
            cardContentRight.appendChild(markDoneBtn);
            realContent.appendChild(cardContentLeft);
            realContent.appendChild(cardContentRight);
            cardBodyTop.appendChild(realContent);


            markDoneBtn.onclick = function markDone() {
                cardContentLeft.style.textDecorationLine = "line-through";
                cardContentLeft.style.textDecorationColor = "tomato";
            }
        }

        itemPopUpCloseBtn.onclick = function closeItemPopUp() {
            modal.close();
        }
    }
}












 



















