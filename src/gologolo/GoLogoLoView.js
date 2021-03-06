import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols, AppsterGUIId, AppsterGUIClass} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    /*
    makes the popup for edit text to enter new text
    */
    buildGoLogoLoEditWorkModal(){
        let editTextModal = this.buildElement( AppsterHTML.DIV,
                                                GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL,
                                                [AppsterGUIClass.APPSTER_MODAL],
                                                [],
                                                null,
                                                AppsterGUIClass.MODAL_ANIMATION_LEFT );
        let textFrame = this.buildElement( AppsterHTML.DIV,
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement( AppsterHTML.HEADER,
                                        GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_HEADER,
                                        [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement( AppsterHTML.SECTION,
                                          GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_SECTION,
                                          [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(     AppsterHTML.STRONG,
                                            "",
                                            [],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_PROMPT_TEXT);
        let textFieldAttributes = [];
        textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
        let textField = this.buildElement(  AppsterHTML.INPUT,
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD,
            [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
            textFieldAttributes);
        let enterButton = this.buildElement(   AppsterHTML.BUTTON, 
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON,
            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
            [],
            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(AppsterHTML.BUTTON, 
            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON,
            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
            [],
            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(AppsterHTML.FOOTER, 
            "", 
            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
            [],
            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_FOOTER_TEXT); 
        enterButton.addEventListener("click", () => {
            //this should register text into the logo
            let inputText = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value;
            console.log(inputText);

            this.controller.processEditText(inputText);

            //close dialog after action
            this.hideDialog(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        });
        cancelButton.addEventListener("click", () => {
            this.hideDialog(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        });
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        editTextModal.appendChild(textFrame);
        return editTextModal;                                                              
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        editTextButton.innerHTML = AppsterSymbols.EDIT;
        editTextButton.addEventListener("click", () => {
            console.log("edit text button clicked");
            this.showDialog(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        });
        let gologoloTextInputModal = this.buildGoLogoLoEditWorkModal();
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);
        fontSizeSlider.addEventListener("change", () => {
            let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value;
            console.log("font size: " + value);
            this.controller.processEditFontSize(value);
        });
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        textColorPicker.addEventListener("change", () =>{
            console.log("text color picker change");
            let color = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value;
            this.controller.processEditTextColor(color);
        });
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        backgroundColorPicker.addEventListener("change", () => {
            console.log("background color picker change");
            let color = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value;
            this.controller.processEditBackgroundColor(color);
        });
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        borderColorPicker.addEventListener("change", () => {
            console.log("border color picker change");
            let color = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value;
            this.controller.processEditBorderColor(color);
        });
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        borderRadiusSlider.addEventListener("change", () => {
            let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value;
            console.log("border radius size: " + value);
            this.controller.processEditBorderRadius(value);
        });
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        borderThicknessSlider.addEventListener("change", () => {
            let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value;
            console.log("border thiqqness: " + value);
            this.controller.processEditBorderThickness(value);
        });
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        paddingSlider.addEventListener("change", () => {
            let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value;
            console.log("padding thiqqness: " + value);
            this.controller.processEditPadding(value);
        });
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        marginSlider.addEventListener("change", () => {
            let value = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value;
            console.log("margin thiqqness: " + value);
            this.controller.processEditMargin(value);
        });
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        workspace.appendChild(gologoloTextInputModal);
        return workspace;
    }

    loadWork(work) {
        //set the min and max values for font slider
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).min = 10;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).max = 130;
        //set the min and max values for border radius slider
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).min = 0;
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).max = 25;

        //set the styles
        let fontValue = work.getFontSize();
        let size = fontValue + "px";
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.fontSize = size;

        let borderRadiusValue = work.getBorderRadius();
        let brSize = borderRadiusValue + "px";
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderRadius = brSize;

        //set border to solid
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.border = "solid";

        let borderThicknessValue = work.getBorderThickness();
        let btSize = borderThicknessValue + "px";
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.borderWidth = btSize;

        let paddingValue = work.getPadding();
        let paddingSize = paddingValue + "px";
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.padding = paddingSize;

        let marginValue = work.getMargin();
        let marginSize = marginValue + "px";
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.margin = marginSize;

        let textColor = work.getTextColor();
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.color = textColor;

        let backgroundColor = work.getBackgroundColor();
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).style.backgroundColor = backgroundColor;

        let borderColor = work.getBorderColor();
        document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).borderColor = borderColor;
        // end styling

        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius();
        textDiv.style.borderThickness = work.getBorderThickness();
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    
}