export const validators = {
  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: value: any
    * @Return: boolean
    * @Date: 2021-04-17 10:08:12
    * @Description: check mobile number
  */
  checkMobile(value: any) {
    if (!value) return true
    const reg = /^\+(?:[0-9] ?){6,14}[0-9]$/
    return reg.test(value)
  },
  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: value: any
    * @Return: boolean
    * @Date: 2021-04-17 10:15:31
    * @Description: check password
  */
  checkPassword(value: any){
    if (!value) return true
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/
    return reg.test(value)
  },
  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param: value: any
    * @Return: boolean
    * @Date: 2021-04-17 10:16:36
    * @Description: check username
  */
  checkUserName(value: any) {
    if (!value) return true
    const reg = /^[a-zA-Z]\w{5,14}$/
    return reg.test(value)
  },
  /*
    * @Author: null 
    * @LastAuthor: keanu
    * @Param: value: any
    * @Return: boolean
    * @Date: 2021-04-17 11:48:11
    * @Description: check email
  */
  checkEmail(value:any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }
};