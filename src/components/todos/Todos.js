import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../../services/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(todos);

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>React-Redux</h1>
            <h1>Todos App</h1>

            {isLoading && <h3>Todo is Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos &&
                    todos.map((todo) => {
                        const { id, title } = todo;
                        return (
                            <article key={id}>
                                <h3>{id}</h3>
                                <p>{title}</p>
                            </article>
                        );
                    })}
            </section>
        </div>
    );
};

export default Todos;
