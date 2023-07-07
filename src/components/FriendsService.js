import Service from "./Service";

export default function FriendsService({ friendServ, onFriendServ }) {
  return (
    <>
      <Service serviceValue={friendServ} setServiceValue={onFriendServ}>
        How did your friend like the service?
      </Service>
    </>
  );
}
