let userProfile = {
    username: "Mister Onegolf",
    email: "useruser@hotmail.com",
    profilePic: "/public/images/close-up-golf-player.jpg",
    role: "Golfer",
    roundsPlayed: 0,
    handicapArray: [],
    averageHandicap: 0
};

const profileHTML = `
            <div class="profileDynamicDiv">
                <div class=profileImage>
                    <img src=${userProfile.profilePic} alt="Profile Picture">
                </div>
                <div class=profileText>
                    <span>${userProfile.username}</span>
                    <span>${userProfile.email}</span>
                    <span>${userProfile.role}</span>
                </div>
                <div class=profileGolf>
                    <span> Rounds Played: ${userProfile.roundsPlayed}</span>
                    <span> Average Handicap: ${userProfile.averageHandicap}</span>
                </div>
                <div class=profileTrophy></div>
            </div>
        `;

document.addEventListener('DOMContentLoaded', function () {
    const dynamicContent = document.getElementById('dynamic-content');

    dynamicContent.innerHTML = profileHTML;

    document.getElementById('profile').addEventListener('click', function () {
        dynamicContent.innerHTML = profileHTML;
    });

    document.getElementById('roundEntry').addEventListener('click', function () {
        dynamicContent.innerHTML = `
        <div class="scorecard-container">
                <h2>Black Canyon Country Club - Scorecard</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Hole</th>
                            <th>Par</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Front Nine -->
                        <tr><td>1</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>2</td><td class="par">5</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>3</td><td class="par">3</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>4</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>5</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>6</td><td class="par">3</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>7</td><td class="par">5</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>8</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>9</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <!-- Back Nine -->
                        <tr><td>10</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>11</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>12</td><td class="par">3</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>13</td><td class="par">5</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>14</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>15</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>16</td><td class="par">3</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>17</td><td class="par">5</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr><td>18</td><td class="par">4</td><td><input type="number" class="score-input" min="1"></td></tr>
                        <tr class="total-row">
                            <th>Total</th>
                            <td id="totalPar">72</td>
                            <td id="totalScore">0</td>
                        </tr>
                    </tbody>
                </table>
                <div class="button-container">
                    <button id="calculateTotalScore">Calculate Score</button>
                </div>
            </div>
            `;

        document.getElementById('calculateTotalScore').addEventListener('click', function () {
            const scoreInputs = document.querySelectorAll('.score-input');
            let totalScore = 0;
            scoreInputs.forEach(input => {
                if (input.value) {
                    totalScore += parseInt(input.value, 10);
                }
            });
            userProfile.roundsPlayed++;
            userProfile.handicapArray.push(totalScore);
            document.getElementById('totalScore').textContent = totalScore;
        });
    });

    document.getElementById('calculateHandicap').addEventListener('click', function () {
        dynamicContent.innerHTML = `
            <img src="public/images/hi_card.png" class="handicapImage">
        `;

        if (userProfile.handicapArray.length === 0) {
            userProfile.averageHandicap = 0; 
        } else {
            const sum = userProfile.handicapArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            userProfile.averageHandicap = sum / userProfile.handicapArray.length;
        }
    });

    document.getElementById('logout').addEventListener('click', function () {
        window.location.href = "/";
    });

    document.getElementById('setting').addEventListener('click', function () {
        dynamicContent.innerHTML = `
            <h2>Settings</h2>
            <p>Manage your account settings here.</p>
        `;
    });


});