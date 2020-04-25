class ZmmsController{

    constructor(){
        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn)
        })
    }

    initButtonsEvents(){
        let me = document.getElementById('button9')

        this.addEventListenerAll(button9,'mouseover mouseup mousedown', e =>{
            button9.style.cursor = 'pointer'
        })
    }
}