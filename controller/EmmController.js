class EmmController{

    constructor(){
        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn)
        })
    }

    initButtonsEvents(){
        let fe = document.getElementById('button7')
        let att = document.getElementById('button8')


        this.addEventListenerAll(button7,'mouseover mouseup mousedown', e =>{
            button7.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button8,'mouseover mouseup mousedown', e =>{
            button8.style.cursor = 'pointer'
        })
    }








}