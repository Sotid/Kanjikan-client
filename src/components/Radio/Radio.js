import React from "react";
import axios from "axios"

var options = {
  method: 'GET',
    url: "",
  headers: {
    'x-rapidapi-key': 'cfe439469fmshf076ebf8f67a523p1758c4jsn7a8b4e6c67b3',
    'x-rapidapi-host': 'radio-world-50-000-radios-stations.p.rapidapi.com'
  }
};

class Radio extends React.Component {
    state = {
        radios: [],
        isReady: false
      };
    
     
      
      loadRadios = async () => {
        try{
            let res= await axios.
            request(options)
            if(res){
        const { data } = res;
         this.setState({ radios: data, isReady:true});
         console.log(data)
            }
          }
        
          catch(err){
            console.log(err)
          }
        }    
    
           componentDidMount() {
            this.loadRadios();
               
          }  
    render() {
      const { news, isReady } = this.state;

      console.log(news)
      return (
        <div>
  
         
            <div>
           
    
          {/* <Link> {oneArticle.title} 
          
  </Link>   */}
            </div>
          ))} 
        </div>
      );
    }
  }
  
  

export default Radio


