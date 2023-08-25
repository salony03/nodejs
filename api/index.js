import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
const app = express();
const PORT = 3000;
//using json data for our application
app.use(bodyParser.json());
//when user visits/users run user routes
app.use("/users", usersRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Users API!")
});
//server listning to req
app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));