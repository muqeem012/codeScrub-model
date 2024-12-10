const updateCarAvailability = async (carId, isAvailable, currentBookingStatus, currentDate, bookedUntilDate) => {
    if (carId && isAvailable !== undefined) {
        const car = await Car.findById(carId);
        if (!car) return 'Car not found';

        if (currentBookingStatus === 'Booked' && !isAvailable) {
            if (currentDate > bookedUntilDate) {
                await Car.updateOne({ _id: carId }, { $set: { isAvailable: true } });
                return 'Car availability updated';
            } else {
                return 'Cannot update availability while still booked';
            }
        } else if (currentBookingStatus === 'Available' && isAvailable) {
            return 'Car is already available';
        } else {
            await Car.updateOne({ _id: carId }, { $set: { isAvailable } });
            return 'Car availability updated';
        }
    } else {
        return 'Invalid car ID or availability status';
    }
};