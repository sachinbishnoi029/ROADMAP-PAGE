function opentab(Tabid) {
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((tabsapce) => {
        tabsapce.classList.add("d-none");
        tabsapce.classList.remove("d-block");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-block");
    opentabs.classList.remove("d-none");
}
function closetab(Tabid) {
    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach((tabsapce) => {
        tabsapce.classList.add("d-block");
        tabsapce.classList.remove("d-none");
    });
    const opentabs = document.getElementById(Tabid);
    opentabs.classList.add("d-none");
    opentabs.classList.remove("d-block");
}