export default function Bill({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
      />
    </div>
  );
}
