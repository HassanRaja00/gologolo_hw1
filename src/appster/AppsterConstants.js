/**
 * AppsterConstants.js
 * 
 * This file lists all the constants used by this framework for 
 * setting up and using the user interface. Note that constants are
 * useful for abstracting GUI controls. Using constants helps us to
 * avoid spelling errors in string literals and will also make it
 * easier for us to change the language used by our site. One goal
 * for this Web application is not to use any string literals inside
 * of functions, but rather to cite appropriate string constants
 * when suitable.
 * 
 * @author McKilla Gorilla
 */

/**
 * AppsterCallback - these are the functions we'll define that will be
 * called in response to interactions with GUI controls.
 */
export const AppsterCallback = {
    // SOME CALLBACKS ARE SETUP AT THE START BECAUSE THE 
    // CONTROLS ARE DECLARED INSIDE index.html
    APPSTER_PROCESS_CREATE_NEW_WORK: "processCreateNewWork",
    APPSTER_PROCESS_EDIT_WORK: "processEditWork",
    APPSTER_PROCESS_GO_HOME: "processGoHome",
    APPSTER_PROCESS_DELETE_WORK: "processDeleteWork",
    APPSTER_PROCESS_CONFIRM_DELETE_WORK: "processConfirmDeleteWork",
    APPSTER_PROCESS_CANCEL_DELETE_WORK: "processCancelDeleteWork"
};

/**
 * AppsterGUIClass - these are the html style classes we'll use for
 * our GUI controls. We'll need these so our style sheets can consistently
 * size, locate, and stylize our user interface controls.
 */
export const AppsterGUIClass = {
    // HOME SCREEN CLASSes
    APPSTER_HOME_WORK_LINK: "appster_home_work_link",

    // CLASSES FOR MODALS
    APPSTER_MODAL: "appster_modal",
    APPSTER_MODAL_FRAME: "appster_modal_frame",
    APPSTER_MODAL_HEADER: "appster_modal_header",
    APPSTER_MODAL_SECTION: "appster_modal_section",
    APPSTER_MODAL_TEXTFIELD: "appster_modal_textfield",
    APPSTER_MODAL_BUTTON: "appster_modal_button",
    APPSTER_MODAL_FOOTER: "appster_modal_footer",

    IS_VISIBLE: "is_visible",

    // MODAL ANIMATION CLASS
    MODAL_ANIMATION_LEFT: "modal_animation_left"
};

/**
 * AppsterGUIId - these are the unique identifiers we will use to label
 * each control in our user interface such that we may retrieve them
 * as needed to set them up, update their display, or properly handle 
 * events.
 */
export const AppsterGUIId = {
    // THE WEB APP'S ROOT ELEMENT
    APPSTER_ROOT_DIV: "appster_root_div",

    // IDs FOR SCREENS
    APPSTER_HOME_SCREEN: 'appster_home_screen',
    APPSTER_EDIT_SCREEN: 'appster_edit_screen',

    // IDs FOR HOME SCREEN CONTROLS
    APPSTER_HOME_RECENT_WORK_CONTAINER: 'appster_home_recent_work_container',
    APPSTER_HOME_RECENT_WORK_HEADING: 'appster_home_recent_work_heading',
    APPSTER_HOME_RECENT_WORK_LIST: 'appster_home_recent_work_list',
    APPSTER_HOME_LOGO: 'appster_home_logo',
    APPSTER_HOME_NEW_WORK_CONTAINER: 'appster_home_new_work_container',
    APPSTER_HOME_NEW_WORK_BUTTON: 'appster_home_new_work_button',

    // IDs FOR EDIT SCREEN CONTROLS
    APPSTER_EDIT_TOOLBAR: 'appster_edit_toolbar',
    APPSTER_EDIT_HOME_LINK: 'appster_edit_home_link',
    APPSTER_EDIT_TRASH: 'appster_edit_trash',
    APPSTER_EDIT_WORKSPACE: 'appster_edit_workspace',

    // IDs FOR MODALS
    APPSTER_YES_NO_MODAL: 'appster_yes_no_modal', //Delete logo prompt for now
    APPSTER_YES_NO_MODAL_FRAME: 'appster_yes_no_modal_frame',
    APPSTER_YES_NO_MODAL_HEADER: 'appster_yes_no_modal_header',
    APPSTER_YES_NO_MODAL_SECTION: 'appster_yes_no_modal_section',
    APPSTER_YES_NO_MODAL_YES_BUTTON: 'appster_yes_no_modal_yes_button',
    APPSTER_YES_NO_MODAL_NO_BUTTON: 'appster_yes_no_modal_no_button',
    APPSTER_YES_NO_MODAL_FOOTER: 'appster_yes_no_modal_footer',
    APPSTER_CONFIRM_MODAL: 'appster_confirm_modal', // illegal name prompt for now
    APPSTER_CONFIRM_MODAL_FRAME: 'appster_confirm_modal_frame',
    APPSTER_CONFIRM_MODAL_HEADER: 'appster_confirm_modal_header',
    APPSTER_CONFIRM_MODAL_SECTION: 'appster_confirm_modal_section',
    APPSTER_CONFIRM_MODAL_OK_BUTTON: 'appster_confirm_modal_ok_button',
    APPSTER_CONFIRM_MODAL_FOOTER: 'appster_confirm_frame',
    APPSTER_TEXT_INPUT_MODAL: 'appster_text_input_modal', // Name logo prompt for now
    APPSTER_TEXT_INPUT_MODAL_FRAME: 'appster_text_input_modal_frame',
    APPSTER_TEXT_INPUT_MODAL_HEADER: 'appster_text_input_modal_header',
    APPSTER_TEXT_INPUT_MODAL_SECTION: 'appster_text_input_modal_section',
    APPSTER_TEXT_INPUT_MODAL_TEXTFIELD: "appster_text_input_modal_textfield",
    APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON: 'appster_text_input_modal_enter_button',
    APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON: 'appster_text_input_modal_cancel_button',
    APPSTER_TEXT_INPUT_MODAL_FOOTER: 'appster_text_input_modal_footer'
};

/**
 * AppsterHTML - these are html elements, attributes, and events that will be needed
 * to generate the appropriate text for our site pages.
 */
export const AppsterHTML = {
    A: "a",
    BR: "br",
    BUTTON: "button",
    CLASS: "class",
    CLICK: "click",
    COLOR: "color",
    DATA_ANIMATION: "data-animation",
    DIV: "div",
    HEADER: "header",
    H1: "h1", H2: "h2", H3: "h3", H4: "h4", H5: "h5", H6: "h6",  
    HIDDEN: "hidden",
    ID: "id",
    INPUT: "input",
    KEYUP: "keyup",
    LI: "li",
    ONCLICK: "onclick",
    P: "p",
    RANGE: "range",
    SECTION: "section",
    SELECTION: "selection",
    SPAN: "span",
    STRONG: "strong",
    TEXT: "text",
    TYPE: "type",
    UL: "ul"
};

/**
  * AppsterSymbols - these are the HTML symbols we may use in an application. Note
  * that combined with different fonts HTML has a number of symbols that can be
  * use in place of icons. They are easy to use, are language independent,
  * and scale well.
  */
 export const AppsterSymbols = {
    DELETE: "&#128465;" ,    // TRASH SYMBOL
    EDIT: "Edit Text ✎"
};

export const AppsterText = {
    APPSTER_HOME_LOGO_TEXT: "appster_home_logo_text",
    APPSTER_HOME_NEW_WORK_BUTTON_TEXT: "appster_home_new_work_button_text",
    APPSTER_HOME_RECENT_WORK_HEADING_TEXT: "appster_home_recent_work_heading_text",
    APPSTER_EDIT_HOME_LINK_TEXT: "appster_edit_home_link_text",
    APPSTER_MISSING_ROOT_DIV_ERROR_TEXT: "appster_missing_root_div_error_text",

    APPSTER_YES_NO_MODAL_PROMPT_TEXT: "appster_yes_no_modal_prompt_text",
    APPSTER_YES_NO_MODAL_YES_BUTTON_TEXT: "appster_yes_no_modal_yes_button_text",
    APPSTER_YES_NO_MODAL_NO_BUTTON_TEXT: "appster_yes_no_modal_no_button_text",
    APPSTER_YES_NO_MODAL_FOOTER_TEXT: "appster_yes_no_modal_footer_text",

    APPSTER_CONFIRM_MODAL_PROMPT_TEXT: "appster_confirm_modal_prompt_text",
    APPSTER_CONFIRM_MODAL_OK_BUTTON_TEXT: "appster_confirm_modal_ok_button_text",
    APPSTER_CONFIRM_MODAL_FOOTER_TEXT: "appster_confirm_modal_footer_text",

    APPSTER_TEXT_INPUT_MODAL_PROMPT_TEXT: "appster_text_input_modal_prompt_text",
    APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT: "appster_text_input_modal_enter_button_text",
    APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT: "appster_text_input_modal_cancel_button_text",
    APPSTER_TEXT_INPUT_MODAL_FOOTER_TEXT: "appster_text_input_modal_footer_text",

    APPSTER_MODAL_ANIMATION_TEXT: "appster_slideInOutLeft"
}