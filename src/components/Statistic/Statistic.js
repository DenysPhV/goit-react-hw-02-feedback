export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <div>
      <ul>
        <li>
          <span>Good:</span>
          {good}
        </li>
        <li>
          <span>Neutral:</span>
          {neutral}
        </li>
        <li>
          <span>Bad:</span>
          {bad}
        </li>
        <li>
          <span>Total:</span>
          {total}
        </li>
        <li>
          <span>Positive:</span>
          {positiveFeedback}%
        </li>
      </ul>
    </div>
  );
}
