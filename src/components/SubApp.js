/**
 * Created by t on 10/17/2016.
 */
import React, {Component} from 'react';

// compiles the SCSS style sheet
require('!style!css!sass!./stylesheets/style.scss');

class SubApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            liked: false,
            counter: 0,
            title: "A test",
            locale: "en_US",
            localeDisplayName: "United States (English)",
            locales: [{countryCode: "US", languageCode: "en", countryName: "United States", languageName: "English"},
                {countryCode: "GB", languageCode: "en", countryName: "United Kingdom", languageName: "English"},
                {countryCode: "CA", languageCode: "en", countryName: "Canada", languageName: "English"},
                {countryCode: "CA", languageCode: "fr", countryName: "Canada", languageName: "Français"},
                {countryCode: "CN", languageCode: "zh", countryName: "中国", languageName: "中文"},
                {countryCode: "JP", languageCode: "ja", countryName: "日本", languageName: "日本語"}]
        };
        // this.onClick = this.onClick.bind(this);

        /* we do not need to call 'this.onFocus.bind(this)'
         * if use a fat arrow to define this function in constructor
          */
        this.onFocus = (event) => {
            this.setState({
                title: "Hovered tested!"
            })
        }
    }

    onClick(event){
        this.setState({
            liked: !this.state.liked,
            counter: this.state.counter + 1
        })

        this._input.value = this.state.counter;
        this._input.selected;
    }

    changeLocale(loc, event){
        this.setState({
            locale: loc.languageCode + "_" + loc.countryCode,
            localeDisplayName: loc.countryName + " (" + loc.languageName + ")"
        })
    }

    render() {
        var that = this;
        const text = that.state.liked ? 'like' : 'do not like';
        const currentLocale = that.props.locale;
        var currentLocaleName = that.state.localeDisplayName;
        let locales = that.state.locales;
        for(let i=0; i<locales.length; i++){
            let localeCode = locales[i].languageCode + "_" + locales[i].countryCode;
            if(localeCode == currentLocale){
                currentLocaleName =  locales[i].countryName + " (" + locales[i].languageName + ")";
                break;
            }
        }

        return (
            <div>
                <p onClick={that.onClick.bind(that)}>
                    You <b>{text}</b> me. Click to switch state.
                </p>
                <p>
                    You have already clicked <a onMouseOver={that.onFocus}>{that.state.counter}</a> time(s).
                    Current state title is: {that.state.title}
                </p>
                <p>
                    <input type="text" id="myInput" ref={(c) => that._input = c} />
                </p>
                <a classID="gnbLocaleName">{currentLocaleName}</a>
                <div className="countrySelector" classID="gnbCountrySelector">
                    <ul>
                        {that.state.locales.map(function(locale, i){
                            let liClassName = "country_" + locale.countryCode;
                            let localeName = locale.countryName + " (" + locale.languageName + ")";
                            return <li key={i} className={liClassName} onClick={that.changeLocale.bind(that, locale)}>{localeName}</li> })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SubApp;