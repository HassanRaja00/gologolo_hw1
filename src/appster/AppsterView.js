import {AppsterCallback, AppsterGUIClass, AppsterGUIId, AppsterHTML, AppsterSymbols, AppsterText} from './AppsterConstants.js'

export default class AppsterView {
    constructor() {
        this.appText = new Array();
        this.appTextControls = new Array();
    }

    loadWork(workToLoad) {
        // DEFINE IN CHILD CLASS
    }

    registerAppTextControl(controlId, control) {
        this.appTextControls[controlId] = control;
        if (this.appText[controlId]) {
            control.innerHTML = this.appText[controlId];
        }
    }

    loadAppText(textName, textValue) {
        if (textName && textValue)
            this.appText[textName] = textValue;
        else
            this.appText[textName] = "?";
        
        let control = this.appTextControls[textName];
        if (control) {
            control.innerHTML = this.appText[textName];
        }
    }

    loadAppsterText(jsonData) {
        // LOAD THIS FROM A JSON FILE INSTEAD
        for (let i = 0; i < jsonData.app_text.length; i++) {
            let textToLoad = jsonData.app_text[i];
            let textName = Object.keys(textToLoad)[0];
            let textValue = textToLoad[textName];
            this.loadAppText(textName, textValue);
        }
    }

    setController(initController) {
        this.controller = initController;
        this.setupHandlers();
    }

    // THESE ARE FUNCTIONS THAT ARE TO BE OVERRIDDEN BY THE CHILD CLASS
    fillAppWorkspace(workspace) {
        
    }

    setupHandlers() {

    }

    getAppText(textName) {
        if (this.appText[textName])
            return this.appText[textName];
        else
            return "?";
    }

    /**
     * This function builds and returns a root HTML element for our
     * Appster app. Note that it will delegate the building of custom
     * details to the child hook functions, like the text used on
     * the new work button and the building of the app logo.
     */
    loadRoot(appData) {
        let appsterRootDiv = document.getElementById(AppsterGUIId.APPSTER_ROOT_DIV);
        if (!appsterRootDiv) {
            // AN ERROR HAS OCCURED, PROVIDE FEEDBACK
            let errorMessage = this.getAppText(AppsterText.MISSING_ROOT_DIV_ERROR_TEXT);
            console.error(errorMessage);
            appsterRootDiv.innerHTML = errorMessage;
        }
        else {
            // LOAD TEXT FROM THE JSON FILE INTO THE APPROPRIATE UI CONTROLS
            this.loadAppsterText(appData);

            // LOAD THE APPSTER UI
            let appsterHomeScreenDiv = this.buildAppsterHomeScreenDiv();
            let appsterEditScreenDiv = this.buildAppsterEditScreenDiv();
            let appsterYesNoModal = this.buildAppsterYesNoModal();
            let appsterConfirmModal = this.buildAppsterConfirmModal();
            let appsterTextInputModal = this.buildAppsterTextInputModal();
            appsterRootDiv.appendChild(appsterHomeScreenDiv);
            appsterRootDiv.appendChild(appsterEditScreenDiv);
            appsterRootDiv.appendChild(appsterYesNoModal);
            appsterRootDiv.appendChild(appsterConfirmModal);
            appsterRootDiv.appendChild(appsterTextInputModal);

            // HIDE THE THINGS THAT ARE NOT VISIBLE
            this.showElementWithId(AppsterGUIId.APPSTER_EDIT_SCREEN, false);            
        }
    }

    buildElement(elementType, idValue, classValues, attributesMap, textId, dataAnimation) {
        let element = document.createElement(elementType);
        if (idValue) {
            element.setAttribute(AppsterHTML.ID, idValue);
        }
        if (classValues) {
            for (let i = 0; i < classValues.length; i++) {
                let classValue = classValues[i];
                element.classList.add(classValue);
            }
        }
        if (attributesMap) {
            for (var key in attributesMap) {
                let attributeValue = attributesMap[key];
                element.setAttribute(key, attributeValue);
            }
        }
        if (textId) {
            let text = this.appText[textId];
            if (text) {
                element.innerHTML = text;
            }
            this.registerAppTextControl(idValue, element);
        }
        if (dataAnimation) {
            element.setAttribute(AppsterHTML.DATA_ANIMATION, dataAnimation);
        }
        return element;
    }

    buildAppsterHomeScreenDiv() {
        // BUILD THE THREE THINGS THIS SCREEN HAS
        let recentWorkDiv = this.buildAppsterRecentWorkDiv();
        let logoDiv = this.buildAppsterLogoDiv();
        let newWorkDiv = this.buildAppsterNewWorkDiv();

        // MAKE THE SCREEN AND ADD THE THREE PIECES
        let homeScreenDiv = this.buildElement(AppsterHTML.DIV, AppsterGUIId.APPSTER_HOME_SCREEN);
        homeScreenDiv.appendChild(recentWorkDiv);
        homeScreenDiv.appendChild(logoDiv);
        homeScreenDiv.appendChild(newWorkDiv);

        return homeScreenDiv;
    }

    buildAppsterRecentWorkDiv() {
        let recentWorkHeading = this.buildElement(  AppsterHTML.H3, 
                                                    AppsterGUIId.APPSTER_HOME_RECENT_WORK_HEADING,
                                                    [],
                                                    [],
                                                    AppsterText.APPSTER_HOME_RECENT_WORK_HEADING_TEXT);
        let recentWorkList = this.buildElement( AppsterHTML.DIV, 
                                                AppsterGUIId.APPSTER_HOME_RECENT_WORK_LIST);
        let recentWorkDiv = this.buildElement(  AppsterHTML.DIV, 
                                                AppsterGUIId.APPSTER_HOME_RECENT_WORK_CONTAINER);
        recentWorkDiv.appendChild(recentWorkHeading);
        recentWorkDiv.appendChild(recentWorkList);
        return recentWorkDiv;
    }

    buildAppsterLogoDiv() {
        let logoDiv = this.buildElement(    AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_HOME_LOGO,
                                            [],
                                            [],
                                            AppsterText.APPSTER_HOME_LOGO_TEXT);
        return logoDiv;
    }

    buildAppsterNewWorkDiv() {
        let newWorkDiv = this.buildElement(AppsterHTML.DIV, AppsterGUIId.APPSTER_HOME_NEW_WORK_CONTAINER);
        let newWorkButton = this.buildElement(  AppsterHTML.BUTTON, 
                                                AppsterGUIId.APPSTER_HOME_NEW_WORK_BUTTON,
                                                [],
                                                [],
                                                AppsterText.APPSTER_HOME_NEW_WORK_BUTTON_TEXT);
        newWorkDiv.appendChild(newWorkButton);
        return newWorkDiv;
    }

    buildAppsterEditScreenDiv() {
        let toolbarDiv = this.buildElement(AppsterHTML.DIV, AppsterGUIId.APPSTER_EDIT_TOOLBAR);
        let headerDiv = this.buildElement(  AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_EDIT_HOME_LINK,
                                            [],
                                            [],
                                            AppsterText.APPSTER_EDIT_HOME_LINK_TEXT);
        let trash = this.buildElement(AppsterHTML.DIV, AppsterGUIId.APPSTER_EDIT_TRASH);
        trash.innerHTML = AppsterSymbols.DELETE;
        toolbarDiv.appendChild(headerDiv);
        toolbarDiv.appendChild(trash);
        let editScreenDiv = this.buildElement(AppsterHTML.DIV, AppsterGUIId.APPSTER_EDIT_SCREEN);
        editScreenDiv.appendChild(toolbarDiv);

        // THIS IS APP-SPECIFIC AND WILL BE DONE BY THE CHILD CLASS
        let workspace = this.buildElement(AppsterHTML.DIV, AppsterGUIId.APPSTER_EDIT_WORKSPACE);
        this.fillAppWorkspace(workspace);
        editScreenDiv.appendChild(workspace);
        return editScreenDiv;
    }

    buildAppsterYesNoModal() {
        let yesNoModal = this.buildElement( AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_YES_NO_MODAL,
                                            [AppsterGUIClass.APPSTER_MODAL],
                                            [],
                                            null,
                                            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let yesNoFrame = this.buildElement( AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_YES_NO_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement( AppsterHTML.HEADER, 
                                        AppsterGUIId.APPSTER_YES_NO_MODAL_HEADER,
                                        [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(    AppsterHTML.SECTION, 
                                            AppsterGUIId.APPSTER_YES_NO_MODAL_SECTION,
                                            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(    AppsterHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                AppsterText.APPSTER_YES_NO_MODAL_PROMPT_TEXT);
        let yesButton = this.buildElement(  AppsterHTML.BUTTON, 
                                            AppsterGUIId.APPSTER_YES_NO_MODAL_YES_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_YES_NO_MODAL_YES_BUTTON_TEXT);
        let noButton = this.buildElement(   AppsterHTML.BUTTON, 
                                            AppsterGUIId.APPSTER_YES_NO_MODAL_NO_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_YES_NO_MODAL_NO_BUTTON_TEXT);
        let footer = this.buildElement(     AppsterHTML.FOOTER, 
                                            "", 
                                            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
                                            [],
                                            AppsterText.APPSTER_YES_NO_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        yesNoFrame.appendChild(header);
        yesNoFrame.appendChild(section);
        section.appendChild(yesButton);
        section.appendChild(noButton);
        yesNoFrame.appendChild(footer);
        yesNoModal.appendChild(yesNoFrame);
        return yesNoModal;
    }

    buildAppsterConfirmModal() {
        let confirmModal = this.buildElement( AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_CONFIRM_MODAL,
                                            [AppsterGUIClass.APPSTER_MODAL],
                                            [],
                                            null,
                                            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let confirmFrame = this.buildElement( AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_CONFIRM_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement( AppsterHTML.HEADER, 
                                        AppsterGUIId.APPSTER_CONFIRM_MODAL_HEADER,
                                        [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(    AppsterHTML.SECTION, 
                                            AppsterGUIId.APPSTER_CONFIRM_MODAL_SECTION,
                                            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(     AppsterHTML.STRONG, 
                                            "",
                                            [],
                                            [],
                                            AppsterText.APPSTER_CONFIRM_MODAL_PROMPT_TEXT);
        let okButton = this.buildElement(   AppsterHTML.BUTTON, 
                                            AppsterGUIId.APPSTER_CONFIRM_MODAL_OK_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_CONFIRM_MODAL_OK_BUTTON_TEXT);
        let footer = this.buildElement(     AppsterHTML.FOOTER, 
                                            "", 
                                            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
                                            [],
                                            AppsterText.APPSTER_CONFIRM_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        confirmFrame.appendChild(header);
        confirmFrame.appendChild(section);
        section.appendChild(okButton);
        confirmFrame.appendChild(footer);
        confirmModal.appendChild(confirmFrame);
        return confirmModal;
    }

    buildAppsterTextInputModal() {
        let textModal = this.buildElement(  AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_TEXT_INPUT_MODAL,
                                            [AppsterGUIClass.APPSTER_MODAL],
                                            [],
                                            null,
                                            AppsterGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement( AppsterHTML.DIV, 
                                            AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_FRAME,
                                            [AppsterGUIClass.APPSTER_MODAL_FRAME]);
        let header = this.buildElement( AppsterHTML.HEADER, 
                                        AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_HEADER,
                                        [AppsterGUIClass.APPSTER_MODAL_HEADER]);
        let section = this.buildElement(    AppsterHTML.SECTION, 
                                            AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_SECTION,
                                            [AppsterGUIClass.APPSTER_MODAL_SECTION]);
        let p = this.buildElement(AppsterHTML.P);
        let strong = this.buildElement(    AppsterHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                AppsterText.APPSTER_TEXT_INPUT_MODAL_PROMPT_TEXT);
        let textFieldAttributes = [];
        textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
        let textField = this.buildElement(  AppsterHTML.INPUT,
                                            AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD,
                                            [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
                                            textFieldAttributes);
        let enterButton = this.buildElement(   AppsterHTML.BUTTON, 
                                            AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(AppsterHTML.BUTTON, 
                                            AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON,
                                            [AppsterGUIClass.APPSTER_MODAL_BUTTON],
                                            [],
                                            AppsterText.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(     AppsterHTML.FOOTER, 
                                            "", 
                                            [AppsterGUIClass.APPSTER_MODAL_FOOTER],
                                            [],
                                            AppsterText.APPSTER_TEXT_INPUT_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        return textModal;
    }

    /**
     * This method is for building and returning a link on the home page
     * of the app. One will be built for each item in the recent work list.
     * 
     * @param {String} workName Name of the work to appear in the link.
     */
    buildWorkListElement(workName) {
        let newA = this.buildElement(AppsterHTML.A);
        newA.setAttribute(AppsterHTML.CLASS, AppsterGUIClass.APPSTER_HOME_WORK_LINK);
        newA.setAttribute('href', '#');
        newA.innerHTML = workName;
        newA.workId = workName;
        let br = document.createElement(AppsterHTML.BR);
        newA.appendChild(br);
        this.controller.registerRecentWorkEventHandler(newA);
//        let callbackArguments = [workName];
//        this.controller.setupCallback(newA, AppsterHTML.ONCLICK, AppsterCallback.APPSTER_PROCESS_EDIT_WORK, callbackArguments);
        return newA;
    }

    refreshRecentWork(recentWork) {
        // GET THE RECENT WORK ELEMENT
        let recentWorkList = document.getElementById(AppsterGUIId.APPSTER_HOME_RECENT_WORK_LIST);
        
        // CLEAR IT
        while(recentWorkList.firstChild) {
            recentWorkList.removeChild(recentWorkList.firstChild);
        }

        // NOW GO THROUGH recentWork AND ADD ONE FOR EACH
        for (let i = 0; i < recentWork.length; i++) {
            // MAKE A NEW DOM ELEMENT FOR THIS WORK
            let appWork = recentWork[i];
            let workElement = this.buildWorkListElement(appWork.getName());
            
            // AND ADD IT TO THE LIST
            recentWorkList.appendChild(workElement);
        }
    }




    /**
     * This function will navigate the user to the home (i.e. welcome) screen.
     */
    goToHomeScreen() {
        //@Hide the dialog

        // THIS COULD HAPPEN ANYWHERE SO HIDE ALL THE OTHERS
        this.showElementWithId(AppsterGUIId.APPSTER_EDIT_SCREEN, false);

        // AND GO HOME
        this.showElementWithId(AppsterGUIId.APPSTER_HOME_SCREEN, true);        
    }

    /**
     * This function will navigate the user to the list screen where they
     * may edit a list.
     */
    goToEditScreen(workToEdit) {
        // THIS MIGHT HAVE OCCURED FROM HOME SO HIDE HOME
        this.showElementWithId(AppsterGUIId.APPSTER_HOME_SCREEN, false);

        // SHOW THE EDIT SCREEN
        this.showElementWithId(AppsterGUIId.APPSTER_EDIT_SCREEN, true);
    }

    /**
     * Helper method for making and returning an HTML open tag.
     * 
     * @param {String} tagName HTML type of tag to make.
     */
    buildOpenTag(tagName) {
        return "<" + tagName + ">";
    }

    /**
     * Helper method for making and returing an HTML close tag.
     * 
     * @param {String} tagName HTML type of tag to make.
     */
    buildCloseTag(tagName) {
        return "</" + tagName + ">";
    }

    /**
     * This method goes through all the work managed by this application
     * and one at time extracts the name of each and then creates a link for
     * each on the welcome page such that the user may edit one of them.
     * 
     * @param {Array} appsterWork 
     */
    reloadRecentWorkLinks(appsterWork) {
        let recentWorkList = document.getElementById(AppsterGUIId.APPSTER_HOME_RECENT_WORK_LIST);
        this.removeAllChildren(recentWorkList);
        for (let i = 0; i < appsterWork.length; i++) {
            let work = appsterWork[i];
            this.appendWorkLink(work);
        }
    }

    /**
     * This method appends a link to the welcome page for the workToAppend argument provided.
     * 
     * @param {AppWork} workToAppend 
     */
    appendWorkLink(workToAppend) {
        let recentWorkList = document.getElementById(AppsterGUIId.APPSTER_HOME_RECENT_WORK_LIST);
        let workName = workToAppend.getName();
        let newA = this.buildWorkListElement(workName);
        recentWorkList.appendChild(newA);
        let newBr = document.createElement(AppsterHTML.BR);
        recentWorkList.appendChild(newBr);
    }


    /**
     * This method goes through the node argument and removes all its child nodes.
     * 
     * @param {Node} node 
     */
    removeAllChildren(node) {
        if (!node)
            console.log("WHAT?");
        let child = node.firstElementChild;
        while (child) {
            child.remove();
            child = node.firstElementChild;
        }
    }    
    

   /**
    * This method is for toggling the element argument to show it or hide it.
    * 
    * @param {Element} element 
    * @param {Boolean} show 
    */
   showElement(element, show) {
       if (!element)
           console.log("WHAT?");
       element.hidden = !show;
       if (show)
           console.log(element);

       // NOW HIDE FROM ALL THE CHILDREN
       if (element.hasChildNodes()) {
           for (let i = 0; i < element.childNodes.length; i++) {
               var child = element.childNodes[i];
               this.showElement(child, show);
           }
       }
   }

   /**
    * This method is for toggling the element in the DOM with the elementId id to
    * show it or hide it.
    * 
    * @param {String} elementId 
    * @param {Boolean} show 
    */
   showElementWithId(elementId, show) {
       let element = document.getElementById(elementId);
       this.showElement(element, show);
   }

   /**
    * This method is for hiding the yes/no dialog.
    */
   hideDialog() {
       let dialog = document.getElementById(AppsterGUIId.MODAL_YES_NO_DIALOG);
       dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
   }

   /**
    * This method is for showing the yes/no dialog.
    */
   showDialog() {
       let dialog = document.getElementById(AppsterGUIId.MODAL_YES_NO_DIALOG);
       dialog.classList.add(AppsterGUIClass.IS_VISIBLE);
   }
}