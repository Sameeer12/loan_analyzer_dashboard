const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchPincodes = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/pincodes`);
        if (!response.ok) {
            console.error()
            // throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching pincodes:', error);
        throw error;
    }
};

export const fetchAnalysis = async (pincode) => {
    try {
        const response = await fetch(`${API_BASE_URL}/analyze/pincode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pincode,
                include_historical: true
            })
        })
        if (!response.ok) throw new Error('Failed to fetch analysis')
        return await response.json()
    } catch (error) {
        console.error('Error fetching analysis:', error)
        throw error
    }
}
