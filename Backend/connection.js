const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://bhadramanosh:tomholland14@cluster0.ov7rklj.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected');
}).catch((error)=>{
  console.log('Error in connection')
})

