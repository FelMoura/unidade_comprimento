class MµmsController{

    constructor(){
        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(events, fn)

        })
    }

    initButtonsEvents(){
    
        let pic = document.getElementById('button4')
        let fe = document.getElementById('button5')
        let att = document.getElementById('button6')
        let zep = document.getElementById('button7')
        let yoc = document.getElementById('tutton8')
        let me = document.getElementById('button9')
     
 
        

  
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
