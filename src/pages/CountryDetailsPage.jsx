import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const CountryDetailsPage = () => {
    const [countries, setCountries] = useState(null)
    const params = useParams()

    async function fetchOneCountry () {
        try {
            const rawResponse = await fetch (
                `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
            )
            const data = await rawResponse.json()
            console.log(data);
            setCountries(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        fetchOneCountry()
    }, [params.countryId])

    if (!country) {
        return <div className='loading'>Loading...</div>
    }
  return (
    <div>
        <h1>COUNTRIES!!!!!!</h1>
        <p>{countries.name.common}</p>
    </div>
  )
}

export default CountryDetailsPage