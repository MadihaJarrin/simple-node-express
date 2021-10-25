
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // get full obj of data  
const port = 5000; //process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.send("Hello! I am from my second node server. WOW !! I learn node and express for the first time in my life ");
});
const users = [
    { id: 0, name: "Madiha jarrin", age: 20, phone: "01639******" },
    { id: 1, name: "Suraiya Sultana", age: 16, phone: "01639******" },
    { id: 2, name: "Sakib Al hasan ", age: 21, phone: "01639******" },
    { id: 3, name: "Mahmuda sultana", age: 14, phone: "01639******" },
    { id: 4, name: "Abdullah al mamun ", age: 12, phone: "01639******" },
    { id: 5, name: "Darjana kabir", age: 28, phone: "01639******" },
    { id: 6, name: "Anonna anu", age: 20, phone: "01639******" }
]
app.get('/users', (req, res) => {
    const search = req.query.search;

    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});
//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//*** dynamic api  ***** 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})
app.get('/fruits', (req, res) => {
    res.send("Mangoes, oranges, banana , apple")
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("yammi yammi mangaoes")
})


app.listen(port, () => {
    console.log("Listening to port", port);
});

