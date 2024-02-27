import Router from "./router.js";
import EmailSenderController from "../controllers/email.controller.js";
export default class EmailSenderRouter extends Router {
    constructor() {
        super();
        this.EmailSenderController = new EmailSenderController();
    }
    init(){
        this.post('/', (req, res, next) => this.EmailSenderController.sendEmail(req, res, next));
    }
}