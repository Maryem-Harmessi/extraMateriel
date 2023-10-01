//your code here 
var ingredient = [
    { ingredient: "Strawberries", price: 1.5 },
    { ingredient: "Banana", price: 0.5 },
    { ingredient: "Mango", price: 2.5 },
    { ingredient: "Blueberries", price: 1.0 },
    { ingredient: "Raspberries", price: 1.0 },
    { ingredient: "Apple", price: 1.75 },
    { ingredient: "Pineapple", price: 3.5 },
  ]
function Smoothie(array){
    return {
       ingredients:array,
       getCost:getCost, 
       getPrice:getPrice,
       getName:getName
    }
}

function getCost(){
    var acc=0
  for(var i=0 ; i<this.ingredients.length; i ++){
    for(var j=0 ; j< ingredient.length; j++){
        if(this.ingredients[i]===ingredient[j].ingredient){
        acc=acc + ingredient[j].price

        }
    }
  }
  return acc
}

function getPrice(){
 return (this.getCost()*2.5).toFixed(2)
}

function getName(){
    this.ingredients.sort()
    this.ingredients= this.ingredients.map(function(element,index){
        if (element.substring(element.length-7,element.length-1 === "berries")){
           element = element.replace("berries","berry")
        return element
       }
       element=element
       return element
    })
   if(this.ingredients.length === 1){
        return this.ingredients[0]+ " smoothie"
   }
   return this.ingredients.join(" ") + " fusion"
}
s1 =  Smoothie(["Banana"])
s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])