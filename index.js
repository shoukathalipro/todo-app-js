var taskList = [];

function checkIfEmpty() {
    if (taskList.length !== 0) {
        document.getElementById("container-head2").style.display = "none";
    } else if (taskList.length === 0) {
        document.getElementById("container-head2").style.display = "flex";
    } else {
        document.getElementById("container-head2").style.display = "flex";
    }
}
checkIfEmpty()


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
    const cardHeadContent = document.createElement("a");
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
    cardHeadContent.setAttribute("href", "#");
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
    console.log(taskList);
    console.log(taskList.length);

    //////////////////////////////
    // For Name on top of the card
    for (var i = 0; i < taskList.length; i++) {
        cardHeadContent.innerText = taskList[i].name;
    }

    cardDeleteBtn.onclick = function deleteCard() {
        newItem.remove();
        function removeFromTaskList (arr, attr, value) {
            var i = arr.length;
            while(i--){
                if (arr[i] && arr[i].hasOwnProperty(attr)
                 && (arguments.length > 2 && arr[i][attr] == value)) {
                    arr.splice(i,1);
                    break;
                }
            }
        }
        removeFromTaskList(taskList, 'name', cardHeadContent.innerText);
        checkIfEmpty();
        console.log(taskList);
        console.log(taskList.length);
    }

    ////////////////////////////////////////////
    // CardHeadContent onclick Function Was Here
    cardHeadContent.onclick = function createIllusion() {
        const magicList = document.getElementById("magic-list");
        const magicCardTitle = document.getElementById("magic-card-title");
        const magicCardContent = document.getElementById("magic-card-content");
        const magicDeleteBtn = document.getElementById("magic-delete-btn");
        const magicAddBtn = document.getElementById("magic-add-btn");

        magicList.style.display = "flex";
        magicCardTitle.innerText = cardHeadContent.innerText;
        magicCardContent.innerHTML = cardBodyTop.innerHTML;

        magicDeleteBtn.onclick = function deleteMagicCard() {
            magicList.style.display = "none";
            magicCardTitle.innerText = "";
            magicCardContent.innerHTML = "";
            containerHead1Left.style.display = "flex";
            head1Right2.style.display = "block";
            hiddenLeft.style.display = "none";
            hiddenMiddle.style.display = "none";

            list.style.display = "flex";

            newItem.remove();
            function removeFromTaskList (arr, attr, value) {
                var i = arr.length;
                while(i--){
                    if (arr[i] && arr[i].hasOwnProperty(attr)
                     && (arguments.length > 2 && arr[i][attr] == value)) {
                        arr.splice(i,1);
                        break;
                    }
                }
            }
            removeFromTaskList(taskList, 'name', cardHeadContent.innerText);
            checkIfEmpty();
        }

        magicAddBtn.onclick = function createIllusionItemPopUp() {
            const modal = document.getElementById("create-item-pop-up");
            modal.showModal();
            const itemText = document.getElementById("item-text");
            const itemAddBtn = document.getElementById("item-add-btn");
            const itemPopUpCloseBtn = document.getElementById("item-close-btn");
    
    
            itemAddBtn.onclick = function createIllussionItem() {
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
                magicCardContent.appendChild(realContent);
                cardBodyTop.appendChild(realContent);
                magicCardContent.innerHTML = cardBodyTop.innerHTML;
    
    
                markDoneBtn.onclick = function markIllussionItemDone() {
                    cardContentLeft.style.textDecorationLine = "line-through";
                    cardContentLeft.style.textDecorationColor = "tomato";
                    magicCardContent.innerHTML = cardBodyTop.innerHTML;
                }
            }
    
            itemPopUpCloseBtn.onclick = function closeIllussionItemPopUp() {
                modal.close();
            }
        }

        const containerHead1Left = document.getElementById("container-head1-left");
        const head1Right2 = document.getElementById("head1-right2");
        const hiddenLeft = document.getElementById("hidden-left");
        const hiddenLeft1 = document.getElementById("hidden-left1");
        const hiddenMiddle = document.getElementById("hidden-middle");

        containerHead1Left.style.display = "none";
        head1Right2.style.display = "none";
        hiddenLeft.style.display = "flex";
        hiddenMiddle.style.display = "flex";
        hiddenMiddle.innerText = cardHeadContent.innerText;

        list.style.display = "none";

        hiddenLeft1.onclick = function endIllusion() {
            magicList.style.display = "none";
            magicCardTitle.innerText = "";
            magicCardContent.innerHTML = "";
            containerHead1Left.style.display = "flex";
            head1Right2.style.display = "block";
            hiddenLeft.style.display = "none";
            hiddenMiddle.style.display = "none";

            list.style.display = "flex";
        }
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












 



















