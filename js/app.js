// when the content has loaded
window.onload = () => {
	createSearchBox();
	
	// initial hiding of students
	calcNumPages();

	// listen for click on pagination buttons
	for (var i=0; i < anchors.length; i++) {
	    anchors[i].onclick = function() {
	    	// get the number from the button that was clicked
	        let activePageNum = this.getAttribute('href').substr(1);
	        changePage(activePageNum);
	    };
	};

}