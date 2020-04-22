var selectedCountries=[];
var coverageData={};
var colors = {active:"#084B7E",inactive:"#9B9B9B",selected:"#4EBEA4",hover:"#20758C"}

$(function () {
    coverageData ={
        "IN": {
            "value":1,
            "href": "#",
            "tooltip": {
                "content": "<span >India<\/span>"
            },
        },
        "AU": {
            "value":0,
            
            "tooltip": {
                "content": "<span >Australia<\/span>"
            },
        },
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
                        var newData = {
                            'areas': {}
                        };
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
