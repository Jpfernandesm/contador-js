<html>
<head>
	<title>JavaScript Counter</title>
</head>
<body>
	<h1>Counter: <span id="count">0</span></h1>
	<button onclick="increment()">Increment</button>
	<button onclick="decrement()">Decrement</button>

	<script>
		let count = 0;
		const countSpan = document.getElementById("count");

		function increment() {
			count++;
			countSpan.textContent = count;
		}

		function decrement() {
			count--;
			countSpan.textContent = count;
		}
	</script>
</body>
</html>
