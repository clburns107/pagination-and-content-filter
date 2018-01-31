// collect all the students
const students = document.getElementsByClassName("student-item");

// collect all the anchors
const anchors = document.getElementsByClassName("pageButton");

// hide students
const hideStudents = () => {
	for (let i = 0; i < students.length; i++) {
		const student = students[i];
		student.style.display = "none";
	}
	
}

// calculate number of pages to create
const calcNumPages = () => {
	let numOfPages;
	// if number is less than 1 numOfPages is 0
	if (students.length / 10 < 1) {
		numOfPages = 0
		//if dividing the number of students by 10 leaves no remainder use the quotient
	} else if (students.length % 10 > 1 && students.length % 10 === 0){
		numOfPages = students.length / 10;
	} else {
		// round the quotient up
		numOfPages = Math.ceil(students.length / 10);
	}

	// if the number of pages is 0 show all the students
	if (numOfPages === 0) {
		showStudents(1);
	// create pagination div
	}else {
		createPaginationDiv(numOfPages);
	}	
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
			a.setAttribute('class', 'pageButton active');
		}else {
			a.setAttribute('class', 'pageButton');
		}
		btnIndex = i+1
		a.setAttribute('href', "#"+btnIndex);
		a.textContent = btnIndex;
		// create li
		const li = document.createElement("li");
		// append a to li
		li.appendChild(a);
		//append li to ul element
		element.appendChild(li);
	}
	// default show first page of students
	showStudents(1);
}

// show students based on active button number
const showStudents = (buttonNumber) => {
	hideStudents();
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

// remove/add active class based on click
const changePage = (activePageNum) => {
	// loop through anchors and remove active class
	for (var i=0; i < anchors.length; i++) {
		const anchor = anchors[i];
	    anchor.classList.remove("active");
	};

	// add active class to the element that was clicked
	for (var i=0; i < anchors.length; i++) {
		const anchor = anchors[i];
		if(anchor.getAttribute('href').substr(1) === activePageNum){
			anchor.classList.add("active");
		}
	};
	// call show students function and pass in button number
	showStudents(activePageNum);
}