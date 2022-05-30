# IP to location

Try it with free on RapidAPI: [ip to location](https://rapidapi.com/sk-global-sk-global-default/api/ip-to-location1)

## Sample

```bash
curl 'https://geo-ip-api.vercel.app/api/myip'
```

Response sample
```json
{
   range: [ <low bound of IP block>, <high bound of IP block> ],
   country: 'XX',                 // 2 letter ISO-3166-1 country code
   region: 'RR',                  // Up to 3 alphanumeric variable length characters as ISO 3166-2 code
                                  // For US states this is the 2 letter state
                                  // For the United Kingdom this could be ENG as a country like “England
                                  // FIPS 10-4 subcountry code
   eu: '0',                       // 1 if the country is a member state of the European Union, 0 otherwise.
   timezone: 'Country/Zone',      // Timezone from IANA Time Zone Database
   city: "City Name",             // This is the full city name
   ll: [<latitude>, <longitude>], // The latitude and longitude of the city
   metro: <metro code>,           // Metro code
   area: <accuracy_radius>        // The approximate accuracy radius (km), around the latitude and longitude
}
```
