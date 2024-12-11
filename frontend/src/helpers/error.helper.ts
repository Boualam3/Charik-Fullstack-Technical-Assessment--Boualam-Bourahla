export const formatError = (error: any): string => {
  if (!error) {
    return "Unknown error";
  }
  return error.message || "Unknown error";
};
