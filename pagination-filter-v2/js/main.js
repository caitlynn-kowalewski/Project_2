//Declare variables

const getStudents = document.getElementsByClassName('student-item cf');//class comes from li element.
const numPerPage = 10;
const $linkCentral = $(".page");//will need to use div's class name ("page") to append new elements later.

//Create a function called "showPage" that takes the "page" number as the argument.
//the "for" loop loops through the list of students (getStudents).

function showPage(page) {
    $(getStudents).hide(); //hides the whole list of students

    let studentsDisplayed = []; //we need an empty array to store results.

    for (let i = 0; i < getStudents.length; i += 1) {
        if (i >= page * numPerPage && i <= page * numPerPage + numPerPage - 1) {
            studentsDisplayed.push(getStudents[i]); //"pushes" the results of the loop and "if" into the array.
            $(getStudents[i]).show(); //shows the selected elements from the hidden list.
        }
    }

    return studentsDisplayed; //returns array of results
}

showPage(0); //page arguement of "0" is the first page.

//Next, create a function that will call the showPage function and separate result into links of 10 each.
/*the "for" loop in this one returns the smallest integer greater than or equal to the length of the student
list divided by 10..loops through and determines how many links will be created*/

function appendPageLinks() {

    let newUl = document.createElement("ul"); //creates new html element (unordered list)
    newUl.className = "pagination"; //assigns the pagination class to the new "ul" tag

    for (let i = 1; i <= Math.ceil(getStudents.length/numPerPage); i += 1){
    let newLi = document.createElement("li");//creates list element
    let newLink = document.createElement("a");//creates an a element
    newLink.href = "#" + i;//setting up the link
    newLink.textContent = i;//text content of each link will be the results of calling the functions
    newLi.append(newLink);//append new link to the new list element
    newUl.append(newLi);//append the new list element to the new ul element.
    $linkCentral.append(newUl);//append the new ul element to the div with the clase of ".page"

    newLink.addEventListener("click", function() {
      $("a").removeClass("active");
      this.className = 'active';//lines 42 & 43 make it so you can see what page you're on. CSS added.
      showPage(i - 1, getStudents);
    });
}
}
appendPageLinks();
