import {UserClassificationCoreModel} from "@/core/UserCore/Model/UserClassificationCoreModel";
import {UserClassificationCoreData} from "@/core/UserCore/Data/UserClassificationCoreData";
import {UserClassificationInsertCoreMessage} from "@/core/UserCore/Message/UserClassificationInsertCoreMessage";
import {UserClassificationUpdateCoreMessage} from "@/core/UserCore/Message/UserClassificationUpdateCoreMessage";
import {UserClassificationSearchCoreMessage} from "@/core/UserCore/Message/UserClassificationSearchCoreMessage";
import {UserClassificationDeleteCoreMessage} from "@/core/UserCore/Message/UserClassificationDeleteCoreMessage";
import {UserClassificationCountCoreMessage} from "@/core/UserCore/Message/UserClassificationCountCoreMessage";
export class UserClassificationCoreService {
/**
     * 批量插入
     * @constructor
	 * @param UserClassificationList Array<UserClassificationCoreModel>
     */
public static InsertBatch(UserClassificationList : Array<UserClassificationCoreModel>) : Promise<boolean> {
return UserClassificationCoreData.InsertBatch(UserClassificationList)
}
/**
     * 插入
     * @param UserClassification UserClassification : UserClassificationInsertCoreMessage
     * @constructor
     */
public static Insert(UserClassification : UserClassificationInsertCoreMessage) : Promise<boolean> {
return UserClassificationCoreData.Insert(UserClassification)
}
/**
     * 修改用户
     * @param UserClassification UserClassificationUpdateCoreMessage
     * @constructor
     */
public static Update(UserClassification : UserClassificationUpdateCoreMessage) : Promise<number> {
return UserClassificationCoreData.Update(UserClassification);
}
/**
     * count
     * @param where any
     * @constructor
     */
public static Count(where : UserClassificationCountCoreMessage) : Promise<number>{
return UserClassificationCoreData.Count(where);
}
/**
     * 搜索用户
     * @param where UserClassificationSearchCoreMessage
     * @constructor
     */
public static Search(where : UserClassificationSearchCoreMessage) : Promise<Array<UserClassificationCoreModel>>{
return UserClassificationCoreData.Search(where);
}
/**
     * 删除用户
     * @param where any
     * @constructor
     */
public static Delete(where : UserClassificationDeleteCoreMessage) : Promise<number>{
return UserClassificationCoreData.Delete(where);
}
}
