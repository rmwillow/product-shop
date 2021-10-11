var express = require("express");
var mongoose = require("mongoose");
const path = require("path");
const app = express();
app.use(express.json());
const items = require("./routes/api/items"); //* all routes are here
const Users = require("./routes/api/Users"); //* all routes are here
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
    .connect('mongodb://localhost/Product-shop')
    // .connect("MONGODB_URI")
    .then(() => console.log("Connected to DataBase"))
    .catch((err) => console.log("error: ", err.message));

//* Use Routes
// app.use("/api/items", items);
app.use("/api/users", Users);
app.use("/api/auth", require("./routes/api/Auth"));
app.use("/api/Product", require("./routes/Products/Products"));
app.use("/api/orders", require("./routes/api/Orders"));

//Non api requests in production
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    // Add production middleware such as redirecting to https

    // Express will serve up production assets i.e. main.js
    app.use(express.static(__dirname + '/client/build'));
    // If Express doesn't recognize route serve index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'build', 'index.html')
        );
    });
}

//start server
const PORT = process.env.PORT || 5000; //Heroku sets port dynamically
app.listen(PORT, () => {
    console.log('listening...');
}).on('error', err => {
    console.log(`Error Code: ${err.code}`);
});


// if (process.env.NODE_ENV == "production") {
//     // set static folder
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     });
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => `Server running on port ${PORT}`);
