class Component{

    constructor(){
    
    this.innerHTML = "";
    this.properties = "";
    
    }

    generateUI(){
    this.innerHTML ="<div> </div>";
    
    }
    render(){
    
    this.generateUI();
    return this.innerHTML;
    }
    
    setProperties(properties){
      
      this.properties = properties;
       
    }



}

export default Component;