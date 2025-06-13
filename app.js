function generatePassword(length, useUpper, useLower, useNum, useSym) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "~!@#$%^&*()-_=+[]{}|;:,.<>/?";

    let allChars = "";
    if (useUpper) allChars += upper;
    if (useLower) allChars += lower;
    if (useNum) allChars += numbers;
    if (useSym) allChars += symbols;

    if (!allChars) return "Select at least one character type.";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return password;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value, 10);
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNum = document.getElementById('numbers').checked;
    const useSym = document.getElementById('symbols').checked;

    const password = generatePassword(length, useUpper, useLower, useNum, useSym);
    document.getElementById('result').textContent = password;
});