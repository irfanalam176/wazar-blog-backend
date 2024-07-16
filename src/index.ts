import express from 'express';
import path from 'path';
import { posts, users } from './routes';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use("/users",users)
app.use("/posts",posts)
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
