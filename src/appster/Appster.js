/**
 * Appster
 * 
 * The Appster API lets one create simple Web applications that do not
 * persist data, but let one learn a bit about how to create front-end
 * apps using JavaScript.
 */

export default class Appster {
    constructor(initModel, initView, initController) {
        // Appster APPS REQUIRE A MODEL, VIEW, AND CONTROLLER
        this.model = initModel;
        this.view = initView;
        this.controller = initController;

        // THE MODEL NEEDS TO BE ABLE TO INFORM THE VIEW
        // EVERY TIME DATA CHANGES
        this.model.setView(this.view);

        // THE VIEW NEEDS THE CONTROLLER TO SETUP
        // EVENT HANDLING
        this.view.setController(this.controller);

        // THE CONTROLLER NEEDS TO BE ABLE TO CALL SERVICE
        // METHODS IN THE MODEL TO CHANGE DATA
        this.controller.setModel(this.model);
    }

    /**
     * launch
     * 
     * This function is to be called after custom Appster app initialization
     * is done. It will load the full appster app into the Web page.
     */
    launch(appDataPath) {
        // LOAD THE JSON FILE THAT HAS THE APP SETTINGS
        this.loadJsonFile(appDataPath, this.loadJsonData);
    }

    loadJsonData = (jsonText) => {
        // FIRST PARSE THE JSON FILE FROM PURE TEXT TO AN OBJECT
        // WE CAN TAKE THE DATA WE WANT OUT OF
        var appData = JSON.parse(jsonText);

        // FIRST SETUP THE BASIC PAGE STRUCTURE
        this.view.loadRoot(appData);
    
        // NOW LOAD THE RECENT WORK
        this.model.loadRecentWork(appData);

        // AND SETUP THE APPSTER EVENT HANDLERS
        this.controller.registerAppsterEventHandlers();
    }

    loadJsonFile(testFilePath, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', testFilePath, true);
        xobj.onreadystatechange = function () {
            if ((xobj.readyState == 4) && (xobj.status == "200")) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }
}