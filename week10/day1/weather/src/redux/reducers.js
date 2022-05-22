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
    {
        "Version": 1,
        "Key": "28185",
        "Type": "City",
        "Rank": 53,
        "LocalizedName": "Ath",
        "Country": {
            "ID": "BE",
            "LocalizedName": "Belgium"
        },
        "AdministrativeArea": {
            "ID": "WHT",
            "LocalizedName": "Hainaut"
        }
    },
    {
        "Version": 1,
        "Key": "133595",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Athis-Mons",
        "Country": {
            "ID": "FR",
            "LocalizedName": "France"
        },
        "AdministrativeArea": {
            "ID": "91",
            "LocalizedName": "Essonne"
        }
    },
    {
        "Version": 1,
        "Key": "193349",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Athni",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "KA",
            "LocalizedName": "Karnataka"
        }
    },
    {
        "Version": 1,
        "Key": "2871558",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Athirampuzha",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "KL",
            "LocalizedName": "Kerala"
        }
    },
    {
        "Version": 1,
        "Key": "2875600",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Atholi",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "KL",
            "LocalizedName": "Kerala"
        }
    },
    {
        "Version": 1,
        "Key": "2916871",
        "Type": "City",
        "Rank": 65,
        "LocalizedName": "Athagad",
        "Country": {
            "ID": "IN",
            "LocalizedName": "India"
        },
        "AdministrativeArea": {
            "ID": "OR",
            "LocalizedName": "Odisha"
        }
    },
    {
        "Version": 1,
        "Key": "222078",
        "Type": "City",
        "Rank": 65,
        "LocalizedName": "Ath Thaniyah",
        "Country": {
            "ID": "JO",
            "LocalizedName": "Jordan"
        },
        "AdministrativeArea": {
            "ID": "KA",
            "LocalizedName": "Karak"
        }
    }
];
const initState = {
    cities: athArr,
    chosen: ''
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'COMPLETE':
            const arr = action.payload
            console.log(state.cities);
            return { ...state, cities: [...arr] }
        case 'SEARCH':
            return { ...state, text: action.payload }
        case 'CHOOSE':
            console.log(action.payload);
            return { ...state, chosen: action.payload }
        default:
            return { ...state }
    }
}
