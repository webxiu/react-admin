
import Jsonp from "jsonp";
export default class Axios{
    static jsonp(option){
         return new Promise((resolve,reject)=>{
             Jsonp(option.url,{
                 param:'callback'
             }, function(err,response){
                 if (response) {
                     resolve(response)
                 }else{
                     reject(response)
                 }
             })
         })
    }
}