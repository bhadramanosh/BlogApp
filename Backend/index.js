const express = require('express');
const app = express();
require('./connection');
const BlogPost = require('./model/BlogPost');

app.use(express.json());


app.get('/blogposts', async (req, res) => {
    try {
        const data = await BlogPost.find();
        res.send(data);
    } catch (error) {
        res.send('Data not found');
    }
});

app.post('/addblogpost', async (req, res) => {
    try {
        var item = req.body;
        const datasave = new BlogPost(item);
        const savedata = await datasave.save();
        res.send("Post successful");
    } catch (error) {
        console.log(error);
    }
});


app.put('/blogpostedit/:id', async (req, res) => {
    try {
        const data = await BlogPost.findByIdAndUpdate(req.params.id, req.body);
        res.send('Updated successfully');
    } catch (error) {
        console.log(error);
    }
});

app.delete('/removeblogpost/:id', async (req, res) => {
    try {
        await BlogPost.findByIdAndDelete(req.params.id);
        res.send('Deleted successfully');
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000, () => {
    console.log('The server is running on Port 3000');
});
