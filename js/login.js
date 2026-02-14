document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('robloxLogin');
    const msgDiv = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        const robloxUser = document.getElementById('robloxUser').value.trim();
        if(robloxUser.length < 3){
            msgDiv.textContent = "يرجى إدخال اسم مستخدم روبلوكس صحيح!";
            msgDiv.style.color = "#b22222";
            return;
        }
        // يمكن وضع هنا تحقق أكثر عبر API خارجية لاحقاً
        msgDiv.textContent = `مرحباً ${robloxUser} 👋، تم تسجيل الدخول مبدئياً!`;
        msgDiv.style.color = "#2667ff";
        loginForm.reset();
    });
});
