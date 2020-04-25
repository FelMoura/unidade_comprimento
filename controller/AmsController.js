class AmsController{

    constructor(){
        this.initButtonsEvents()
        
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn)
        })
    }

    initButtonsEvents(){
        let yoc = document.getElementById('button8')
        let me = document.getElementById('button9')

        this.addEventListenerAll(button8,'mouseover mouseup mousedown', e =>{
            button8.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button9,'mouseover mouseup mousedow', e =>{
            button9.style.cursor = 'pointer'
        })
    }


































}