const paragraphStyle1 = {
	width: "80%",
	background: "#dddddd",
}
const paragraphStyle2 = {
	width: "60%",
	background: "#eeeeee",
}
const paragraphStyle3 = {
	width: "70%",
	background: "#bbbbbb",
}
const opt = {
	loading: () => (
		<>
		<p style={paragraphStyle1}></p>
		<p style={paragraphStyle2}></p>
		<p style={paragraphStyle3}></p>
		</>
	)
}
export default opt;

