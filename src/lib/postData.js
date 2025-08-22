import axios from "axios";

export async function postData(url, data){
    const res = await axios.post(url, data);
    return res.data
}