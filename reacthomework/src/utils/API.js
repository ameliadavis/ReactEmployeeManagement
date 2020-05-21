import axios from "axios";

export default {
    userCall: function(){
        return axios.get('https://randomuser.me/api/?results=35&nat=US')
    }
}