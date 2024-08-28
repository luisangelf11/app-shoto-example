import { MyRouter } from "shoto-js";
import { deleteHome, getHome, postHome, putHome } from "../services/homeService.js";

const home = new MyRouter()

home.GET('/', getHome)
home.POST('/', postHome)
home.PUT('/', putHome)
home.DELETE('/', deleteHome)

export default home