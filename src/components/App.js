import Amount from "./Amount";
import Bill from "./Bill";
import FriendsService from "./FriendsService";
import YourService from "./YourService";
import Reset from "./Reset";
import "../index.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [yourServ, setYourServ] = useState(0);
  const [friendServ, setFriendServ] = useState(0);

  const averageTip = (bill * (yourServ + friendServ)) / 100;
  const amount = bill + averageTip;

  function reset() {
    setBill(0);
    setYourServ(0);
    setFriendServ(0);
  }

  return (
    <div className="container">
      <div>
        <Bill bill={bill} onBill={setBill} />
        <YourService yourServ={yourServ} onYourServ={setYourServ} />
        <FriendsService friendServ={friendServ} onFriendServ={setFriendServ} />
      </div>
      <div>
        {amount ? (
          <Amount bill={bill} averageTip={averageTip} amount={amount} />
        ) : (
          ""
        )}
      </div>
      <div>{amount ? <Reset onReset={reset} /> : ""}</div>
    </div>
  );
}

export default App;
