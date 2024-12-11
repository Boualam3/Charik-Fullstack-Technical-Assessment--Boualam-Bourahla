
export const isObjectNotEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length > 0;
};

export function stringAvatar(name: string) {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0]?.[0]?.toLocaleUpperCase() || "";
  const lastNameInitial = nameParts[1]?.[0]?.toLocaleUpperCase() || "";

  return {
    children: `${firstNameInitial}${lastNameInitial}`,
  };
}