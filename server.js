
const express = require("express");
const router = require('./routes/index')
const app = express();



app.use(express.json());

// app.use('/', (req, res, next) => {
//     console.log("again request :", req?.query);
//     if (req?.query?.apiKey === '123') {
//         next()
//     } else {
//         res.status(401).json({
//             message: 'not allowed'
//         })
//     }
// })

app.use('/api', router)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});