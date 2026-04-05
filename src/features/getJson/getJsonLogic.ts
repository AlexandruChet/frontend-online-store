export const getJsonData = async <T>(): Promise<T | null> => {
  try {
    const response = await fetch("/api");
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("Error receiving:", err);
    return null;
  }
};
