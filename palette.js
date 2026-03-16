(function () {
  const sharedColors = [
    "#FAEDCB",
    "#C9E4DE",
    "#C6DEF1",
    "#DBCDF0",
    "#F2C6DE",
    "#F7D9C4",
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const styles = getComputedStyle(document.body);
    const colors = [
      styles.getPropertyValue("--page-primary").trim(),
      styles.getPropertyValue("--page-secondary").trim(),
      ...sharedColors,
    ].filter(Boolean);

    const container = document.createElement("div");
    container.className = "palette-display";

    [...new Set(colors)].forEach((color) => {
      const swatch = document.createElement("span");
      swatch.style.background = color;
      swatch.title = color;
      container.appendChild(swatch);
    });

    document.body.prepend(container);
  });
})();
