document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const loginResult = document.getElementById("loginResult");

    function showError(element, message) {
        element.style.display = "block";
        element.textContent = message;
    }

    function hideError(element) {
        element.style.display = "none";
    }

    function showSuccess(message) {
        loginResult.style.display = "block";
        loginResult.textContent = message;
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // 阻止表单默认提交行为，避免跳转到action指定的网址
        let valid = true;

        // 验证用户名
        if (usernameInput.value.length!== 6 && usernameInput.value.length!== 12) {
            showError(usernameError, "Username must be 6 or 12 digits.");
            valid = false;
        } else {
            hideError(usernameError);
        }

        // 验证密码
        if (passwordInput.value === "") {
            showError(passwordError, "Password cannot be empty.");
            valid = false;
        } else {
            const hasLetter = /[a-zA-Z]/.test(passwordInput.value);
            const hasNumber = /\d/.test(passwordInput.value);
            if (!hasLetter ||!hasNumber) {
                showError(passwordError, "Password must contain both letters and numbers");
                valid = false;
            } else {
                hideError(passwordError);
            }
        }

        if (valid) {
            // 登录验证通过后，使用window.location.href跳转到Main.html页面
            window.location.href = "Main.html";
            showSuccess("Login successful!");
        } else {
            // 如果验证不通过，隐藏登录成功提示
            hideError(loginResult);
        }
    });
});
