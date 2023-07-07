export default function Bill({ bill, onBill }) {
  return (
    <h3>
      <span>How much was the bill?</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
      />
    </h3>
  );
}
