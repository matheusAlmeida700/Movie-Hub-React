export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};

export const formatCurrency = (number) =>
  number.toLocaleString("en-US", { style: "currency", currency: "USD" });
