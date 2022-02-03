import {AccountInfoCoreModel} from "@/core/AccountCore/Model/AccountInfoCoreModel";
import {Application} from "@/lib/Application";
import {AccountInfoInsertCoreMessage} from "@/core/AccountCore/Message/AccountInfoInsertCoreMessage";
import {AccountInfoUpdateCoreMessage} from "@/core/AccountCore/Message/AccountInfoUpdateCoreMessage";
import {AccountInfoSearchCoreMessage} from "@/core/AccountCore/Message/AccountInfoSearchCoreMessage";
import {AccountInfoDeleteCoreMessage} from "@/core/AccountCore/Message/AccountInfoDeleteCoreMessage";
import {AccountInfoCountCoreMessage} from "@/core/AccountCore/Message/AccountInfoCountCoreMessage";
export class AccountInfoCoreData {
/**
     * 批量插入
     * @param AccountInfoList Array<AccountInfoInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AccountInfoList : Array<AccountInfoInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Account/AccountInfo/InsertBatch.action", {Data:JSON.stringify(AccountInfoList)});
}
/**
     * 插入
     * @param AccountInfo  AccountInfoInsertCoreMessage
     * @constructor
     */
public static Insert(AccountInfo : AccountInfoInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Account/AccountInfo/Insert.action", AccountInfo);
}
/**
     * 修改用户
     * @param AccountInfo AccountInfoUpdateCoreMessage
     * @constructor
     */
public static Update(AccountInfo : AccountInfoUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountInfo/Update.action", AccountInfo);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AccountInfoCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountInfo/Count.action", where);
}
/**
     * 搜索用户
     * @param where AccountInfoSearchCoreMessage
     * @constructor
     */
public static Search(where : AccountInfoSearchCoreMessage) : Promise<Array<AccountInfoCoreModel>>{
return Application.Service.GetContent("Account/AccountInfo/Search.action", where);
}
/**
     * 删除用户
     * @param where AccountInfoDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AccountInfoDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountInfo/Delete.action", where);
}
}
