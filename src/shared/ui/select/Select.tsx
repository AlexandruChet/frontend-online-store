import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectUIProps {
  options: Option[];
  onChange: (value: string) => void;
}

export function SelectUI({ options, onChange }: SelectUIProps) {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onChange(value);
  }

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="" disabled>Choose</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {selected && <p>SELECTED: {selected}</p>}
    </div>
  );
}
