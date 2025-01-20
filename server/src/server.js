const app = require("./index");
const connect = require("./configs/db");


const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, async () => {
        await connect();
        console.log(`Local server is running on port ${port}`);
    });
}

module.exports = app;