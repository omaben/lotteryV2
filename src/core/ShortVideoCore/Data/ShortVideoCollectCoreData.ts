import {ShortVideoCollectCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoCollectCoreModel";
import {Application} from "@/lib/Application";
import {ShortVideoCollectInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectInsertCoreMessage";
import {ShortVideoCollectUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectUpdateCoreMessage";
import {ShortVideoCollectSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectSearchCoreMessage";
import {ShortVideoCollectDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectDeleteCoreMessage";
import {ShortVideoCollectCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoCollectCountCoreMessage";
export class ShortVideoCollectCoreData {
/**
     * 批量插入
     * @param ShortVideoCollectList Array<ShortVideoCollectInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(ShortVideoCollectList : Array<ShortVideoCollectInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoCollect/InsertBatch.action", {Data:JSON.stringify(ShortVideoCollectList)});
}
/**
     * 插入
     * @param ShortVideoCollect  ShortVideoCollectInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoCollect : ShortVideoCollectInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoCollect/Insert.action", ShortVideoCollect);
}
/**
     * 修改用户
     * @param ShortVideoCollect ShortVideoCollectUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoCollect : ShortVideoCollectUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoCollect/Update.action", ShortVideoCollect);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoCollectCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoCollect/Count.action", where);
}
/**
     * 搜索用户
     * @param where ShortVideoCollectSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoCollectSearchCoreMessage) : Promise<Array<ShortVideoCollectCoreModel>>{
return Application.Service.GetContent("ShortVideo/ShortVideoCollect/Search.action", where);
}
/**
     * 删除用户
     * @param where ShortVideoCollectDeleteCoreMessage
     * @constructor
     */
public static Delete(where : ShortVideoCollectDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoCollect/Delete.action", where);
}
}
