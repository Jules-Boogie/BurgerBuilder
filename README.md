## Online Drive Through


## Very simple application for a user to make a meal and order. 


## Javascript 

### Method 

#### Reduce()
Array function that takes in a function as input, recieves two arguments. The total value and the current value. You can also add an initial value eg: an empty array
```
reduce((total, current) =>{
        return total.concat(current)
    },[]);
    
```
### tofixed()
 Convert a number to decimal by passing the decimal places as argument

 ```
 num = 4
 num = num.tofixed(2)
 console.log(num) == 4.00
```

### slice()
takes in an argument that specifies where an array should be sliced and returns a new array with the sliced elements 
```
var sampleArr = [1,2,3,4,5,6,7,8,9]
var newArr = sampleArr.slice(0,5)
returns [1,2,3,4,5,6]

```
### encodeURIComponent()

### Array.join(separator)
join elements in an array with a separator. This method was used to join the data I was passing into the url



### this.props.history.push({
    pathname: where we want to send data to
    search: the data we want to pass..encoded using encodeURIComponent() eg search:'?query=abc'
})

```
const data = []

        for (var item in this.state.ingredient){
            data.push(encodeURIComponent(item) + "=" + encodeURIComponent(this.state.ingredient[item]))
        }
        console.log(data)
            const queryParams = data.join('&')
        console.log(queryParams)
            this.props.history.push(
                {
                    pathname:"/checkout",
                    search:'?' + queryParams
                }
            )

    }
```


### URLSearchParams()

A constructor that creates an object with the query string


### entries()

returns an array of key value pairs for every entry in the search params
so if the search param was 'query = abc'
then entries will convert it to ['query', 'abc']

### Use withRouter from react-router-dom to access props in a function component. 

### windows.location.search gives you access to query params or 

### props.location after inporting withRouter from reactrouterDom and wrapping the export default term with withRouter()



object.keys()
concat()



Database / API (Firebase and Axios)
axios : https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index



## Difficulties in the Project

### URLSearchParams

This was not working for my for me. The code below kept returning NaN

```
// const search = (props.location.search)
 // const data = new URLSearchParams(search)

        // const ingredients = {}
        // for ( let queryparams in search.entries()){
        //     ingredients[queryparams[0]] = +queryparams[1]
        // }
        // console.log(ingredients)

```
so I decided to use the slice() and split() methods to produce the expected outcome

```
useEffect(() => {

        // my url = http://localhost:3000/checkout?Avocado=1&Bacon=0&Egg=0
        // props.location.search = ?Avocado=1&Bacon=0&Egg=0
        const search = (props.location.search).slice(1)
        console.log(search)
        const searchs = search.split("&")
        const object = {}
        for (var i in searchs){
        const test = searchs[i].split("=")
        object[test[0]] = test[1]
        console.log(test)
        }
        console.log(object)
        
      setIngredients(object)
       
     

    },[])

``

Object.entries()

```
const numbers = {
  one: 1,
  two: 2,
};

Object.entries(numbers);
// [ ['one', 1], ['two', 2] ]

```