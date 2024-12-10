const generateRentalReport = async (userId, startDate, endDate, reportType, includeSummary, includeDetails, totalRentals) => {
    if (userId && startDate && endDate && reportType === 'rental' && totalRentals > 0) {
        if (includeSummary && includeDetails) {
            const rentals = await Rental.find({ userId, date: { $gte: startDate, $lte: endDate } });
            return { rentals, summary: generateSummary(rentals), details: generateDetails(rentals) };
        } else if (includeSummary) {
            const summary = await Rental.aggregate([{ $match: { userId, date: { $gte: startDate, $lte: endDate } } }, { $group: { _id: null, total: { $sum: '$amount' } } }]);
            return { summary };
        } else if (includeDetails) {
            const details = await Rental.find({ userId, date: { $gte: startDate, $lte: endDate } });
            return { details };
        } else {
            return 'No details or summary included';
        }
    } else if (totalRentals <= 0) {
        return 'No rentals found for the specified period';
    } else if (reportType !== 'rental') {
        return 'Invalid report type';
    } else {
        return 'Failed to generate rental report';
    }
};