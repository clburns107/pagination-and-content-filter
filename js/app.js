// collect all the students
const students = document.getElementsByClassName("student-item");

// hide students
const hideStudents = () => {
	for (let i = 0; i < students.length; i++) {
		const student = students[i];
			student.style.display = "none";
	}
	calcNumPages();
}

// calculate number of pages to create
const calcNumPages = () => {
	let numOfPages;
	// if dividing the number of students by 10 leaves a remainder
	if(students.length % 10 === 0){
		numOfPages = students.length / 10;
	} else {
		// round the pages up
		numOfPages = Math.ceil(students.length / 10);
	}
	createPaginationDiv(numOfPages);
}


// create the html pagination div
const createPaginationDiv = (numOfPages) => {
	// create ul
	const ul = document.createElement("ul");
	// create div with class pagination
	const paginationDiv = document.createElement("div");
	paginationDiv.setAttribute('class', 'pagination');
	// create page selector
	const page = document.querySelector("div");
	// append ul to div
	paginationDiv.appendChild(ul);
	// append div to pageDiv
	page.appendChild(paginationDiv);
	createPageButtons(ul, numOfPages)
}

// create the number of page buttons necessary
const createPageButtons = (element, numOfPages) => {
	for (let i = 0; i < numOfPages; i++) {
		//create a tag
		const a = document.createElement("a");
		// set first button to default active
		if(i === 0){
			a.setAttribute('class', 'active');
			a.setAttribute('href', '#');
		}
		a.textContent = i + 1;
		// create li
		const li = document.createElement("li");
		// append a to li
		li.appendChild(a);
		//append li to ul element
		element.appendChild(li);
	}
	showStudents();
}

// show students based on which li has the active class
const showStudents = () => {
	// get list of li buttons 
	// loop through and find the active one
	// check the active button's html number and multiply by 10 = ending number
	// ending number -10 = beginning number
	// loop through students and show if studen'ts count is between beginning number and ending number
}

// get the number of pages to make by taking the number of students and dividing by 10
// if the divide leaves no remainder then make that many pages
// if there is a remainder round up and make that many pages




const appendPageLinks = (/* take a student list as an argument */) => {
    // determine how many pages for this student list 
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”

}

const showPage = (/* arguments here for page number and student list */) => {
	 // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student

}


// when the content has loaded
window.onload = () => {
	// initial hiding of students
	hideStudents();
}


