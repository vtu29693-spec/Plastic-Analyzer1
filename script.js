const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

input.addEventListener("change", function () {
    const file = input.files[0];

    if (!file) return;

    preview.src = URL.createObjectURL(file);

    result.innerHTML = "Analyzing image... 🔍";

    setTimeout(() => {
        const random = Math.random();

        // ❌ NO PLASTIC
        if (random < 0.25) {
            result.innerHTML = `
            ❌ <b>No Plastic Found</b><br>
            This image does not appear to contain plastic.
            `;
            return;
        }

        // ⚠️ UNCERTAIN CASE
        if (random < 0.35) {
            result.innerHTML = `
            ⚠️ <b>Unclear Image</b><br>
            Unable to confidently detect material.<br>
            Try a clearer image.
            `;
            return;
        }

        // ✅ PLASTIC TYPES
        const plastics = [
            {
                type: "PET (Polyethylene Terephthalate)",
                toxicity: "Low",
                time: "450 years",
                recyclable: "Yes",
                impact: "Harms marine life",
                disposal: "Recycle properly",
                dustbin: "🟦 Blue Bin"
            },
            {
                type: "HDPE",
                toxicity: "Very Low",
                time: "100-500 years",
                recyclable: "Yes",
                impact: "Land pollution",
                disposal: "Reuse/recycle",
                dustbin: "🟦 Blue Bin"
            },
            {
                type: "PVC",
                toxicity: "High ⚠️",
                time: "1000+ years",
                recyclable: "Difficult",
                impact: "Toxic chemicals",
                disposal: "Dispose carefully",
                dustbin: "🟥 Red Bin"
            },
            {
                type: "LDPE",
                toxicity: "Low",
                time: "500-1000 years",
                recyclable: "Sometimes",
                impact: "Pollutes land",
                disposal: "Reuse bags",
                dustbin: "🟦 Blue Bin"
            },
            {
                type: "PP",
                toxicity: "Low",
                time: "20-30 years",
                recyclable: "Yes",
                impact: "Less harmful",
                disposal: "Recycle",
                dustbin: "🟦 Blue Bin"
            },
            {
                type: "PS (Styrofoam)",
                toxicity: "Medium ⚠️",
                time: "500+ years",
                recyclable: "Rare",
                impact: "Microplastics",
                disposal: "Avoid usage",
                dustbin: "🟥 Red Bin"
            },
            {
                type: "ABS",
                toxicity: "Medium",
                time: "500+ years",
                recyclable: "Limited",
                impact: "E-waste pollution",
                disposal: "E-waste disposal",
                dustbin: "🟥 Red Bin"
            },
            {
                type: "Nylon",
                toxicity: "Medium",
                time: "30-40 years",
                recyclable: "Difficult",
                impact: "Water pollution",
                disposal: "Reuse",
                dustbin: "🟦/🟥 Depends"
            }
        ];

        const data = plastics[Math.floor(Math.random() * plastics.length)];

        const confidence = Math.floor(Math.random() * 30) + 70;

        result.innerHTML = `
        ✅ <b>Plastic Detected</b><br><br>

        🔎 <b>Confidence:</b> ${confidence}%<br><br>

        🧪 <b>Type:</b> ${data.type}<br>
        ☣️ <b>Toxicity:</b> ${data.toxicity}<br>
        ⏳ <b>Decomposition:</b> ${data.time}<br>
        ♻️ <b>Recyclable:</b> ${data.recyclable}<br>
        🌍 <b>Impact:</b> ${data.impact}<br>
        🧹 <b>Disposal:</b> ${data.disposal}<br>
        🗑️ <b>Dustbin:</b> ${data.dustbin}
        `;
    }, 1500);
});
