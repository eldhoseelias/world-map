var selectedCountries=[];
var coverageData={};
var colors = {active:"#084B7E",inactive:"#9B9B9B",selected:"#4EBEA4",hover:"#20758C"}

$(function () {
    coverageData ={
        "AF": {
            "name": "Afghanistan",
            "code": "AF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Afghanistan</span>"
            }
        },
        "AX": {
            "name": "Aland Islands",
            "code": "AX",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Aland Islands</span>"
            }
        },
        "AL": {
            "name": "Albania",
            "code": "AL",
            "country1": "Albania",
            "data": [{
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Albania</span>"
            }
        },
        "DZ": {
            "name": "Algeria",
            "code": "DZ",
            "country1": "Algeria",
            "data": [{
                "network": "ATM Mobilis",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Algeria</span>"
            }
        },
        "AS": {
            "name": "American Samoa",
            "code": "AS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >American Samoa</span>"
            }
        },
        "AD": {
            "name": "AndorrA",
            "code": "AD",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >AndorrA</span>"
            }
        },
        "AO": {
            "name": "Angola",
            "code": "AO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Angola</span>"
            }
        },
        "AI": {
            "name": "Anguilla",
            "code": "AI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Anguilla</span>"
            }
        },
        "AQ": {
            "name": "Antarctica",
            "code": "AQ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Antarctica</span>"
            }
        },
        "AG": {
            "name": "Antigua and Barbuda",
            "code": "AG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Antigua and Barbuda</span>"
            }
        },
        "AR": {
            "name": "Argentina",
            "code": "AR",
            "country1": "Argentina",
            "data": [{
                "network": "Telefonica",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT, LTE-M"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Argentina</span>"
            }
        },
        "AM": {
            "name": "Armenia",
            "code": "AM",
            "country1": "Armenia",
            "data": [{
                "network": "Armentel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Armenia</span>"
            }
        },
        "AW": {
            "name": "Aruba",
            "code": "AW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Aruba</span>"
            }
        },
        "AU": {
            "name": "Australia",
            "code": "AU",
            "country1": "Australia",
            "data": [{
                "network": "Optus",
                "coverage": "4G/LTE"
            }, {
                "network": "Vodafone",
                "coverage": "4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Australia</span>"
            }
        },
        "AT": {
            "name": "Austria",
            "code": "AT",
            "country1": "Austria",
            "data": [{
                "network": "H3G",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "T-Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Austria</span>"
            }
        },
        "AZ": {
            "name": "Azerbaijan",
            "code": "AZ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Azerbaijan</span>"
            }
        },
        "BS": {
            "name": "Bahamas",
            "code": "BS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Bahamas</span>"
            }
        },
        "BH": {
            "name": "Bahrain",
            "code": "BH",
            "country1": "Bahrain",
            "data": [{
                "network": "Zain BH",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Bahrain</span>"
            }
        },
        "BD": {
            "name": "Bangladesh",
            "code": "BD",
            "country1": "Bangladesh",
            "data": [{
                "network": "Robi",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Banglalink",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "GrameenPhone",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Bangladesh</span>"
            }
        },
        "BB": {
            "name": "Barbados",
            "code": "BB",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Barbados</span>"
            }
        },
        "BY": {
            "name": "Belarus",
            "code": "BY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Belarus</span>"
            }
        },
        "BE": {
            "name": "Belgium",
            "code": "BE",
            "country1": "Belgium",
            "data": [{
                "network": "Orange",
                "coverage": "GSM/GPRS, 4G/LTE, LTE-M"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Belgium</span>"
            }
        },
        "BZ": {
            "name": "Belize",
            "code": "BZ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Belize</span>"
            }
        },
        "BJ": {
            "name": "Benin",
            "code": "BJ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Benin</span>"
            }
        },
        "BM": {
            "name": "Bermuda",
            "code": "BM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Bermuda</span>"
            }
        },
        "BT": {
            "name": "Bhutan",
            "code": "BT",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Bhutan</span>"
            }
        },
        "BO": {
            "name": "Bolivia",
            "code": "BO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Bolivia</span>"
            }
        },
        "BA": {
            "name": "Bosnia and Herzegovina",
            "code": "BA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Bosnia and Herzegovina</span>"
            }
        },
        "BW": {
            "name": "Botswana",
            "code": "BW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Botswana</span>"
            }
        },
        "BV": {
            "name": "Bouvet Island",
            "code": "BV",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Bouvet Island</span>"
            }
        },
        "BR": {
            "name": "Brazil",
            "code": "BR",
            "country1": "Brazil",
            "data": [{
                "network": "Telefonica",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT, LTE-M"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Brazil</span>"
            }
        },
        "IO": {
            "name": "British Indian Ocean Territory",
            "code": "IO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >British Indian Ocean Territory</span>"
            }
        },
        "BN": {
            "name": "Brunei Darussalam",
            "code": "BN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Brunei Darussalam</span>"
            }
        },
        "BG": {
            "name": "Bulgaria",
            "code": "BG",
            "country1": "Bulgaria",
            "data": [{
                "network": "Globul",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Bulgaria</span>"
            }
        },
        "BF": {
            "name": "Burkina Faso",
            "code": "BF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Burkina Faso</span>"
            }
        },
        "BI": {
            "name": "Burundi",
            "code": "BI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Burundi</span>"
            }
        },
        "KH": {
            "name": "Cambodia",
            "code": "KH",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cambodia</span>"
            }
        },
        "CM": {
            "name": "Cameroon",
            "code": "CM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cameroon</span>"
            }
        },
        "CA": {
            "name": "Canada",
            "code": "CA",
            "country1": "Canada",
            "data": [{
                "network": "Telus",
                "coverage": "4G/LTE, LTE-M"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Canada</span>"
            }
        },
        "CV": {
            "name": "Cape Verde",
            "code": "CV",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cape Verde</span>"
            }
        },
        "KY": {
            "name": "Cayman Islands",
            "code": "KY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cayman Islands</span>"
            }
        },
        "CF": {
            "name": "Central African Republic",
            "code": "CF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Central African Republic</span>"
            }
        },
        "TD": {
            "name": "Chad",
            "code": "TD",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Chad</span>"
            }
        },
        "CL": {
            "name": "Chile",
            "code": "CL",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Chile</span>"
            }
        },
        "CN": {
            "name": "China",
            "code": "CN",
            "country1": "China",
            "data": [{
                "network": "China Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "China Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "China Unicom",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >China</span>"
            }
        },
        "CX": {
            "name": "Christmas Island",
            "code": "CX",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Christmas Island</span>"
            }
        },
        "CC": {
            "name": "Cocos (Keeling) Islands",
            "code": "CC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cocos (Keeling) Islands</span>"
            }
        },
        "CO": {
            "name": "Colombia",
            "code": "CO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Colombia</span>"
            }
        },
        "KM": {
            "name": "Comoros",
            "code": "KM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Comoros</span>"
            }
        },
        "CG": {
            "name": "Congo",
            "code": "CG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Congo</span>"
            }
        },
        "CD": {
            "name": "Congo, The Democratic Republic of the",
            "code": "CD",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Congo, The Democratic Republic of the</span>"
            }
        },
        "CK": {
            "name": "Cook Islands",
            "code": "CK",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cook Islands</span>"
            }
        },
        "CR": {
            "name": "Costa Rica",
            "code": "CR",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Costa Rica</span>"
            }
        },
        "CI": {
            "name": "Cote D'Ivoire",
            "code": "CI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cote D'Ivoire</span>"
            }
        },
        "HR": {
            "name": "Croatia",
            "code": "HR",
            "country1": "Croatia",
            "data": [{
                "network": "Tmobile",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Tele2",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Croatia</span>"
            }
        },
        "CU": {
            "name": "Cuba",
            "code": "CU",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Cuba</span>"
            }
        },
        "CY": {
            "name": "Cyprus",
            "code": "CY",
            "country1": "Cyprus",
            "data": [{
                "network": "Cyta",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Primetel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "MTN",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Cyprus</span>"
            }
        },
        "CZ": {
            "name": "Czech Republic",
            "code": "CZ",
            "country1": "Czech Republic",
            "data": [{
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "T-Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Czech Republic</span>"
            }
        },
        "DK": {
            "name": "Denmark",
            "code": "DK",
            "country1": "Denmark",
            "data": [{
                "network": "Telenor",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT, LTE-M"
            }, {
                "network": "Hi3G Access",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Telia Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "TDC",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Denmark</span>"
            }
        },
        "DJ": {
            "name": "Djibouti",
            "code": "DJ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Djibouti</span>"
            }
        },
        "DM": {
            "name": "Dominica",
            "code": "DM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Dominica</span>"
            }
        },
        "DO": {
            "name": "Dominican Republic",
            "code": "DO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Dominican Republic</span>"
            }
        },
        "EC": {
            "name": "Ecuador",
            "code": "EC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Ecuador</span>"
            }
        },
        "EG": {
            "name": "Egypt",
            "code": "EG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Egypt</span>"
            }
        },
        "SV": {
            "name": "El Salvador",
            "code": "SV",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >El Salvador</span>"
            }
        },
        "GQ": {
            "name": "Equatorial Guinea",
            "code": "GQ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Equatorial Guinea</span>"
            }
        },
        "ER": {
            "name": "Eritrea",
            "code": "ER",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Eritrea</span>"
            }
        },
        "EE": {
            "name": "Estonia",
            "code": "EE",
            "country1": "Estonia",
            "data": [{
                "network": "Telia Eesti",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Tele2",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Elisa",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Estonia</span>"
            }
        },
        "ET": {
            "name": "Ethiopia",
            "code": "ET",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Ethiopia</span>"
            }
        },
        "FK": {
            "name": "Falkland Islands (Malvinas)",
            "code": "FK",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Falkland Islands (Malvinas)</span>"
            }
        },
        "FO": {
            "name": "Faroe Islands",
            "code": "FO",
            "country1": "Faroe Islands",
            "data": [{
                "network": "P/F Kall (Vodafone)",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Faroe Islands</span>"
            }
        },
        "FJ": {
            "name": "Fiji",
            "code": "FJ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Fiji</span>"
            }
        },
        "FI": {
            "name": "Finland",
            "code": "FI",
            "country1": "Finland",
            "data": [{
                "network": "Elisa",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "TeliaSonera",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Finland</span>"
            }
        },
        "FR": {
            "name": "France",
            "code": "FR",
            "country1": "France",
            "data": [{
                "network": "Orange",
                "coverage": "GSM/GPRS, 4G/LTE, LTE-M"
            }, {
                "network": "Bouygues Telecom",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Free Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >France</span>"
            }
        },
        "GF": {
            "name": "French Guiana",
            "code": "GF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >French Guiana</span>"
            }
        },
        "PF": {
            "name": "French Polynesia",
            "code": "PF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >French Polynesia</span>"
            }
        },
        "TF": {
            "name": "French Southern Territories",
            "code": "TF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >French Southern Territories</span>"
            }
        },
        "GA": {
            "name": "Gabon",
            "code": "GA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Gabon</span>"
            }
        },
        "GM": {
            "name": "Gambia",
            "code": "GM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Gambia</span>"
            }
        },
        "GE": {
            "name": "Georgia",
            "code": "GE",
            "country1": "Georgia",
            "data": [{
                "network": "Mobitel",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Georgia</span>"
            }
        },
        "DE": {
            "name": "Germany",
            "code": "DE",
            "country1": "Germany",
            "data": [{
                "network": "T-Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "O2",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Germany</span>"
            }
        },
        "GH": {
            "name": "Ghana",
            "code": "GH",
            "country1": "Ghana",
            "data": [{
                "network": "Vodafone",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Ghana</span>"
            }
        },
        "GI": {
            "name": "Gibraltar",
            "code": "GI",
            "country1": "Gibraltar",
            "data": [{
                "network": "Gibtel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Gibraltar</span>"
            }
        },
        "GR": {
            "name": "Greece",
            "code": "GR",
            "country1": "Greece",
            "data": [{
                "network": "Cosmote",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Wind Hellas",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Greece</span>"
            }
        },
        "GL": {
            "name": "Greenland",
            "code": "GL",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Greenland</span>"
            }
        },
        "GD": {
            "name": "Grenada",
            "code": "GD",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Grenada</span>"
            }
        },
        "GP": {
            "name": "Guadeloupe",
            "code": "GP",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guadeloupe</span>"
            }
        },
        "GU": {
            "name": "Guam",
            "code": "GU",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guam</span>"
            }
        },
        "GT": {
            "name": "Guatemala",
            "code": "GT",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guatemala</span>"
            }
        },
        "GG": {
            "name": "Guernsey",
            "code": "GG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guernsey</span>"
            }
        },
        "GN": {
            "name": "Guinea",
            "code": "GN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guinea</span>"
            }
        },
        "GW": {
            "name": "Guinea-Bissau",
            "code": "GW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guinea-Bissau</span>"
            }
        },
        "GY": {
            "name": "Guyana",
            "code": "GY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Guyana</span>"
            }
        },
        "HT": {
            "name": "Haiti",
            "code": "HT",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Haiti</span>"
            }
        },
        "HM": {
            "name": "Heard Island and Mcdonald Islands",
            "code": "HM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Heard Island and Mcdonald Islands</span>"
            }
        },
        "VA": {
            "name": "Holy See (Vatican City State)",
            "code": "VA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Holy See (Vatican City State)</span>"
            }
        },
        "HN": {
            "name": "Honduras",
            "code": "HN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Honduras</span>"
            }
        },
        "HK": {
            "name": "Hong Kong",
            "code": "HK",
            "country1": "Hong Kong",
            "data": [{
                "network": "Hutchison Telephone Co Ltd (2G)",
                "coverage": "GSM/GPRS"
            }, {
                "network": "SmarTone-Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Hong Kong</span>"
            }
        },
        "HU": {
            "name": "Hungary",
            "code": "HU",
            "country1": "Hungary",
            "data": [{
                "network": "Telenor",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "T-Mobile",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Hungary</span>"
            }
        },
        "IS": {
            "name": "Iceland",
            "code": "IS",
            "country1": "Iceland",
            "data": [{
                "network": "Nova",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Iceland</span>"
            }
        },
        "IN": {
            "name": "India",
            "code": "IN",
            "country1": "India",
            "data": [{
                "network": "Vodafone Idea",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Jio",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >India</span>"
            }
        },
        "ID": {
            "name": "Indonesia",
            "code": "ID",
            "country1": "Indonesia",
            "data": [{
                "network": "Hutchison CP Telecommunications",
                "coverage": "GSM/GPRS"
            }, {
                "network": "PT XL Axiata",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Telkomsel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Indonesia</span>"
            }
        },
        "IR": {
            "name": "Iran",
            "code": "IR",
            "data": [{
                "network": "MCI",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Iran</span>"
            }
        },
        "IQ": {
            "name": "Iraq",
            "code": "IQ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Iraq</span>"
            }
        },
        "IE": {
            "name": "Ireland",
            "code": "IE",
            "country1": "Ireland",
            "data": [{
                "network": "O2 (H3G)",
                "coverage": "GSM/GPRS, NB-IoT"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "H3G",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Eir",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Ireland</span>"
            }
        },
        "IM": {
            "name": "Isle of Man",
            "code": "IM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Isle of Man</span>"
            }
        },
        "IL": {
            "name": "Israel",
            "code": "IL",
            "country1": "Israel",
            "data": [{
                "network": "Pelephone",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Israel</span>"
            }
        },
        "IT": {
            "name": "Italy",
            "code": "IT",
            "country1": "Italy",
            "data": [{
                "network": "ILIAD Italia",
                "coverage": ""
            }, {
                "network": "WIND Tre",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Vodafone Omnitel",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "WIND Tre",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Italy</span>"
            }
        },
        "JM": {
            "name": "Jamaica",
            "code": "JM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Jamaica</span>"
            }
        },
        "JP": {
            "name": "Japan",
            "code": "JP",
            "country1": "Japan",
            "data": [{
                "network": "KDDI",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Japan</span>"
            }
        },
        "JE": {
            "name": "Jersey",
            "code": "JE",
            "country1": "Jersey",
            "data": [{
                "network": "JT Jersey",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Jersey</span>"
            }
        },
        "JO": {
            "name": "Jordan",
            "code": "JO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Jordan</span>"
            }
        },
        "KZ": {
            "name": "Kazakhstan",
            "code": "KZ",
            "country1": "Kazakhstan",
            "data": [{
                "network": "Mobile Telecom",
                "coverage": "GSM/GPRS"
            }, {
                "network": "KarTel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "K'Cell",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Kazakhstan</span>"
            }
        },
        "KE": {
            "name": "Kenya",
            "code": "KE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Kenya</span>"
            }
        },
        "KI": {
            "name": "Kiribati",
            "code": "KI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Kiribati</span>"
            }
        },
        "KP": {
            "name": "Korea, Democratic People's Republic of",
            "code": "KP",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Korea, Democratic People's Republic of</span>"
            }
        },
        "KR": {
            "name": "South Korea",
            "code": "KR",
            "data": [{
                "network": "LG Uplus",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >South Korea</span>"
            }
        },
        "KW": {
            "name": "Kuwait",
            "code": "KW",
            "country1": "Kuwait",
            "data": [{
                "network": "Zain",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Kuwait</span>"
            }
        },
        "KG": {
            "name": "Kyrgyzstan Republic",
            "code": "KG",
            "data": [{
                "network": "Sky Mobile",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Kyrgyzstan Republic</span>"
            }
        },
        "LA": {
            "name": "Lao People's Democratic Republic",
            "code": "LA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Lao People's Democratic Republic</span>"
            }
        },
        "LV": {
            "name": "Latvia",
            "code": "LV",
            "country1": "Latvia",
            "data": [{
                "network": "Tele2",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Latvian Mobile Tel Co (Telia)",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Latvia</span>"
            }
        },
        "LB": {
            "name": "Lebanon",
            "code": "LB",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Lebanon</span>"
            }
        },
        "LS": {
            "name": "Lesotho",
            "code": "LS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Lesotho</span>"
            }
        },
        "LR": {
            "name": "Liberia",
            "code": "LR",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Liberia</span>"
            }
        },
        "LY": {
            "name": "Libyan Arab Jamahiriya",
            "code": "LY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Libyan Arab Jamahiriya</span>"
            }
        },
        "LI": {
            "name": "Liechtenstein",
            "code": "LI",
            "country1": "Liechtenstein",
            "data": [{
                "network": "Orange",
                "coverage": ""
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Liechtenstein</span>"
            }
        },
        "LT": {
            "name": "Lithuania",
            "code": "LT",
            "country1": "Lithuania",
            "data": [{
                "network": "Tele2 AG",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Omnitel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Lithuania</span>"
            }
        },
        "LU": {
            "name": "Luxembourg",
            "code": "LU",
            "country1": "Luxembourg",
            "data": [{
                "network": "P & T Luxembourg",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Orange",
                "coverage": "GSM/GPRS, LTE-M"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Luxembourg</span>"
            }
        },
        "MO": {
            "name": "Macau",
            "code": "MO",
            "data": [{
                "country": "Macau",
                "network": "CTM",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "country": "Macau",
                "network": "Hutchison",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "country": "Macau",
                "network": "SmarTone",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Macau</span>"
            }
        },
        "MK": {
            "name": "Macedonia, The Former Yugoslav Republic of",
            "code": "MK",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Macedonia, The Former Yugoslav Republic of</span>"
            }
        },
        "MG": {
            "name": "Madagascar",
            "code": "MG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Madagascar</span>"
            }
        },
        "MW": {
            "name": "Malawi",
            "code": "MW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Malawi</span>"
            }
        },
        "MY": {
            "name": "Malaysia",
            "code": "MY",
            "country1": "Malaysia",
            "data": [{
                "network": "Celcom",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Maxis",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Malaysia</span>"
            }
        },
        "MV": {
            "name": "Maldives",
            "code": "MV",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Maldives</span>"
            }
        },
        "ML": {
            "name": "Mali",
            "code": "ML",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Mali</span>"
            }
        },
        "MT": {
            "name": "Malta",
            "code": "MT",
            "country1": "Malta",
            "data": [{
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Malta</span>"
            }
        },
        "MH": {
            "name": "Marshall Islands",
            "code": "MH",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Marshall Islands</span>"
            }
        },
        "MQ": {
            "name": "Martinique",
            "code": "MQ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Martinique</span>"
            }
        },
        "MR": {
            "name": "Mauritania",
            "code": "MR",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Mauritania</span>"
            }
        },
        "MU": {
            "name": "Mauritius",
            "code": "MU",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Mauritius</span>"
            }
        },
        "YT": {
            "name": "Mayotte",
            "code": "YT",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Mayotte</span>"
            }
        },
        "MX": {
            "name": "Mexico",
            "code": "MX",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Mexico</span>"
            }
        },
        "FM": {
            "name": "Micronesia, Federated States of",
            "code": "FM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Micronesia, Federated States of</span>"
            }
        },
        "MD": {
            "name": "Moldova, Republic of",
            "code": "MD",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Moldova, Republic of</span>"
            }
        },
        "MC": {
            "name": "Monaco",
            "code": "MC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Monaco</span>"
            }
        },
        "MN": {
            "name": "Mongolia",
            "code": "MN",
            "country1": "Mongolia",
            "data": [{
                "network": "Unitel",
                "coverage": ""
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Mongolia</span>"
            }
        },
        "MS": {
            "name": "Montserrat",
            "code": "MS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Montserrat</span>"
            }
        },
        "MA": {
            "name": "Morocco",
            "code": "MA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Morocco</span>"
            }
        },
        "MZ": {
            "name": "Mozambique",
            "code": "MZ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Mozambique</span>"
            }
        },
        "MM": {
            "name": "Myanmar",
            "code": "MM",
            "country1": "Myanmar",
            "data": [{
                "network": "Telenor",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Myanmar</span>"
            }
        },
        "NA": {
            "name": "Namibia",
            "code": "NA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Namibia</span>"
            }
        },
        "NR": {
            "name": "Nauru",
            "code": "NR",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Nauru</span>"
            }
        },
        "NP": {
            "name": "Nepal",
            "code": "NP",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Nepal</span>"
            }
        },
        "NL": {
            "name": "Netherlands",
            "code": "NL",
            "country1": "Netherlands",
            "data": [{
                "network": "T-Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodafone Libertel",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "T-Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "KPN Telecom",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Netherlands</span>"
            }
        },
        "AN": {
            "name": "Netherlands Antilles",
            "code": "AN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Netherlands Antilles</span>"
            }
        },
        "NC": {
            "name": "New Caledonia",
            "code": "NC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >New Caledonia</span>"
            }
        },
        "NZ": {
            "name": "New Zealand",
            "code": "NZ",
            "country1": "New Zealand",
            "data": [{
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Spark",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >New Zealand</span>"
            }
        },
        "NI": {
            "name": "Nicaragua",
            "code": "NI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Nicaragua</span>"
            }
        },
        "NE": {
            "name": "Niger",
            "code": "NE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Niger</span>"
            }
        },
        "NG": {
            "name": "Nigeria",
            "code": "NG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Nigeria</span>"
            }
        },
        "NU": {
            "name": "Niue",
            "code": "NU",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Niue</span>"
            }
        },
        "NF": {
            "name": "Norfolk Island",
            "code": "NF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Norfolk Island</span>"
            }
        },
        "MP": {
            "name": "Northern Mariana Islands",
            "code": "MP",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Northern Mariana Islands</span>"
            }
        },
        "NO": {
            "name": "Norway",
            "code": "NO",
            "country1": "Norway",
            "data": [{
                "network": "TeliaSonera Norge",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "TDC",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Telenor Mobile",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT, LTE-M"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Norway</span>"
            }
        },
        "OM": {
            "name": "Oman",
            "code": "OM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Oman</span>"
            }
        },
        "PK": {
            "name": "Pakistan",
            "code": "PK",
            "country1": "Pakistan",
            "data": [{
                "network": "Mobilink",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Telenor",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Warid",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Pakistan</span>"
            }
        },
        "PW": {
            "name": "Palau",
            "code": "PW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Palau</span>"
            }
        },
        "PS": {
            "name": "Palestinian Territory, Occupied",
            "code": "PS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Palestinian Territory, Occupied</span>"
            }
        },
        "PA": {
            "name": "Panama",
            "code": "PA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Panama</span>"
            }
        },
        "PG": {
            "name": "Papua New Guinea",
            "code": "PG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Papua New Guinea</span>"
            }
        },
        "PY": {
            "name": "Paraguay",
            "code": "PY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Paraguay</span>"
            }
        },
        "PE": {
            "name": "Peru",
            "code": "PE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Peru</span>"
            }
        },
        "PH": {
            "name": "Philippines",
            "code": "PH",
            "country1": "Philippines",
            "data": [{
                "network": "Globe Telecom",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "SMART Communications",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Philippines</span>"
            }
        },
        "PN": {
            "name": "Pitcairn",
            "code": "PN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Pitcairn</span>"
            }
        },
        "PL": {
            "name": "Poland",
            "code": "PL",
            "country1": "Poland",
            "data": [{
                "network": "Polska Era",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "PTK Centeral (Orange)",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Polkomtel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "P4 Play",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Poland</span>"
            }
        },
        "PT": {
            "name": "Portugal",
            "code": "PT",
            "country1": "Portugal",
            "data": [{
                "network": "Sonaecom",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Altice",
                "coverage": "4G/LTE, NB-IoT"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Portugal</span>"
            }
        },
        "PR": {
            "name": "Puerto Rico",
            "code": "PR",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Puerto Rico</span>"
            }
        },
        "QA": {
            "name": "Qatar",
            "code": "QA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Qatar</span>"
            }
        },
        "RE": {
            "name": "Reunion",
            "code": "RE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Reunion</span>"
            }
        },
        "RO": {
            "name": "Romania",
            "code": "RO",
            "country1": "Romania",
            "data": [{
                "network": "Telekom (Cosmote)",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Orange",
                "coverage": "GSM/GPRS, 4G/LTE, LTE-M"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Romania</span>"
            }
        },
        "RU": {
            "name": "Russia",
            "code": "RU",
            "data": [{
                "network": "VimpelCom",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "LLC Ekaterinburg",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Russia</span>"
            }
        },
        "RW": {
            "name": "RWANDA",
            "code": "RW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >RWANDA</span>"
            }
        },
        "SH": {
            "name": "Saint Helena",
            "code": "SH",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Saint Helena</span>"
            }
        },
        "KN": {
            "name": "Saint Kitts and Nevis",
            "code": "KN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Saint Kitts and Nevis</span>"
            }
        },
        "LC": {
            "name": "Saint Lucia",
            "code": "LC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Saint Lucia</span>"
            }
        },
        "PM": {
            "name": "Saint Pierre and Miquelon",
            "code": "PM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Saint Pierre and Miquelon</span>"
            }
        },
        "VC": {
            "name": "Saint Vincent and the Grenadines",
            "code": "VC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Saint Vincent and the Grenadines</span>"
            }
        },
        "WS": {
            "name": "Samoa",
            "code": "WS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Samoa</span>"
            }
        },
        "SM": {
            "name": "San Marino",
            "code": "SM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >San Marino</span>"
            }
        },
        "ST": {
            "name": "Sao Tome and Principe",
            "code": "ST",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Sao Tome and Principe</span>"
            }
        },
        "SA": {
            "name": "Saudi Arabia",
            "code": "SA",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Saudi Arabia</span>"
            }
        },
        "SN": {
            "name": "Senegal",
            "code": "SN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Senegal</span>"
            }
        },
        "RS": {
            "name": "Serbia",
            "code": "RS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Serbia</span>"
            }
        },
        "ME": {
            "name": "Montenegro",
            "code": "ME",
            "data": [{
                "network": "Telenor",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Montenegro</span>"
            }
        },
        "SC": {
            "name": "Seychelles",
            "code": "SC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Seychelles</span>"
            }
        },
        "SL": {
            "name": "Sierra Leone",
            "code": "SL",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Sierra Leone</span>"
            }
        },
        "SG": {
            "name": "Singapore",
            "code": "SG",
            "country1": "Singapore",
            "data": [{
                "network": "M1 Limited",
                "coverage": "4G/LTE"
            }, {
                "network": "StarHub",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Singapore</span>"
            }
        },
        "SK": {
            "name": "Slovak Republic",
            "code": "SK",
            "data": [{
                "network": "T-Mobile",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Orange",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Slovak Republic</span>"
            }
        },
        "SI": {
            "name": "Slovenia",
            "code": "SI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Slovenia</span>"
            }
        },
        "SB": {
            "name": "Solomon Islands",
            "code": "SB",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Solomon Islands</span>"
            }
        },
        "SO": {
            "name": "Somalia",
            "code": "SO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Somalia</span>"
            }
        },
        "ZA": {
            "name": "South Africa",
            "code": "ZA",
            "data": [{
                "network": "Telkom SA",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "MTN",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodacom",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >South Africa</span>"
            }
        },
        "GS": {
            "name": "South Georgia and the South Sandwich Islands",
            "code": "GS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >South Georgia and the South Sandwich Islands</span>"
            }
        },
        "ES": {
            "name": "Spain",
            "code": "ES",
            "data": [{
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Telefonica Moviles",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Xfera",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Spain</span>"
            }
        },
        "LK": {
            "name": "Sri Lanka",
            "code": "LK",
            "country1": "Sri Lanka",
            "data": [{
                "network": "Dialog",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT, LTE-M"
            }, {
                "network": "Mobitel",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Hutchison",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Sri Lanka</span>"
            }
        },
        "SD": {
            "name": "Sudan",
            "code": "SD",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Sudan</span>"
            }
        },
        "SR": {
            "name": "Suriname",
            "code": "SR",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Suriname</span>"
            }
        },
        "SJ": {
            "name": "Svalbard and Jan Mayen",
            "code": "SJ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Svalbard and Jan Mayen</span>"
            }
        },
        "SZ": {
            "name": "Swaziland",
            "code": "SZ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Swaziland</span>"
            }
        },
        "SE": {
            "name": "Sweden",
            "code": "SE",
            "country1": "Sweden",
            "data": [{
                "network": "Telenor Sverige AB",
                "coverage": ""
            }, {
                "network": "Telenor Sverige",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "H3G",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Tele2 AB",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Telia Mobile AB",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Sweden</span>"
            }
        },
        "CH": {
            "name": "Switzerland",
            "code": "CH",
            "country1": "Switzerland",
            "data": [{
                "network": "Salt Mobile SA",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Switzerland</span>"
            }
        },
        "SY": {
            "name": "Syrian Arab Republic",
            "code": "SY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Syrian Arab Republic</span>"
            }
        },
        "TW": {
            "name": "Taiwan",
            "code": "TW",
            "data": [{
                "network": "Far EasTone",
                "coverage": "4G/LTE"
            }, {
                "network": "Chunghwa",
                "coverage": "4G/LTE"
            }, {
                "network": "T-Star",
                "coverage": "4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Taiwan</span>"
            }
        },
        "TJ": {
            "name": "Tajikistan",
            "code": "TJ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Tajikistan</span>"
            }
        },
        "TZ": {
            "name": "Tanzania, United Republic of",
            "code": "TZ",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Tanzania, United Republic of</span>"
            }
        },
        "TH": {
            "name": "Thailand",
            "code": "TH",
            "country1": "Thailand",
            "data": [{
                "network": "DTAC",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Thailand</span>"
            }
        },
        "TL": {
            "name": "Timor-Leste",
            "code": "TL",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Timor-Leste</span>"
            }
        },
        "TG": {
            "name": "Togo",
            "code": "TG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Togo</span>"
            }
        },
        "TK": {
            "name": "Tokelau",
            "code": "TK",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Tokelau</span>"
            }
        },
        "TO": {
            "name": "Tonga",
            "code": "TO",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Tonga</span>"
            }
        },
        "TT": {
            "name": "Trinidad and Tobago",
            "code": "TT",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Trinidad and Tobago</span>"
            }
        },
        "TN": {
            "name": "Tunisia",
            "code": "TN",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Tunisia</span>"
            }
        },
        "TR": {
            "name": "Turkey",
            "code": "TR",
            "country1": "Turkey",
            "data": [{
                "network": "Avea",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Turkey</span>"
            }
        },
        "TM": {
            "name": "Turkmenistan",
            "code": "TM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Turkmenistan</span>"
            }
        },
        "TC": {
            "name": "Turks and Caicos Islands",
            "code": "TC",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Turks and Caicos Islands</span>"
            }
        },
        "TV": {
            "name": "Tuvalu",
            "code": "TV",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Tuvalu</span>"
            }
        },
        "UG": {
            "name": "Uganda",
            "code": "UG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Uganda</span>"
            }
        },
        "UA": {
            "name": "Ukraine",
            "code": "UA",
            "country1": "Ukraine",
            "data": [{
                "network": "Kyvistar",
                "coverage": "GSM/GPRS"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Ukraine</span>"
            }
        },
        "AE": {
            "name": "United Arab Emirates",
            "code": "AE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >United Arab Emirates</span>"
            }
        },
        "GB": {
            "name": "United Kingdom",
            "code": "GB",
            "data": [{
                "network": "O2",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }, {
                "network": "Hutchison 3G",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "EE",
                "coverage": "GSM/GPRS, 4G/LTE"
            }, {
                "network": "Vodafone",
                "coverage": "GSM/GPRS, 4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >United Kingdom</span>"
            }
        },
        "US": {
            "name": "United States",
            "code": "US",
            "data": [{
                "network": "AT&T",
                "coverage": "4G/LTE"
            }, {
                "network": "Sprint",
                "coverage": "4G/LTE"
            }, {
                "network": "T-Mobile USA",
                "coverage": "4G/LTE, NB-IoT"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >United States</span>"
            }
        },
        "UM": {
            "name": "United States Minor Outlying Islands",
            "code": "UM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >United States Minor Outlying Islands</span>"
            }
        },
        "UY": {
            "name": "Uruguay",
            "code": "UY",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Uruguay</span>"
            }
        },
        "UZ": {
            "name": "Uzbekistan",
            "code": "UZ",
            "country1": "Uzbekistan",
            "data": [{
                "network": "Unitel (Beeline)",
                "coverage": "GSM/GPRS, 4G/LTE"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Uzbekistan</span>"
            }
        },
        "VU": {
            "name": "Vanuatu",
            "code": "VU",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Vanuatu</span>"
            }
        },
        "VE": {
            "name": "Venezuela",
            "code": "VE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Venezuela</span>"
            }
        },
        "VN": {
            "name": "Vietnam",
            "code": "VN",
            "data": [{
                "network": "Vietamobile",
                "coverage": "GSM/GPRS"
            }],
            "value": 1,
            "href": "#",
            "tooltip": {
                "content": "<span >Vietnam</span>"
            }
        },
        "VG": {
            "name": "Virgin Islands, British",
            "code": "VG",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Virgin Islands, British</span>"
            }
        },
        "VI": {
            "name": "Virgin Islands, U.S.",
            "code": "VI",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Virgin Islands, U.S.</span>"
            }
        },
        "WF": {
            "name": "Wallis and Futuna",
            "code": "WF",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Wallis and Futuna</span>"
            }
        },
        "EH": {
            "name": "Western Sahara",
            "code": "EH",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Western Sahara</span>"
            }
        },
        "YE": {
            "name": "Yemen",
            "code": "YE",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Yemen</span>"
            }
        },
        "ZM": {
            "name": "Zambia",
            "code": "ZM",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Zambia</span>"
            }
        },
        "ZW": {
            "name": "Zimbabwe",
            "code": "ZW",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >Zimbabwe</span>"
            }
        },
        "SS":{
            "name": "South Sudan",
            "code": "SS",
            "data": [],
            "value": 0,
            "tooltip": {
                "content": "<span >South Sudan</span>"
            }
        }
    };
    MAP = $(".mapcontainer").mapael({
        map : {
            name : "world_countries",
            defaultArea: {
                attrs: {
                    "stroke-width":1,
                    stroke: colors.active,
                    fill:colors.active
                },
                attrsHover:{
                    "stroke-width":1,
                    stroke: colors.hover,
                    fill: colors.hover
                },
                eventHandlers: {
                    click: function (e, id, mapElem, textElem) {
                        console.info(id,'id')
                   
                        if (mapElem.originalAttrs.fill == colors.active) {
                            selectedCountries.push(id);
                            coverageData[id].value = 2;
                            coverageData[id].attr ={fill:colors.selected};
                        } else if(mapElem.originalAttrs.fill == colors.selected) {
                            selectedCountries = selectedCountries.filter(x=>x != id);
                            coverageData[id].value = 1;
                            coverageData[id].attr ={fill:colors.active};
                        }
                        $(".mapcontainer").trigger('update',{mapOptions:{areas:coverageData}});
                    }
                }
            }
        },
        legend: {
            area: {
                slices: [
                    {
                        max: 0,
                        attrs: {
                            fill: "#9B9B9B"
                        },
                        attrsHover:{
                            fill:'#20758C',
                        },
                        display:true,
                        label: "No Coverage"
                    },
                    {
                        min:0,
                        max: 1,
                        attrs: {
                            fill: "#084B7E"
                        },
                        label: "Have Coverage"
                    },
                    {
                        min:1,
                        max: 2,
                        attrs: {
                            fill: "#4EBEA4"
                        },
                        label: "selected"
                    },
                    
                ]
            },
          
         },
         areas:coverageData
    });
});
