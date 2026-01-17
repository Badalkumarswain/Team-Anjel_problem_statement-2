function setTab(btn) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    alert(btn.innerText + " data loaded");
}

function toggleActive(el) {
    alert(el.checked ? "Status: Active" : "Status: Inactive");
}

function searchAction(text) {
    if (text.length > 2) {
        console.log("Searching:", text);
    }
}
