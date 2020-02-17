import AppsterController from '../appster/AppsterController.js'
import {AppsterGUIId} from '../appster/AppsterConstants.js'

export default class GoLogoLoController extends AppsterController {
    constructor() {
        super();
    }

    processNewLogo = () => {
        let input = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD).value;
        console.log(input);
        if(input.length < 1 || this.model.getRecentWork(input) != null){
            this.model.view.hideDialog(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL);
            this.model.view.showDialog(AppsterGUIId.APPSTER_CONFIRM_MODAL);
        }
    }

    processEditText() {
        this.model.updateText();
    }
}