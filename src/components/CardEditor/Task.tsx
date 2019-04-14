import InputGroup from "react-bootstrap/InputGroup";

function Task({task, toogleTask}: any){
    return(
        <label>
            <InputGroup.Checkbox onChange={toogleTask(task.id)} />
            {task.name}
        </label>
    );
}

export default Task;