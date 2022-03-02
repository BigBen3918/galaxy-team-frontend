/** @format */
import http from "./http-common";
import { NotificationManager } from "react-notifications";

// API Connection
const requestSend = async (data) => {
    try {
        const res = await http.post("api/requestdata", data);

        if (!res.data.status) {
            NotificationManager.error(res.data.msg, "", 3000);
            return;
        }

        NotificationManager.success(res.data.msg, "", 3000);
    } catch (err) {
        console.log(err);
        NotificationManager.error("Operation Failed", "", 3000);
    }
};

const Action = {
    requestSend,
};

export default Action;
