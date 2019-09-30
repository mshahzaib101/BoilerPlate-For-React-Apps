
export default class users {

    // static properties to be used in reducer for switch cases
    static logged_in_user = "NewUser";
    static changing_fb_btn_view = "changing";
    static updateduserlist = "Updating user chat list";


    static logged_in_user_meh(value){
        return { 
            type: this.logged_in_user,
            payload: value
        }
    }
    static changing_fb_btn(value){
        return { 
            type: this.changing_fb_btn_view,
            payload: value
        }
    }
    static updateduserChatlist (value){
        return { 
            type: this.updateduserlist,
            payload: value
        }
    }
   
}