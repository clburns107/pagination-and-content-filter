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
	// if dividing the number of students by 10 leaves no remainder
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
		}
		a.setAttribute('href', '#');
		a.textContent = i + 1;
		// create li
		const li = document.createElement("li");
		// append a to li
		li.appendChild(a);
		//append li to ul element
		element.appendChild(li);
	}
	showStudents(1);
}

// show students based on active button number
const showStudents = (buttonNumber) => {
	// multiply buttonNumber by 10 = ending number
	const endStudentIndex = buttonNumber * 10;
	// ending number -10 = beginning number
	const beginStudentIndex = endStudentIndex - 10;
	// loop through students and show if student's count is between beginning number and ending number
	for (let i = 0; i < students.length; i++) {
		if(i >= beginStudentIndex && i < endStudentIndex){
			const student = students[i];
			student.style.display = "block";
		}
	}
}

// listen for click on page button 
const changePage = () => {
	// save the element that was clicked on
	// get list of li buttons
	// loop through list and find the active one
	// remove active class
	// add active class to the element that was clicked
	// call show students function and pass in button number
}



// when the content has loaded
window.onload = () => {
	// initial hiding of students
	hideStudents();
}


