
// var xhr = new XMLHttpRequest(); //create XMLHttpRequest object
// xhr.onreadystatechange = function() {
// 	if(xhr.readystate === 4) {
// 		var student = JSON.parse(xhr.responseText);
// 		console.log(typeof student);
// 	}
// };
//open the request
// xhr.open('GET', 'https://teamtreehouse.com/nathanbrenner.json');
// xhr.send();

console.log(students[0].name)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if(xhr.readyState === 4) {
		var student = JSON.parse(xhr.responseText);
		// //list Blake's json data
		// console.log(student);
		// //display the number of badges blake has completed
		// console.log(student.badges.length);
		// // display one badge name
		// console.log(student.badges[0].name);
		// // display all of Blake's badges
		for(var i = 0; i<student.badges.length; i++){
			console.log(student.badges[i].name);
			//store student.badges[i].name into students.
			students[0].badgesCompleted.push(student.badges[i].name);
		}
		//display common elements of badges and students badges
		var intersection = _.intersection(students[0].badgesCompleted, badges);
		// console.log(intersection);
		students[0].badgesIntersected.push(intersection);
		console.log(students[0].badgesIntersected[0]);
	}
}
xhr.open('GET', treehouseURL + students[0].treehouse + '.json');
xhr.send();