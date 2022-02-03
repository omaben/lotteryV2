import SocketEvents from './SocketEvents'
export default class Websocket {
    public Conn: WebSocket
    public Lock: boolean = false
    public Message: Array<string> = new Array()
    private events:SocketEvents
    constructor(Data: any,events:SocketEvents) {
        this.events = events
        this.Conn = new WebSocket(Data.Service);
        this.connect(Data)
    }
    public connect(Data:any){

        this.Conn.onopen = () => {
            Data.OnOpen()
            this.OnOpen()
        }
        this.Conn.onmessage = (e) => {
            this.OnMessage(e)
        }
        this.Conn.onclose = (e)=>{
            console.log(e)
            console.log(e.code)
            if(e.code == 1006){
                console.log('超时断开')
                this.connect(Data)
            }
        }
        this.Conn.onerror = (e:any)=>{
            console.log(e)
            
        }
    }
    public Listen() {
        let Item:any
     while (this.Message.length){
        Item = this.Message.shift()
      
        Item = JSON.parse(Item)
        console.log(Item)
        this.events.callEvent(Item.ename,Item.data)
     }


        setTimeout(() => {
            this.Listen()
        }, 10)
    }
    public OnOpen() {
        console.log("服务器已连接")
       
        this.Listen()
    }

    public OnMessage(evt: MessageEvent) {
       
        this.Message.push(evt.data)
    }

    public Send(data: any) {
        this.Conn.send(JSON.stringify(data))
    }
    public Close() {
        this.Conn.close()
    }
}