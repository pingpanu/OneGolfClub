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