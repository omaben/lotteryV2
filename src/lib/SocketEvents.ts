export default class SocketEvents{
     events:any = []
     addEvent(name: string | number, call: any){
        this.events[name] = call
    }
     callEvent(name: string | number, event: any){
        if(!this.events[name]){
            console.log("noregister")
            return
        }
        this.events[name](event)
    }
}