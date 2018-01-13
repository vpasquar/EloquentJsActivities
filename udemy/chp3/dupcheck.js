dupCheck = string => {

	for (x = 0; x < string.length - 1; x ++) {
		for (y = x + 1; y < string.length; y ++) {
			if (string.charAt(x) == string.charAt(y))
				return true;
		}
	}
	return false;
}

console.log(dupCheck("gog"));