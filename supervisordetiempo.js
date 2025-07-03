const supervisorDeTiempo = {
  inicio: null,
  pausas: [],
  activo: true,
  tiempoInactivo: 0,
  maxInactividad: 300000, // 5 minutos

  iniciar() {
    this.inicio = Date.now();
    this.escucharActividad();
    console.log("⏱️ Monitoreo iniciado");
  },

  escucharActividad() {
    document.addEventListener("mousemove", this.reiniciarTimer.bind(this));
    document.addEventListener("touchstart", this.reiniciarTimer.bind(this));
    document.addEventListener("keydown", this.reiniciarTimer.bind(this));

    this.revisarInactividad();
  },

  reiniciarTimer() {
    if (!this.activo) {
      this.pausas.push({ pausa: Date.now() });
      this.activo = true;
      console.log("🟢 Actividad retomada");
    }
    this.tiempoInactivo = Date.now();
  },

  revisarInactividad() {
    setInterval(() => {
      if (Date.now() - this.tiempoInactivo > this.maxInactividad) {
        if (this.activo) {
          this.pausas.push({ inactivoDesde: this.tiempoInactivo });
          this.activo = false;
          console.log("🔴 Usuario inactivo");
        }
      }
    }, 60000); // Chequea cada 60 segundos
  }
};

window.addEventListener("DOMContentLoaded", () => supervisorDeTiempo.iniciar());