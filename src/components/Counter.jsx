import { createSignal, onCleanup } from "solid-js";

const Counter = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 137),
		7
	);
	onCleanup(() => clearInterval(interval));
	
	return (
		<h2>
			You have earned ${Math.ceil(count()/100)}.{count()%100}
		</h2>
	);
}

export default Counter;

