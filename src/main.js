import router from "./routes";
import App from "./App";

const root = document.querySelector("#root");

root.append(new App().el);
router();
