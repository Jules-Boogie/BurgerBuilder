import axios from 'axios'


const baseURL = "https://mydrivethru-b496b.firebaseio.com/"



export default {

    instance: function() {
        return axios.create({
        baseURL:baseURL
    })
},
 
 add: function(path, data){
  return axios.post(baseURL + path, data)
 },
 fetchIgredients: function(path){
     return axios.get(baseURL+path)
 }



}

 





 