export const useHandleNewRecord = (quantity, date, description, category) => {
  const record = {
    id: Date.now(),
    value: Number(quantity.value),
    date: date.value,
    description: description.value,
    category: category.value,
  };
  return record;
};
