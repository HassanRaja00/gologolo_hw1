import AppWork from '../appster/AppWork.js'
import {GoLogoLoDefaults} from './GoLogoLoConstants.js'

export default class GoLogoLoLogo extends AppWork {
    constructor(name) {
        super(name);
        this.text = GoLogoLoDefaults.GOLOGOLO_DEFAULT_TEXT;
        this.fontSize = GoLogoLoDefaults.GOLOGOLO_DEFAULT_FONT_SIZE;
        this.textColor = GoLogoLoDefaults.GOLOGOLO_DEFAULT_TEXT_COLOR;
        this.backgroundColor = GoLogoLoDefaults.GOLOGOLO_DEFAULT_BACKGROUND_COLOR;
        this.borderColor = GoLogoLoDefaults.GOLOGOLO_DEFAULT_BORDER_COLOR;
        this.borderRadius = GoLogoLoDefaults.GOLOGOLO_DEFAULT_BORDER_RADIUS;
        this.borderThickness = GoLogoLoDefaults.GOLOGOLO_DEFAULT_BORDER_THICKNESS;
        this.padding = GoLogoLoDefaults.GOLOGOLO_DEFAULT_PADDING;
        this.margin = GoLogoLoDefaults.GOLOGOLO_DEFAULT_MARGIN;
    }

    setText(initText) {
        this.text = initText;
    }

    getText() {
        return this.text;
    }

    setFontSize(initFontSize) {
        this.fontSize = initFontSize;
    }

    getFontSize() {
        return this.fontSize;
    }

    setTextColor(initColor) {
        this.textColor = initColor;
    }

    getTextColor() {
        return this.textColor;
    }

    setBackgroundColor(initColor) {
        this.backgroundColor = initColor;
    }

    getBackgroundColor() {
        return this.backgroundColor;
    }

    setBorderColor(initColor) {
        this.borderColor = initColor;
    }

    getBorderColor() {
        return this.borderColor;
    }

    setBorderRadius(initBorderRadius) {
        this.borderRadius = initBorderRadius;
    }

    getBorderRadius() {
        return this.borderRadius;
    }

    setBorderThickness(initBorderThickness) {
        this.borderThickness = initBorderThickness;
    }

    getBorderThickness() {
        return this.borderThickness;
    }

    setPadding(initPadding) {
        this.padding = initPadding;
    }

    getPadding() {
        return this.padding;
    }

    setMargin(initMargin) {
        this.margin = initMargin;
    }

    getMargin() {
        return this.margin;
    }
}