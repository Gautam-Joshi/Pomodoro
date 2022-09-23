export function secondconv(num) {
	return Number(num) * 60
}

export function timeDisplay(num) {
	num = Number(num)

	let minutepart = String((num - (num % 60)) / 60)
	let secondpart = String(num % 60)

	if(minutepart.length < 2) {
		minutepart = "0" + minutepart
	}
	if(secondpart.length < 2) {
		secondpart = "0" + secondpart
	}

	return minutepart + ":" + secondpart
}
