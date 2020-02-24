import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
import { GoLogoLoGUIId } from './GoLogoLoConstants.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoText(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    //this method will help change colors
    updateTextColor(work, newColor){
        work.setTextColor(newColor);
    }

    updateBackgroundColor(work, newColor){
        work.setBackgroundColor(newColor);
    }

    updateBorderColor(work, newColor){
        work.setBorderColor(newColor);
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    //update the text of a logo
    updateText(work, newText) {
        if(newText != ""){
            work.setText(newText);
            console.log("Printing " + newText + " from gologolo model");
        }
        
    }

    updateFontSize(work, value) {
        work.setFontSize(value);
        console.log("changed font size to: " + work.getFontSize());
    }

    updateBorderRadius(work, value) {
        work.setBorderRadius(value);
        console.log("changed border radius size to: " + work.getBorderRadius());
    }

    updateBorderThickness(work, value) {
        work.setBorderThickness(value);
        console.log("changed border thickness to: " + work.getBorderThickness());
    }

    updatePadding(work, value) {
        work.setPadding(value);
        console.log("changed padding to: " + work.getPadding());
    }

    updateMargin(work, value) {
        work.setMargin(value);
        console.log("changed margin to: " + work.getMargin());
    }
}