const app = require('./app');

const setUp = async() => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on PORT: ${port}`))
    }
    catch(ex){
        console.log(ex)
    }
};
setUp()