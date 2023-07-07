import Service from "./Service";

export default function YourService({ yourServ, onYourServ }) {
  return (
    <>
      <Service serviceValue={yourServ} setServiceValue={onYourServ}>
        How did you like the service?
      </Service>
    </>
  );
}
