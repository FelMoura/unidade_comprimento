class DmsController {

    constructor(){
        this.initButtonsEvents()
        

      
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, );
        })

    
    }
    initButtonsEvents(){
       let mult = document.getElementById('button1')
       let div = document.getElementById('button2')
       let  nano = document.getElementById('button3')
       let pic = document.getElementById('button4')
       let fe = document.getElementById('button5')
       let att = document.getElementById('button6')
       let zep = document.getElementById('button7')
       let yoc = document.getElementById('tutton8')
       let me = document.getElementById('button9')
    

       
       this.addEventListenerAll(button1,'mouseover mouseup mousedown', e => {
           button1.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button2,'mouseover mouseup mousedonw', e=> {
           button2.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button3,'mouseover mouseup mousedown', e=>{
           button3.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button4,'mouseover mouseup mousedown', e =>{
           button4.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button5,'mouseover mouseup mousedown', e =>{
           button5.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button6,'mouseover mouseup mousedown', e=>{
           button6.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button7,'mouseover mouseup mousedown', e =>{
           button7.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button8,'mouseover mouseup mousedown', e =>{
           button8.style.cursor = 'pointer'
       })
       this.addEventListenerAll(button9,'mouseover mouseup mousedown', e =>{
           button9.style.cursor = 'pointer'
       })
       
    
    }

}