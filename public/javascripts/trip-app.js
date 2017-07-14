
/*const searchTerms = {
	term3: prompt('What do you want to search for?'),
	location: prompt('Where do you want to go?'),
	limit: 20
}*/

console.log(searchTerms);

$.post('/data', searchTerms, data => {
	console.log(data);
})
