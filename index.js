import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render("index.ejs", { posts: posts });

});

app.get("/post/:id" , (req , res) => {
    const postId = parseInt(req.params.id);
    console.log(postId);
    var post = posts.find(post => post.id == postId);
    res.render("post.ejs" , { post: post });
})

app.get("/new-post" , (req , res) => {
    res.render("newPost.ejs");
});

app.post("/new-post" , (req , res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newPost = {
        id: posts.length + 1,
        title: title,
        content: content
    };
    posts.push(newPost);
    res.redirect("/");
});

app.get("/post/:id/delete" , (req , res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id != postId);

    res.redirect("/");
});


app.get("/post/:id/edit" , (req , res) => {

    res.render("editPost.ejs" , { post: posts.find(post => post.id == parseInt(req.params.id)) });

}   );

app.post("/edit-post" , (req , res) => {


    const postId = parseInt(req.body.id);
    const title = req.body.title;
    const content = req.body.content;

    posts[postId -1] = {
        id: postId,
        title: title,
        content: content
    };
    
    res.redirect("/");
});




app.listen(port , () => {
    console.log("....server is running on port 3000....");
})





















var posts = [
    {
        id: 1,
        title: "My Journey into Programming",
        content: "I started learning coding with curiosity and fear. At first, everything looked confusing, but I kept practicing every day. Slowly, I understood how things work. Making small projects helped me gain confidence. Today, I enjoy learning new technologies and improving myself."
    },
    {   
        id: 2,
        title: "Why Technology Matters",
        content: "Technology makes our life easier and faster. From mobile apps to online learning, everything depends on software. Learning tech skills helps us grow professionally. It also improves our problem-solving ability. In today’s world, technical knowledge is very important."
    },
    {
        id: 3,
        title: "Believe in Yourself",
        content: "Everyone learns at a different speed. Comparing yourself with others is not helpful. Focus on your own progress and keep improving. Trust your abilities and stay positive. Hard work always pays off."
    },
    {
        id: 4,
        title: "Staying Motivated in Tech",
        content: "Learning programming is not always easy. Errors and bugs can feel frustrating. When I feel tired, I take short breaks and start again. Setting small goals helps me stay focused. Every small success motivates me to move forward."
    }
]
console.log(posts);
