const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require("./schema/schema");



const app = express();


//connect to mongodb atlas db
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("")
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(4000,() => {
    console.log("Server running at port 4000");
});