import AppsterController from '../appster/AppsterController.js'
import {AppsterGUIId} from '../appster/AppsterConstants.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
import {GoLogoLoGUIId} from './GoLogoLoConstants.js'

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
        } else{
            //make new work
        let newPage = new GoLogoLoLogo(input);
        this.model.prependWork(newPage);
        this.model.view.hideDialog(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL);
        //clear text field 
        document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD).value = "";
        }
    }

    processEditText = (inputText) => {
        this.model.updateText(this.model.recentWork[0], inputText);
        this.model.view.loadWork(this.model.recentWork[0]);
        //clear text field 
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value = "";
    }

    processEditFontSize = (value) => {
        this.model.updateFontSize(this.model.recentWork[0], value);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditBorderRadius = (value) => {
        this.model.updateBorderRadius(this.model.recentWork[0], value);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditBorderThickness = (value) => {
        this.model.updateBorderThickness(this.model.recentWork[0], value);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditPadding = (value) => {
        this.model.updatePadding(this.model.recentWork[0], value);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditMargin = (value) => {
        this.model.updateMargin(this.model.recentWork[0], value);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditTextColor = (color) => {
        this.model.updateTextColor(this.model.recentWork[0], color);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditBackgroundColor = (color) => {
        this.model.updateBackgroundColor(this.model.recentWork[0], color);
        this.model.view.loadWork(this.model.recentWork[0]);
    }

    processEditBorderColor = (color) => {
        this.model.updateBorderColor(this.model.recentWork[0], color);
        this.model.view.loadWork(this.model.recentWork[0]);
    }
}