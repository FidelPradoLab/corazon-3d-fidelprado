const guidedAssembly = {
  currentStep: 0,
  steps: [
    "base_ventricular",
    "pared_septal",
    "aurícula_derecha",
    "aurícula_izquierda",
    "válvula_mitral",
    "válvula_tricúspide",
    "arco_aórtico"
  ],
  start() {
    this.currentStep = 0;
    this.highlightStep();
  },
  highlightStep() {
    const part = this.steps[this.currentStep];
    console.log("🧠 Ensamblar:", part);
    // Aquí va la lógica para resaltar esa parte en el visor
  },
  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.highlightStep();
    } else {
      console.log("✅ Ensamblaje completado");
    }
  }
};