const totalMatch = document.getElementById("match");
const winrate = document.getElementById("winrate-now");
const winrateTarget = document.getElementById("winrate-end");
const btnSubmit = document.getElementById("buttonSubmit")
const result = document.getElementById("result")

btnSubmit.addEventListener("click", () => {
    const match = totalMatch.value;
    const winrateNow = winrate.value;
    const winrateEnd = winrateTarget.value;

    if(match <= 0 || winrateNow <= 0 || winrateEnd <= 0) {
        result.innerHTML = 
        `<p>Isi yang benar atuh</p>`;
        return;
    } 
    if (winrateEnd >= 100 || winrateNow >= 100) {
        result.innerHTML =
        `<p>Winrate mustahil 100%</p>`;
        return;
    } 
    if (winrateNow === winrateEnd) {
        result.innerHTML = 
        `<p>Target winrate sudah tercapai</p>`;
        return;
    } 
    if(winrateNow > winrateEnd) {
        result.innerHTML =
        `<p>Winrate tidak dapat dihitung!</p>`;
        return;
    } 
    if(match >= 10000 || match <= 0) {
        result.innerHTML = 
        `<p>Error. Balik ke dunia nyata!</p>`;
        return;
    }

    const winNow = Math.round((winrateNow/100) * match);
    const loseNow = match - winNow;
    const winStreak = Math.round((match * (winrateEnd - winrateNow)) / (100 - winrateEnd));

    result.innerHTML = 
    `<p>Total kemenangan saat ini: ${winNow}</p>
    <p>Total kekalahan saat ini: ${loseNow}</p>
    <p>Anda perlu ${winStreak} kali Win Streak</p>`;
});
