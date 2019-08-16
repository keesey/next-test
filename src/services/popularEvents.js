import axios from "axios";
const URL = "https://r-preprod.t-x.io/recommend?backfill=false&callerId=lncom&dedupe=false&explain=false&filter=lncom&max=60&marketId=27&type=topselling";
const popularEvents = async () => {
    const result = await axios.get(URL);
    return result.data;
    /* :TODO: return a list of event objects. */
}
export default popularEvents;
