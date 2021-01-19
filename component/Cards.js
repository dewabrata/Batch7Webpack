import Component from './component'

class Card extends Component {


    generateUI(){
    this.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${this.properties.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${this.properties.cardTitle}</h5>
      <p class="card-text">${this.properties.cardText}</p>
      <a href="#" class="btn btn-primary" onclick = "">Go Detail</a>
    </div>
  </div>`
    
    
    }
    
    setProperties(gambar,title,text,action){
      this.properties = {img:gambar,cardTitle:title,cardText:text,action:action}
    
    
    }


}

export default Card;