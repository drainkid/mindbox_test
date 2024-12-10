import { ListItem, ListItemText, Divider, Checkbox } from "@mui/material";
import { TodoProps } from "../types.tsx";
import {TodoStatus} from "../types.tsx";

interface TodoItemProps {
    val: TodoProps[],
    onToggle: (id:string) => void,
    status: TodoStatus
}


const TodoItem = ({ val, onToggle, status }: TodoItemProps) => {


    const filteredTodos = val.filter((item) => {
        if (status === "active") return !item.completed;
        if (status === "completed") return item.completed;
        return true; // Все задачи
    });


    return (
        <>

            {
                filteredTodos.map((item) => (

                <div key={item.id}>
                    <ListItem
                        onClick={() => onToggle(item.id)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Checkbox
                            color="success"
                            checked={item.completed} 
                            onChange={() => onToggle(item.id)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <ListItemText primary={item.taskName} />
                    </ListItem>
                    <Divider component="li" />
                </div>

            ))}
        </>
    );
};

export default TodoItem;
