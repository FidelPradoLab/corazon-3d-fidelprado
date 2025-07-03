let descriptionsVisible = false;

function toggleDescriptions() {
  descriptionsVisible = !descriptionsVisible;
  const event = new CustomEvent('toggleDescriptions', {
    detail: { visible: descriptionsVisible }
  });
  document.dispatchEvent(event);
  console.log("📖 Descripciones", descriptionsVisible ? "activadas" : "ocultas");
}