function sumStrings(a, b) {
	// sum for storing digits;
	var sum = [];

	// reverse the numbers
	var ra = a.split('').reverse();
	var rb = b.split('').reverse();

	// find common length to for loop;
	var length = Math.max(ra.length, rb.length);

	var plus = 0;
	for (var i = 0; i <= length; i++) {
		// find current digit and add plus if transferred from previous digit
		var digit = (parseInt(ra[i]) || 0) + (parseInt(rb[i]) || 0) + plus;

		// calculate current digit and find store plus if needed.
		if (digit > 9) {
			digit = digit - 10;
			plus = 1;
		} else {
			plus = 0;
		}

		// add digit to the array;
		sum.unshift(digit);
	}

	// convert array to integer string and ignore starting zeros
	var start = false;
	var reduced = sum.reduce((a, c) => { if (c > 0 && !start) { start = true; a = ""; }; return start ? (a.toString() + c.toString()) : "" }, 0)

	return reduced;
}