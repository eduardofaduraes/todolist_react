import {useState} from "react";


const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // não enviar caso estiver vazio
        if(!value || !category) return;

        // adicionar todo
        addTodo(value, category);

        // limpar campos
        setValue("");
        setCategory("");
    };

  return (
    <div className='todo-form'>
        <h2>Nova tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o título da nova tarefa'
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
};

export default TodoForm