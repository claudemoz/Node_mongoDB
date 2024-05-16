import express from "express";
import router from "./router.js";
import {connect} from "mongoose";
const pwd = 'ClaudeAPI';
connect(`mongodb+srv://claude_moz:${pwd}@cluster0.4mza5.mongodb.net/paris?retryWrites=true&w=majority`,
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }
).then(() => console.log('Connexion database OK'))
  .catch((err) => console.log(`erreur de connexion => ${err.message}`))

const app = express();
const PORT = 1235;

app.use(express.json());

app.use(router);

app.listen(PORT,function() {
    console.log(`serveur express d'écoute sur le port ${PORT}`)
})