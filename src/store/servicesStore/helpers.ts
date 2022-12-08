export const driveToClientCostPerKM = 0.5

export const calculateDriveToClient = (rate: number, hours: number, oneWayDistance: number) => {
  return rate * hours + oneWayDistance * 2 * driveToClientCostPerKM
}
