const athens =
{
    "LocalObservationDateTime": "2022-05-24T00:30:00+10:00",
    "EpochTime": 1653316200,
    "WeatherText": "Light rain shower",
    "WeatherIcon": 12,
    "HasPrecipitation": true,
    "PrecipitationType": "Rain",
    "IsDayTime": false,
    "Temperature": {
        "Metric": {
            "Value": 16.4,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 62,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "MobileLink": "http://www.accuweather.com/en/au/newmarket/18536/current-weather/18536?lang=en-us",
    "Link": "http://www.accuweather.com/en/au/newmarket/18536/current-weather/18536?lang=en-us"
}


const athArr = [
    {
        "Version": 1,
        "Key": "182536",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "Athens",
        "Country": {
            "ID": "GR",
            "LocalizedName": "Greece"
        },
        "AdministrativeArea": {
            "ID": "I",
            "LocalizedName": "Attica"
        }
    },
    {
        "Version": 1,
        "Key": "508163",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Ath Thuqbah",
        "Country": {
            "ID": "SA",
            "LocalizedName": "Saudi Arabia"
        },
        "AdministrativeArea": {
            "ID": "04",
            "LocalizedName": "Eastern"
        }
    },
    {
        "Version": 1,
        "Key": "328217",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Athens",
        "Country": {
            "ID": "US",
            "LocalizedName": "United States"
        },
        "AdministrativeArea": {
            "ID": "GA",
            "LocalizedName": "Georgia"
        }
    },
];

const initState = {
    cities: [],
    city: athArr[0],
    current: athens
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'COMPLETE':
            // const arr = payload
            console.log(state.cities);
            return { ...state, cities: [...athArr] }
        case 'SHOW':
            return { ...state, current: { ...athens } }
        case 'CHOOSE':
            console.log(action.payload);
            return { ...state, city: { ...athArr[0] } }
        default:
            return { ...state }
    }
}
