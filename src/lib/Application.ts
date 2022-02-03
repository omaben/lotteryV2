import { HttpLib } from '@/lib/HttpLib'
import Websocket from '@/lib/WebSocket'
import SocketEvents from './SocketEvents'
// @ts-ignore
import json from '../../public/config/config.js'
export class Application {
	public static domain = json.imageDomain;
	public static Service = new HttpLib('', '', json.httpUrl, json.tokenUrl)
	public static Socket: Websocket
	public static SocketEvent: SocketEvents = new SocketEvents()
	public static initSocket(openCall: any) {
		Application.Socket = new Websocket({ Service: json.socketUrl, OnOpen: openCall }, Application.SocketEvent)
	}
}