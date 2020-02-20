import React from 'react';
import './App.css';
import Todo from "./component/Todo";
import DataFetching from "./component/DataFetching";

function App() {
    return (<div>
            <div className="d-flex">
                <Todo/>
            </div>
            <div className="d-flex">
                <DataFetching/>
            </div>
        </div>
    );
}

export default App;
