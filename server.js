import express from 'express'; // eslint-disable-line
import controllerRouting from './routes/index.js'; // eslint-disable-line

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(express.json());

// Apply your routes
controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
