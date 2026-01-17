const barData = [2200, 1800, 2400, 2100, 1500, 2600, 2800];
const chart = document.getElementById("barChart");

function drawChart() {
    chart.innerHTML = "";
    barData.forEach(value => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = value / 20 + "px";
        bar.title = "Rs: " + value;
        chart.appendChild(bar);
    });
}

drawChart();

/* Tabs */
function filterData(type) {
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    alert(type.toUpperCase() + " data loaded");
}

/* Balance Add */
function addMoney() {
    let balance = document.getElementById("balance");
    balance.innerText = parseInt(balance.innerText) + 500;
}
