///////////////////////////////////////////////////////////////////////
////Here taskList is for storing the card titles. After clicking on the
////Add button in the pop-up dialog, we immediately capture and store 
////that text content inside an object called tempObj. tempObj only 
////contains 1 key called "name" and we'll be storing that text content
////as the value of this key. After that we push this tempObj into our
////taskList array, which makes it an array of Object! Every new card
////will be stored similarly in the form of an array of objects. 

var taskList = [];

//////////////////////////////////////////////////////////////////////////
////checkIfEmpty function is to check whether the taskList array of
////objects is empty or not. If it's empty then a box appears
////and will show the message "No items in the todo list". If it's 
////not empty then that box disappears. This function runs one time by 
////default and will run every time a card is deleted and also when 
////a new card is created.

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

///////////////////////////////////////////////////////////////////////
////showPopUp function gives the user a dialog box after clicking on the
////big red plus button. This dialog box asks the user to type in 
////something and that something would end up becoming the card title.
////The dialog box also has 2 buttons "ADD" & "CLOSE". New card would only
////be created the moment after clicking "ADD". The hidePopUp function
///works when the user clicks on the close button. This function is for 
////closing the dialog. The addCardName function gets executed the moment
////after clicking on the "ADD" button inside the dialog box which 
////appears after clicking on the "+" button. addCardName function
////captures the text content and gives that value to the "name" key
////of tempObj and pushes the tempObj into the taskList array.
////It will also call the createCard function.


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


//////////////////////////////////////////////////////////////////////////
////The createCard function is a gigantic multi-nested function where
////all the magic happens! It's primary task is to create a brand new
////card which contains elements that doesn't exist in the html file.
////The card is basically divided into 3 sections i.e top middle and
////bottom. The top section is where the function displays the card title,
////the middle section is where the cardItems will be displayed and the
////bottom section is where there would be 2 buttons "+" & "Trash Bin".
// After iterating the taskList array of objects, it is possible to 
////fetch the correct card title. Clicking on the "Trash" icon does
////multiple things. Firstly it'll iterate the taskList array of objects
////in a complicated manner to fetch and remove the value that matches 
////card title. Secondly, it'll remove that particular card from the 
////html document. When we click on the "+" button it'll execute the 
////createItemPopUp function which would show us a dialog box that looks
////exactly like the dialog box that would appear after clicking on the 
////big "+" button near add list. After clicking on the "close" button,
////the dialog would disappear. But if we type some text in the input 
////field and click on the "+" button within the dialog then it would
////execute another function called createItem. Similar to the createCard
////function, this function would create new elements. It includes 3 div
////elements and an anchor tag. 2 div elements are appended inside the 3rd
////div and that anchor tag is appended inside one of the nested div.
////Inside the other nested div, the function would display whatever was 
////written inside the input field when the dialog appeared. We will also
////give a function for that newly created anchor tag. We would name it 
////"mark done" & it's job is to give a text-decoration:line-through for 
////that text from the input field we just mentioned. Clicking on the 
////card title would execute a function called createIllusion because
////that's exactly what happens. The function would hide the "list"
////container, which is the container that holds all our cards and 
////shows us the hidden container called "magic-list". Inside the 
////magic-list container there is already a pre-created card which
////was hidden all this time. Now we would be able to see it and it 
////would have the exact styling as the other cards when they were
////created. This card would basically look like the card on which
////we clicked the card title and would display everything that ever
////was on that card but we won't be seeing any other cards but only
////this card alone. Here also we can add new items into the card.
////Another thing is that, after clicking on the card title, we 
////would notice that in the top section of the page, insted of "Task List"
////we can see a "back" button. If we click on that "back" button, 
////we'll be able to see all the other cards along with the card on which 
////we clicked the card title upon and we'll also be able to see all
////those newly added items if we added any. But if we click on the 
////big "+" button, we get a dialog to create a new card and after typing
////something and clicking on the "add" button we would be immediately 
////transported to the place where we can see all the cards, similar to
////what the "back" button did. Also when we click on the card title 
////we'll also see the top-middle part of the page shows us the 
////exact name of the card title upon which we clicked. 



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
    const fontAwesomeTrashIcon = document.createElement("i");
    const cardTaskAddBtn = document.createElement("a");
    const fontAwesomeAddIcon = document.createElement("i");

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
    fontAwesomeTrashIcon.setAttribute("class", "fas fa-trash-alt fa-2x");
    cardTaskAddBtn.setAttribute("class", "card-task-add-btn");
    fontAwesomeAddIcon.setAttribute("class", "fas fa-plus-circle fa-2x");

    cardTaskAddBtn.appendChild(fontAwesomeAddIcon);
    cardDeleteBtn.appendChild(fontAwesomeTrashIcon);
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
                    cardContentLeft.style.textDecorationColor = "#ff0000";
                    cardContentLeft.style.textDecorationThickness = "3px";
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
                if (markDoneBtn.innerText == "Mark Done") {
                    cardContentLeft.style.textDecorationLine = "line-through";
                    cardContentLeft.style.textDecorationColor = "#ff0000";
                    cardContentLeft.style.textDecorationThickness = "3px";
                    markDoneBtn.innerText = "Mark Undone";    
                }
                else if (markDoneBtn.innerText == "Mark Undone") {
                    cardContentLeft.style.textDecoration = "none";
                    markDoneBtn.innerText = "Mark Done"; 
                }
            }
        }

        itemPopUpCloseBtn.onclick = function closeItemPopUp() {
            modal.close();
        }
    }
}












 



















