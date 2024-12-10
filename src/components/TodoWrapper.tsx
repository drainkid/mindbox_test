import {Box, Button, ButtonGroup, Container, Divider, List, ListItem, TextField} from "@mui/material";
import {useState} from "react";
import TodoItem from "./TodoItem.tsx";
import {TodoProps} from "../types.tsx";
import {TodoStatus} from "../types.tsx";
import { v4 as uuidv4 } from "uuid";




const TodoWrapper = () => {

    const [task, setTask] = useState('')
    const [todo, setTodo] = useState<TodoProps[]>([])
    const [selectedButton, setSelectedButton] = useState<TodoStatus>('all');


    const ListStyle = {
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter' && task.trim() !== '') {
            setTodo(prev =>[
                ...prev,
                {id: uuidv4(), completed: false, taskName: task,}
            ])
            setTask('')
        }
    }

    const handleToggle = (id: string) => {
        setTodo((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed,} : item
            )
        )
    }

    const isSelected = (status: TodoStatus) => selectedButton === status ? 'contained' : 'text';


    return (
        <div>
            <Container sx ={{marginTop:8,padding:2,}} >
                <h1 style={{textAlign:"center"}}> todos ebaniy </h1>

                <List sx={ListStyle} aria-label="mailbox folders">
                    <ListItem>
                        <TextField
                            autoFocus
                            required
                            fullWidth
                            label= 'What needs to be done?'
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            onKeyDown={handleKeyDown}
                            sx={{border:'white'}}
                            variant='standard'
                        />
                    </ListItem>

                    <Divider component={'li'} />
                    <TodoItem val={todo} onToggle={handleToggle} status = {selectedButton}/>

                    <Box component="li" sx={{textAlign: "center"}}>
                        <ButtonGroup variant="text" sx = {{m:2}}>
                            <Button
                                onClick={() => setSelectedButton('all')}
                                variant={isSelected(selectedButton)} // Выделение выбранной кнопки
                            >
                                All
                            </Button>
                            <Button
                                onClick={() => setSelectedButton('active')}
                                variant={isSelected(selectedButton)}
                            >
                                Active
                            </Button>
                            <Button
                                onClick={() => setSelectedButton('completed')}
                                variant={isSelected(selectedButton)}
                            >
                                Completed
                            </Button>
                        </ButtonGroup>
                    </Box>

                </List>
            </Container>
        </div>
    );
};

export default TodoWrapper;