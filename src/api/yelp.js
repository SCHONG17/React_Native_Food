import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer oTU71OWysMIaeO1iljg6hsc4n756gZorAWSnFmVoNcl4m3q1qyCg436Pm8aIuGBwxCA3THDnegMfCgNCiaQT1JgKeuDyvfprN0vd8ILUDOcycD2ZXBE7OQNZdU24XXYx',

    }
})

