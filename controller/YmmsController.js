class YmmsController{

    constructor(){
        this.initButtonsEvents()
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn)
        })
    }

    initButtonsEvents(){
        let musicaboa = document.getElementById('button20')
        let musicabo = document.getElementById('button19')
        let musicab = document.getElementById('button18')
        let musica = document.getElementById('button17')
        let music = document.getElementById('button16')
        let eletre = document.getElementById('button15')
        let eletr = document.getElementById('button14')
        let soma =   document.getElementById('button1')
        let subt =  document.getElementById('button2')
        let mult = document.getElementById('button3')
        let div = document.getElementById('button4')
        let  nano = document.getElementById('button5')
        let pic = document.getElementById('button6')
        let fe = document.getElementById('button7')
        let att = document.getElementById('button8')
        let zep = document.getElementById('button9')
        let yoc = document.getElementById('tutton10')
        let me = document.getElementById('button11')
        let ele = document.getElementById('button12')
        let elet = document.getElementById('button13')
        
     


        this.addEventListenerAll(button20,'mouseover mouseup mousedown', e =>{
            button20.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button19,'mouseover mouseup mousedown', e=>{
            button19.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button18,'mouseover mouseup mousedown', e=>{
            button18.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button17,'mouseover mouseup mousedown', e=>{
            button17.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button16,'mouseover mouseup mousedown', e =>{
            button16.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button15,'mouseover mouseup mousedown', e =>{
            button15.style.cursor = 'pointer'
        })
 
        this.addEventListenerAll(button14, 'mouseover mouseup mousedown', e =>{
            button14.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button1,'mouseover mouseup mousedown', e => {
            button1.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button2,'mouseover mouseup mousedown', e => {
            button2.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button3,'mouseover mouseup mousedown', e => {
            button3.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button4,'mouseover mouseup mousedonw', e=> {
            button4.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button5,'mouseover mouseup mousedown', e=>{
            button5.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button6,'mouseover mouseup mousedown', e =>{
            button6.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button7,'mouseover mouseup mousedown', e =>{
            button7.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button8,'mouseover mouseup mousedown', e=>{
            button8.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button9,'mouseover mouseup mousedown', e =>{
            button9.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button10,'mouseover mouseup mousedown', e =>{
            button10.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button11,'mouseover mouseup mousedown', e =>{
            button11.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button12,'mouseover mouseup mousedown', e =>{
            button12.style.cursor = 'pointer'
        })
        this.addEventListenerAll(button13,'mouseover mouseup mousedown', e =>{
            button13.style.cursor = 'pointer'
        })
        
        
     
     }
}