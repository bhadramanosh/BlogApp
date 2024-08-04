const mongoose=require('mongoose');
const BlogSchema=mongoose.Schema({
    blogid:number,
    category:string,
    title: string,
    img_url: string,
})
const BlogData=mongoose.model('blogDetail',BlogSchema);
module.exports=BlogData