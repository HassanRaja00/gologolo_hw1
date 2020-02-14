export default class AppsterModel {
    constructor() {
        // THE RECENT WORK LIST
        this.recentWork = new Array();

        // THE WORK CURRENTLY BEING EDITED
        this.currentWork = null;
    }

    getRecentWork(workName) {
        for (let i = 0; i < this.recentWork.length; i++) {
            let testWork = this.recentWork[i];
            if (testWork.getName() === workName)
                return testWork;
        }
        return null;
    }

    setView(initView) {
        this.view = initView;
    }

    goHome() {
        this.view.goToHomeScreen();
    }

    editWork(workNameToEdit) {
        // GET THE WORK THAT WE PLAN TO EDIT
        let work = this.getRecentWork(workNameToEdit);

        if (work) {
            // SET IT AS THE WORK WE ARE EDITING
            this.workToEdit = work;
            this.moveWorkToTop(this.workToEdit);

            // LOAD DATA INTO THE UI
            this.view.loadWork(this.workToEdit); 

            // CHANGE THE SCREEN
            this.view.goToEditScreen(work);
        }
    }

    loadRecentWork(jsonData) {
        // THEN LOAD ALL DATA FROM RECENT WORK FROM THE JSON FILE
        for (let i = 0; i < jsonData.recent_work.length; i++) {
            let workData = jsonData.recent_work[i];
            let appWork = this.buildAppWork(jsonData.recent_work, workData.name);
            this.recentWork.push(appWork);
        }
        
        // ALL RECENT WORK HAS BEEN LOADED FROM THE
        // JSON FILE, NOW WE CAN UPDATE THE VIEW
        this.view.refreshRecentWork(this.recentWork);        
    }

    /**
     * Appends the work to the recent work list.
     * 
     * @param {AppWork} workToAppend Work to append to the recent work list.
     */
    appendWork(workToAppend) {
        this.recentWork.push(workToAppend);
        this.view.appendWorkLink(workToAppend);
    }

    /**
     * Prepends the work to the recent work list.
     * 
     * @param {AppWork} workToPrepend Work to prepend to the recent work list.
     */
    prependWork(workToPrepend) {
        this.recentWork.unshift(workToPrepend);
        this.view.reloadRecentWorkLinks(this.recentWork);
    }

    /**
     * Removes the work from the list of work.
     * 
     * @param {AppWork} workToRemove Work to remove, presumably it's been deleted.
     */
    removeWork(workToRemove) {
        // REMOVE IT IF IT EXISTS
        let indexOfWork = this.recentWork.indexOf(workToRemove);
        if (indexOfWork >= 0)
            this.recentWork.splice(indexOfWork, 1);
        this.view.reloadRecentWorkLinks(this.recentWork);
    }

    /**
     * This function moves workToMove to the top of the list of recdent work
     * that can be edited, which will be reflected on the welcome page.
     */
    moveWorkToTop(workToMove) {
        // REMOVE THE WORK IF IT EXISTS
        this.removeWork(workToMove);

        // AND THEN ADD IT TO THE TOP OF THE STACK
        this.prependWork(workToMove);
    }

    /**
     * Changes the name of the work being edited.
     * 
     * @param {AppWork} workBeingEdited Work in the process of being edited.
     * @param {String} newName The new name of the work.
     */
    updateWorkName(workBeingEdited, newName) {
        // WE'RE GOING TO CHANGE THE NAME TOO BUT ONLY UPDATE
        // THE LIST OF LIST LINKS IF IT'S CHANGED
        if (workBeingEdited.getName() != newName) {
            workBeingEdited.setName(newName);
            this.view.reloadRecentWorkLinks(this.recentWork);
        }
    }

    /**
     * This method creates a new list and sets it up so that it
     * can be edited.
     */
    loadNewList() {
        this.listToEdit = this.createNewWork();
        this.prependList(this.listToEdit);
        this.view.loadListData(this.listToEdit);
    }
}