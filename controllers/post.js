exports.getPosts = (req, res) => {
  res.json({
    posts: [
      {
        title: "First Comment",
      },
      {
        title: "Second Comment",
      },
    ],
  });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("CREATING POST:  ", post);
};
