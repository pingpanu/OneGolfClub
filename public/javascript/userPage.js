import { createScoreTable } from './createTable.js';

let userProfile = {
    username: "Mister Onegolf",
    email: "useruser@hotmail.com",
    profilePic: "/public/images/close-up-golf-player.jpg",
    role: "golfer",
    roundsPlayed: 0,
    handicapArray: [],
    averageHandicap: 0
};

const profileHTML = () => `
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
                <div class=profileTrophy>
                    <span>Golf History</span>
                    ${createScoreTable(userProfile.handicapArray)}
                </div>
            </div>
        `;

document.addEventListener('DOMContentLoaded', function () {
    const dynamicContent = document.getElementById('dynamic-content');

    dynamicContent.innerHTML = profileHTML();

    document.getElementById('profile').addEventListener('click', function () {
        dynamicContent.innerHTML = profileHTML();
    });

    document.getElementById('roundEntry').addEventListener('click', function () {
        dynamicContent.innerHTML = `
        <div class="scorecard-container">
                <h2>Club: Black Mountain Country Club - Scorecard</h2>
                <h3>Course: East-North</h3>
                <h3>Tee Box: 65-Men</h3>
                <table>
                    <thead>
                        <tr> <th colspan="11">First Course</th> <th colspan="11">Second Course</th> </tr>
                        <tr> <th>Hole</th> <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th> <th>6</th> <th>7</th> <th>8</th> <th>9</th> <th>OUT</th> <th>10</th> <th>11</th> <th>12</th> <th>13</th> <th>14</th> <th>15</th> <th>16</th> <th>17</th> <th>18</th> <th>IN</th> <th>TOTAL</th> </tr>
                    </thead>
                    <tbody>
                        <!-- Tee Box / Yard -->
                        <tr class="gold"> <td class="yard">Gold</td>
							<td class="yard">403</td> <td class="yard">478</td> <td class="yard">155</td> <td class="yard">361</td> <td class="yard">372</td> <td class="yard">576</td> <td class="yard">409</td> <td class="yard">154</td> <td class="yard">411</td> <td class="yard">3319</td>
							<td class="yard">372</td> <td class="yard">154</td> <td class="yard">400</td> <td class="yard">532</td> <td class="yard">168</td> <td class="yard">341</td> <td class="yard">329</td> <td class="yard">323</td> <td class="yard">512</td> <td class="yard">3131</td>
                            <td class="yard">6450</td> </tr>
                        <tr class="blue"> <td class="yard">Blue</td>
							<td class="yard">403</td> <td class="yard">478</td> <td class="yard">155</td> <td class="yard">361</td> <td class="yard">372</td> <td class="yard">576</td> <td class="yard">409</td> <td class="yard">154</td> <td class="yard">411</td> <td class="yard">3319</td>
							<td class="yard">372</td> <td class="yard">154</td> <td class="yard">400</td> <td class="yard">532</td> <td class="yard">168</td> <td class="yard">341</td> <td class="yard">329</td> <td class="yard">323</td> <td class="yard">512</td> <td class="yard">3131</td>
                            <td class="yard">6450</td> </tr>
                        <tr class="white"> <td class="yard">White</td>
							<td class="yard">403</td> <td class="yard">478</td> <td class="yard">155</td> <td class="yard">361</td> <td class="yard">372</td> <td class="yard">576</td> <td class="yard">409</td> <td class="yard">154</td> <td class="yard">411</td> <td class="yard">3319</td>
							<td class="yard">372</td> <td class="yard">154</td> <td class="yard">400</td> <td class="yard">532</td> <td class="yard">168</td> <td class="yard">341</td> <td class="yard">329</td> <td class="yard">323</td> <td class="yard">512</td> <td class="yard">3131</td>
                            <td class="yard">6450</td> </tr>
                        <tr class="red"> <td class="yard">Red</td>
							<td class="yard">403</td> <td class="yard">478</td> <td class="yard">155</td> <td class="yard">361</td> <td class="yard">372</td> <td class="yard">576</td> <td class="yard">409</td> <td class="yard">154</td> <td class="yard">411</td> <td class="yard">3319</td>
							<td class="yard">372</td> <td class="yard">154</td> <td class="yard">400</td> <td class="yard">532</td> <td class="yard">168</td> <td class="yard">341</td> <td class="yard">329</td> <td class="yard">323</td> <td class="yard">512</td> <td class="yard">3131</td>
                            <td class="yard">6450</td> </tr>
                        <!-- Par and Index -->
                        <tr class="par"> <td class="par">Par</td>
							<td class="par">4</td> <td class="par">5</td> <td class="par">3</td> <td class="par">4</td> <td class="par">4</td> <td class="par">5</td> <td class="par">4</td> <td class="par">3</td> <td class="par">4</td> <td class="par">36</td>
							<td class="par">4</td> <td class="par">3</td> <td class="par">4</td> <td class="par">5</td> <td class="par">3</td> <td class="par">4</td> <td class="par">4</td> <td class="par">4</td> <td class="par">5</td> <td class="par">36</td>
                            <td id="totalPar">72</td> </tr>
                        <tr class="hdi"> <td class="hdi">Index</td>
							<td class="hdi">7</td> <td class="hdi">13</td> <td class="hdi">15</td> <td class="hdi">11</td> <td class="hdi">1</td> <td class="hdi">9</td> <td class="hdi">5</td> <td class="hdi">17</td> <td class="hdi">3</td> <td class="hdi">81</td>
							<td class="hdi">6</td> <td class="hdi">10</td> <td class="hdi">2</td> <td class="hdi">8</td> <td class="hdi">14</td> <td class="hdi">4</td> <td class="hdi">18</td> <td class="hdi">16</td> <td class="hdi">12</td> <td class="hdi">90</td>
                            <td id="totalHDI">171</td> </tr>
                        <!-- Player(s) input scores -->
                        <tr> <td>Score</td>
                            <!-- Front Nine -->
                            <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1">
                            <td id="totalScoreOut">0</td>
                            <!-- Back Nine -->
                            <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1"> <td> <input type="number" class="score-input" min="1">
                            <td id="totalScoreIn">0</td>
                            <td id="totalScore">0</td>
                        </tr>
                        <!-- Additional info (Putts Bunker Penalty etc.) -->
                        <tr class="put"> <td>Putts</td>
							<td>2</td> <td>2</td> <td>1</td> <td>2</td> <td>2</td> <td>2</td> <td>1</td> <td>2</td> <td>2</td> <td>16</td>
							<td>2</td> <td>1</td> <td>2</td> <td>2</td> <td>2</td> <td>1</td> <td>2</td> <td>2</td> <td>2</td> <td>16</td>
							<td>32</td> </tr>
                        <tr class="bnk"> <td>Bunker</td>
							<td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>3</td>
							<td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>0</td> <td>2</td>
							<td>5</td> </tr>
                        <tr class="pnt"> <td>Penalty</td>
							<td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>0</td> <td>0</td> <td>0</td> <td>1</td>
							<td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>2</td>
							<td>3</td> </tr>
                        <!-- Fairways -->
                        <tr class="fwy"> <td>Fairways</td>
                            <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td>
                            <td></td>
                            <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td> <td> <select name="fairways"> <option value="l">L</option> <option value="r">R</option> <option value="ft">FT</option> <option value="fs">FS</option> </select> </td>
                            <td colspan="2"></td>
                    </tbody>
                </table>
                <div class="button-container">
                    <button id="calculateTotalScore">Calculate Score</button>
                </div>
            </div>
         `;
        // Add event listener for the Calculate Score button
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
            if (userProfile.handicapArray.length > 0) {
                const sum = userProfile.handicapArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                userProfile.averageHandicap = sum / userProfile.handicapArray.length;
            }
        });
    });

    document.getElementById('calculateHandicap').addEventListener('click', function () {
        dynamicContent.innerHTML = `
            <img src="public/images/hi_card.png" class="handicapImage">
        `;
    });

    document.getElementById('logout').addEventListener('click', function () {
        window.location.href = "/";
    });

    document.getElementById('setting').addEventListener('click', function () {
        dynamicContent.innerHTML = `
            <div id="settingForm" class="auth-form">
                <h3>Register</h3>
                <form>
                    <div class="form-group">
                        <label for="register-name">Full Name:</label>
                        <input type="text" id="register-name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="user-avatar">Profile Picture:</label>
                        <input type="file" id="user-avatar" name="avatar" accept="image/*">
                    </div>
                    <div class="form-group">
                        <label for="register-email">Email:</label>
                        <input type="email" id="register-email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="setting-role">Roles:</label><br>
                        <input type="radio" id="golfer" name="role" value="golfer">
                        <label for="golfer">Golfer</label><br>
                        <input type="radio" id="associate" name="role" value="associate">
                        <label for="associate">Associate</label><br>
                    </div>
                    <button type="submit" class="btn btn-green">Confirm change</button>
                </form>
            </div>
        `;

        // Pre-fill form with existing user data
        document.querySelector('#register-name').value = userProfile.username;
        document.querySelector('#register-email').value = userProfile.email;
        // Set radio button based on current role
        const roleInput = document.querySelector(`input[value="${userProfile.role}"]`);
        if (roleInput) {
            roleInput.checked = true;
        }

        // Get the form element
        const settingForm = document.querySelector('#settingForm form');

        // Add submit event listener to the form
        settingForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get values from form inputs
            const newName = document.querySelector('#register-name').value;
            const newEmail = document.querySelector('#register-email').value;
            const roleInputs = document.querySelectorAll('input[name="role"]');
            let selectedRole = '';

            // Get selected role
            for (const radioButton of roleInputs) {
                if (radioButton.checked) {
                    selectedRole = radioButton.value;
                    break;
                }
            }

            // Capitalize first letter of role
            selectedRole = selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1);

            // Update userProfile object
            userProfile.username = newName;
            userProfile.email = newEmail;
            userProfile.role = selectedRole;
        });
    });
});