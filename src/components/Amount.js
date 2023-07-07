export default function Amount({ bill, averageTip, amount }) {
  return (
    <h2>{`You pay $${amount},00 ($${bill},00 + $${averageTip},00 tip).`}</h2>
  );
}
