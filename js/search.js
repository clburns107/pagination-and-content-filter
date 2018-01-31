// create dynamic search box
const createSearchBox = () => {
	const pageHeader = document.querySelector(".page-header");
	// create div with class student-search
	const searchDiv = document.createElement("div");
	searchDiv.setAttribute('class', 'student-search');
	// create input
	const searchInput = document.createElement("input");
	searchInput.setAttribute('placeholder', 'Search for students...');
	// create button
	const searchButton = document.createElement("button");
	searchButton.textContent = "Search";

	searchDiv.appendChild(searchInput);
	searchDiv.appendChild(searchButton);
	pageHeader.appendChild(searchDiv);
}

// anchors[i].onclick = function() {
// 	    	// get the number from the button that was clicked
// 	        let activePageNum = this.getAttribute('href').substr(1);
// 	        changePage(activePageNum);
// 	    };

// // hide students
// const hideStudents = () => {
// 	for (let i = 0; i < students.length; i++) {
// 		const student = students[i];
// 		student.style.display = "none";
// 	}
	
// }

// when submit button is clicked
// loop through list of students and check to see if search term is found in either the name or email fields
// if true add student div to an array of results
// loop through array of results and display them to the page