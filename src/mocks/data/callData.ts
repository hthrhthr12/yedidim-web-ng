import { ICallData } from "../../types/callData";

export const CallDataValid: ICallData = {
    problems: ["נתקעתי בלי דלק", "התחפרתי בשטח"],
    address: {
        coordinate : {
            lat: 3,
            lon: 12
        },
        description : "הנרייטה סולד 20 תל אביב, רחוב צר עם הרבה פיצריות"
    },
    appeallerDetails: {
        carType: "טויוטה",
        name: "שמוליק קיפוד",
        phone: "012012012012"
    }
}
