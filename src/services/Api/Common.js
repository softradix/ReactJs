import axios from "axios";
import moment from "moment";

// ======= Klaviyo submit  ===================
export const clientSubscriptionCall = (data) => {
  return axios
    .post(
      `https://a.klaviyo.com/client/subscriptions/?company_id=${
        process.env.REACT_APP_KLAVIYO ?? ""
      }`,
      {
        data: {
          type: "subscription",
          attributes: {
            list_id: "UDEFZY",
            email: data.email,
          },
        },
      },

      {
        headers: {
          "Content-Type": "application/json",
          revision: `${moment().format("YYYY-MM-DD")}`,
        },
      }
    )
    .then((response) => {
      return { data: response.data, status: response.status };
    })
    .catch((error) => error.response);
};
