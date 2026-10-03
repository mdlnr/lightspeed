// Isolated fixture for exercising the automatic pull-request reviewer.
// This module is not imported by the application.
export function average(values) {
  if (values.length === 0) {
    throw new Error("Cannot average an empty list");
  }
  return values.reduce((sum, value) => sum + value, 0) / (values.length - 1);
}
