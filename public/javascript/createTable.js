export function createScoreTable(handicapArray) {
    // Create table element
    if (handicapArray.length === 0) {
        return '<p style="margin-left:10px">No golf history available.</p>';
    }
    
    return `
        <table style="width: 95%; display:block; margin: 0 auto; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000000ff; padding: 8px;">Course</th>
                    <th style="border: 1px solid #000000ff; padding: 8px;">Score</th>
                </tr>
            </thead>
            <tbody>
                ${handicapArray.map(number => `
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">"Black Canyon Club"</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${number}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}