class ZmmController{

    constructor(){
        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn)
        })
    }

    initButtonsEvents(){
        let att = document.getElementById('button8')

        this.addEventListenerAll(button8, 'mouseover mouseup mousedown', e =>{
            button8.style.cursor = 'pointer'
        })
    }
}