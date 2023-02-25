import { ChangeEvent } from "react";

const currencyOptions = [
  { value: "chf", text: "Frank Szwajcarski" },
  { value: "usd", text: "Dolar Amerykański" },
  { value: "eur", text: "Euro" },
  { value: "gbp", text: "Funt Szterling" },
  { value: "jpy", text: "Jen" },
];

interface CurrencySelectorProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      {currencyOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
