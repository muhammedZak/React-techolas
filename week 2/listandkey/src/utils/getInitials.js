// Helper: get initials from full name
export const getInitials = (name) => {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  const first = parts[0].charAt(0).toUpperCase();
  const last = parts[parts.length - 1].charAt(0).toUpperCase();

  return first + last;
};
