class Menu {
    constructor() {
        this.titulo = "";
        this.icones = [];
        this.submenus = [];
    }
}

class MenuBuilder {
    constructor() { this.menu = new Menu(); }
    setTitulo(t) { this.menu.titulo = t; return this; }
    addIcone(i) { this.menu.icones.push(i); return this; }
    addSubmenu(s) { this.menu.submenus.push(s); return this; }
    build() { return this.menu; }
}

const menuPrincipal = new MenuBuilder()
    .setTitulo("Arquivo")
    .addIcone("folder-icon")
    .addSubmenu("Salvar Como...")
    .build();