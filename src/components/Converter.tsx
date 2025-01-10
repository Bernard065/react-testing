import React from "react";
import { lbsToKilos } from "../lib/helpers";

type ConverterProps = {
  onSubmit: (weight: number) => void;
};

export default function Converter({ onSubmit }: ConverterProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const unit = data.get("unit") as string;
    const weight = parseFloat(data.get("weight") as string);

    if (unit === "kgs") return onSubmit(weight);
    return onSubmit(lbsToKilos(weight));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="weight">Desired Weight</label>
      <input id="weight" type="number" name="weight" />

      <label htmlFor="kgs">Kilograms</label>
      <input id="kgs" type="radio" value="kgs" name="unit" defaultChecked />

      <label htmlFor="lbs">Pounds</label>
      <input id="lbs" type="radio" value="lbs" name="unit" />

      <button>Submit</button>
    </form>
  );
}
