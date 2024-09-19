import { useState } from "react";

function App() {
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);
	const handleChangeInput = (e) => {
		setInput(e.target.value);
	};
	const handleTodoListAdd = () => {
		setTodoList((previnput) => {
			console.log([...previnput, input]);
			return [...previnput, input];
		});
	};

	return (
		<>
			<h1>Todo</h1>
			<div className="card">
				<input type="text" value={input} onChange={handleChangeInput} />
				<button onClick={handleTodoListAdd}>add</button>
				<ul>
					{todoList.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		</>
	);
}

export default App;
