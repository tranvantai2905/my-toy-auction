async function postBid(auctionId, bidAmount) {
    try {
        const response = await fetch('/api/auctions/' + auctionId + '/bids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: bidAmount })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Bid posted successfully:', data);
        } else {
            console.error('Failed to post bid:', response.status);
        }
    } catch (error) {
        console.error('An error occurred while posting bid:', error);
    }
}