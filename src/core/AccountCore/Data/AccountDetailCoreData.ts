import {AccountDetailCoreModel} from "@/core/AccountCore/Model/AccountDetailCoreModel";
import {Application} from "@/lib/Application";
import {AccountDetailInsertCoreMessage} from "@/core/AccountCore/Message/AccountDetailInsertCoreMessage";
import {AccountDetailUpdateCoreMessage} from "@/core/AccountCore/Message/AccountDetailUpdateCoreMessage";
import {AccountDetailSearchCoreMessage} from "@/core/AccountCore/Message/AccountDetailSearchCoreMessage";
import {AccountDetailDeleteCoreMessage} from "@/core/AccountCore/Message/AccountDetailDeleteCoreMessage";
import {AccountDetailCountCoreMessage} from "@/core/AccountCore/Message/AccountDetailCountCoreMessage";
export class AccountDetailCoreData {
/**
     * 批量插入
     * @param AccountDetailList Array<AccountDetailInsertCoreMessage>
     * @constructor
     */
public static InsertBatch(AccountDetailList : Array<AccountDetailInsertCoreMessage>) : Promise<boolean> {
return Application.Service.GetContent("Account/AccountDetail/InsertBatch.action", {Data:JSON.stringify(AccountDetailList)});
}
/**
     * 插入
     * @param AccountDetail  AccountDetailInsertCoreMessage
     * @constructor
     */
public static Insert(AccountDetail : AccountDetailInsertCoreMessage) : Promise<boolean> {
return Application.Service.GetContent("Account/AccountDetail/Insert.action", AccountDetail);
}
/**
     * 修改用户
     * @param AccountDetail AccountDetailUpdateCoreMessage
     * @constructor
     */
public static Update(AccountDetail : AccountDetailUpdateCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountDetail/Update.action", AccountDetail);
}
/**
     * 用户数量
     * @param where any
     * @constructor
     */
public static Count(where : AccountDetailCountCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountDetail/Count.action", where);
}
/**
     * 搜索用户
     * @param where AccountDetailSearchCoreMessage
     * @constructor
     */
public static Search(where : AccountDetailSearchCoreMessage) : Promise<Array<AccountDetailCoreModel>>{
return Application.Service.GetContent("Account/AccountDetail/Search.action", where);
}
/**
     * 删除用户
     * @param where AccountDetailDeleteCoreMessage
     * @constructor
     */
public static Delete(where : AccountDetailDeleteCoreMessage) : Promise<number> {
return Application.Service.GetContent("Account/AccountDetail/Delete.action", where);
}
}
