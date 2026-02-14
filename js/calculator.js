document.addEventListener('DOMContentLoaded', function () {
    const taxForm = document.getElementById('taxForm');
    const resultDiv = document.getElementById('result');

    taxForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const robux = parseFloat(document.getElementById('robuxAmount').value);
        if (isNaN(robux) || robux <= 0) {
            resultDiv.textContent = "فضلاً أدخل قيمة صحيحة من الروبوكس.";
            return;
        }
        const afterTax = Math.floor(robux * 0.7);
        const approxUSD = (afterTax / 285).toFixed(2); // معدل تقريبي افتراضي (1 دولار = 285 روبوكس)
        resultDiv.innerHTML = `
            <p>ما سيصلك بعد خصم الضريبة: <strong>${afterTax} روبوكس</strong></p>
            <p>القيمة التقريبية بالدولار: <strong>$${approxUSD} دولار</strong></p>
        `;
    });
});
