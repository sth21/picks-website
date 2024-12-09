document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fileForm");
    const fileInput = document.getElementById("fileInput");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!fileInput) {
            alert("Enter picks");
            return;
        }

        let total = 0;
        let correct = 0;

        const textContent = fileInput.value;

        const lines = textContent.split(/\r?\n/);

        lines.forEach((line) => {
            const terminator = line.charAt(line.length - 1);
        
            if (terminator === "✅") {
                correct++; total++;
            } else if (terminator === "❌") {
                total++;
            }
        });

        document.getElementById("correct").textContent = `Correct: ${correct}`;
        document.getElementById("incorrect").textContent = `Incorrect: ${total - correct}`;
        document.getElementById("total").textContent = `Total: ${total}`;
        document.getElementById("percentage").textContent = `Percentage: ${(correct / total).toFixed(2)}`;
    });
});