document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fileForm");
    const fileInput = document.getElementById("fileInput");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const file = fileInput.files[0];

        if (!file) {
            alert("Select a file");
            return;
        }

        if (file.type !== "text/plain") {
            alert("Only .txt files allowed");
            return;
        }

        const reader = new FileReader();

        reader.readAsText(file);

        reader.onload = () => {
            let total = 0;
            let correct = 0;

            const textContent = reader.result;

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
        }
    });
});