import Appster from '../appster/Appster.js'
import GoLogoLoModel from './GoLogoLoModel.js'
import GoLogoLoView from './GoLogoLoView.js'
import GoLogoLoController from './GoLogoLoController.js'

class GoLogoLoApp extends Appster {
    constructor(initModel, initView, initController) {
        super(initModel, initView, initController);
    }
}

// FIRST MAKE THE APP COMPONENTS
let model = new GoLogoLoModel();
let view = new GoLogoLoView();
let controller = new GoLogoLoController();

// MAKE THE APP AND LAUNCH IT
let app = new GoLogoLoApp(model, view, controller);
app.launch("./src/gologolo/GoLogoLoData.json");