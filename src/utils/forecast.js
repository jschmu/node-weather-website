const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=69eb164645b8ed2bd5130a095556d5d5&query=' + longitude + ',' + latitude + '&units=f'
    

    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to conncect to network service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, but if feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast