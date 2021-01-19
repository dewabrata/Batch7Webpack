

class Container {

   constructor(parent){
   this.parent = parent;
   this.innerHtml = "";
   }


   addComponent(...components){
   
     components.forEach((component) => {
     
     this.innerHtml += component.render();
     
     
     });
     
     this.parent.innerHTML=this.innerHtml;
      
   
   
   }


}

export default Container;


