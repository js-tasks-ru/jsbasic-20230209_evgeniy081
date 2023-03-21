function getMinMax(str) {
	let arr = str.split(' ');
	let arrAllNumber = arr.filter((item) => {
		let a = Number(item);
		if (!isNaN(a)) {
			return a;
		}
	});
	let min = arrAllNumber.reduce((x,y) => {
		return Math.min(x, y);
	});
	let max = arrAllNumber.reduce((x, y) =>{
		return Math.max(x, y);
	});
	return {min, max};
}
