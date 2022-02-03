import {WithdrawDetailCoreModel} from "@/core/WithdrawCore/Model/WithdrawDetailCoreModel";
import {WithdrawDetailCoreData} from "@/core/WithdrawCore/Data/WithdrawDetailCoreData";
import {WithdrawDetailInsertCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailInsertCoreMessage";
import {WithdrawDetailUpdateCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailUpdateCoreMessage";
import {WithdrawDetailSearchCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailSearchCoreMessage";
import {WithdrawDetailDeleteCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailDeleteCoreMessage";
import {WithdrawDetailCountCoreMessage} from "@/core/WithdrawCore/Message/WithdrawDetailCountCoreMessage";
export class WithdrawDetailCoreService {
/**
     * 批量插入
     * @constructor
	 * @param WithdrawDetailList Array<WithdrawDetailCoreModel>
     */
public static InsertBatch(WithdrawDetailList : Array<WithdrawDetailCoreModel>) : Promise<boolean> {
return WithdrawDetailCoreData.InsertBatch(WithdrawDetailList)
}
/**
     * 插入
     * @param WithdrawDetail WithdrawDetail : WithdrawDetailInsertCoreMessage
     * @constructor
     */
public static Insert(WithdrawDetail : WithdrawDetailInsertCoreMessage) : Promise<boolean> {
return WithdrawDetailCoreData.Insert(WithdrawDetail)
}
/**
     * 修改用户
     * @param WithdrawDetail WithdrawDetailUpdateCoreMessage
     * @constructor
     */
public static Update(WithdrawDetail : WithdrawDetailUpdateCoreMessage) : Promise<number> {
return WithdrawDetailCoreData.Update(WithdrawDetail);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : WithdrawDetailCountCoreMessage) : Promise<number>{
return WithdrawDetailCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where WithdrawDetailSearchCoreMessage
     * @constructor
     */
public static Search(where : WithdrawDetailSearchCoreMessage) : Promise<Array<WithdrawDetailCoreModel>>{
return WithdrawDetailCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : WithdrawDetailDeleteCoreMessage) : Promise<number>{
return WithdrawDetailCoreData.Delete(where);
}
}
