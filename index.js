
function hideBlock(course, btn1, btn2) {
	var spanBtn1 = document.getElementById(btn1)
	var spanBtn2 = document.getElementById(btn2)
	var questText = document.getElementById(course)
	questText.classList.toggle('hidden')
	spanBtn1.classList.toggle('act-btn1')
	spanBtn2.classList.toggle('act-btn2')
}
