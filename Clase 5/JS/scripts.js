let inventario = [
    {
        "tipo": "Espada",
        "nombre": "Frostmourne",
        "stats": {"fuerza": 5, "peso": 6, "daño": 115, "elemento": "hielo", "velocidad": 1.5},
        "descripcion": "Espada perdida del Rey Lich, capaz de encerrar las almas de sus víctimas. Una leve niebla desciende desde la hoja, y te susurra cosas al oído..",
        "ataque": function(){
            console.log("Daño: " + this.daño);
        }
    },
    {
        "tipo": "Hacha",
        "nombre": "Redforge",
        "stats": { "fuerza": 9, "peso": 15, "daño": 325, "elemento": "fuego", "velocidad": 0.5},
        "descripcion": "Esta gigantezca hacha de guerra es muy pesada y debe ser equipada en ambas manos. Su nucleo brilla con un rojo llameante."
    },
    {
        "tipo": "Arco",
        "nombre": "Silverfang",
        "stats": { "destreza": 6, "peso": 4, "daño": 85, "elemento": "espiritual", "velocidad": 2.25 },
        "descripcion": "Arco usado por el héroe de los elfos. Da a su portador una velocidad y precisión divinas."
    }
]


console.log(inventario)
console.log(inventario[0].ataque)