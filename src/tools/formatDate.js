function formatDate(date, fmt) {
	date = new Date(date)
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};

	// 遍历这个对象
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			// console.log(`${k}`)
			// console.log(RegExp.$1)
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};

function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}

module.exports = formatDate;