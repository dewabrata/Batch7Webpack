import Card from '../component/Cards'
import Container from '../controller/Container'


let card = new Card();
card.setProperties("https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435911-chelsea-islan.jpg","Chelsea", " Foto bareng",()=>alert("test"))

let card2 = new Card();
card2.setProperties("https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435911-chelsea-islan.jpg","Chelsea", " Foto bareng",()=>alert("test"));


let container = new Container(document.getElementById("root"));

container.addComponent(card,card2);

let container2 = new Container(document.getElementById("container"));


