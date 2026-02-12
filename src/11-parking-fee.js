/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  if (hours <= 0) {
    return -1;
  }
  if (
    vehicleType !== 'car' &&
    vehicleType !== 'motorcycle' &&
    vehicleType !== 'bus'
  ) {
    return -1;
  }
  let parking_fee = 0;
  // Math.ceil(hours)
  const rounded_hours = Math.ceil(hours);

  let first_hour_rate = 0;
  let additional_rate = 0;
  let daily_maximum = 0;
  let total_fee = 0;

  if (vehicleType === 'car') {
    first_hour_rate = 5;
    additional_rate = 3;
    daily_maximum = 30;
  } else if (vehicleType === 'motorcycle') {
    first_hour_rate = 3;
    additional_rate = 2;
    daily_maximum = 18;
  } else {
    first_hour_rate = 10;
    additional_rate = 7;
    daily_maximum = 60;
  }

  if (rounded_hours === 1) {
    total_fee = first_hour_rate;
  } else {
    total_fee = first_hour_rate + (rounded_hours - 1) * additional_rate;
  }
  total_fee = Math.min(total_fee, daily_maximum);
  return total_fee;
}
