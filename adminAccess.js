const adminAccess = {
  isProfessional: false,
  
  toggleMode() {
    this.isProfessional = !this.isProfessional;
    document.body.classList.toggle("modoProfesional", this.isProfessional);

    const evento = new CustomEvent('modoCambiado', {
      detail: { profesional: this.isProfessional }
    });
    document.dispatchEvent(evento);
    console.log(this.isProfessional ? "🔐 Modo profesional activado" : "🎓 Modo estudiante activado");
  }
};