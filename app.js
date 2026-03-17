import express from 'express';

const app = express();
const port = 3000;

const state = {
    users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ]
};

app.use(express.json());

function getAllUsers(req, res) {
    res.json(state.users);
}

function getUserById(req, res) {
    const user = state.users.find(u => u.id === parseInt(req.params.id));

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

function updateUser(req, res) {
    const userIndex = state.users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex !== -1) {
        state.users[userIndex] = {
            id: parseInt(req.params.id),
            name: req.body.name
        };
        res.json(state.users[userIndex]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

function deleteUser(req, res) {
    const userIndex = state.users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex !== -1) {
        const deletedUser = state.users.splice(userIndex, 1)[0];
        res.json(deletedUser);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

function createUser(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    
    const newId = state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1;
    const newUser = { id: newId, name: req.body.name };
    state.users.push(newUser);
    res.status(201).json(newUser);
}

app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.post('/users', createUser);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
