const sendAllPosts = (req, res) => {
    res.setHeader("Content-Type", "applicattion/json")
    res.end(JSON.stringify(req.allPosts))
}

module.exports = { sendAllPosts }