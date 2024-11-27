function indexOfIgnoreCase(s1, s2) {

	 let str = s1.toLowerCase();
    let Substr = s2.toLowerCase();

    // Use indexOf to find the first occurrence (corrected method name)
    return str.indexOf(Substr);
	
} 

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
