import {ShortVideoInfoCoreModel} from "@/core/ShortVideoCore/Model/ShortVideoInfoCoreModel";
import {Application} from "@/lib/Application";
import {ShortVideoInfoInsertCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoInsertCoreMessage";
import {ShortVideoInfoUpdateCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoUpdateCoreMessage";
import {ShortVideoInfoSearchCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoSearchCoreMessage";
import {ShortVideoInfoDeleteCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoDeleteCoreMessage";
import {ShortVideoInfoCountCoreMessage} from "@/core/ShortVideoCore/Message/ShortVideoInfoCountCoreMessage";
export class ShortVideoInfoCoreData {
/**
     * 批量插入
     * @param ShortVideoInfoList Array<ShortVideoInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(ShortVideoInfoList : Array<ShortVideoInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoInfo/InsertBatch.action", {Data:JSON.stringify(ShortVideoInfoList)});
}
/**
     * 插入
     * @param ShortVideoInfo  ShortVideoInfoInsertCoreMessage
     * @constructor
     */
public static Insert(ShortVideoInfo : ShortVideoInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("ShortVideo/ShortVideoInfo/Insert.action", ShortVideoInfo);
}
/**
     * 修改用户
     * @param ShortVideoInfo ShortVideoInfoUpdateCoreMessage
     * @constructor
     */
public static Update(ShortVideoInfo : ShortVideoInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoInfo/Update.action", ShortVideoInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : ShortVideoInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where ShortVideoInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : ShortVideoInfoSearchCoreMessage) : Promise<Array<ShortVideoInfoCoreModel>>{
return Application.Service.GetContent("ShortVideo/ShortVideoInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where ShortVideoInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : ShortVideoInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("ShortVideo/ShortVideoInfo/Delete.action", where);
}
}
