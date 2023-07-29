import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlineIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);

  let data;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        query: "users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        icon: (
          <MonetizationOnOutlineIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128 ,0,128,0.2)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">=", lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, "users"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">=", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setAmount(lastMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) /
          prevMonthData.docs.length) *
          100
      );
    };
    fetchData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
