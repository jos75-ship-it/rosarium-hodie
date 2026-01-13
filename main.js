(function () {
  const todayEl = document.getElementById("today");
  const iconEl = document.getElementById("icon");
  const nameEl = document.getElementById("name");
  const listEl = document.getElementById("list");
  const statusEl = document.getElementById("status");

  // Data pt-BR
  const d = new Date();
  try {
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    todayEl.textContent = fmt.format(d);
  } catch {
    todayEl.textContent = d.toLocaleDateString("pt-BR");
  }

  // 0=Domingo ... 6=Sábado
  const dow = d.getDay();

  // Tradicional (3 conjuntos):
  // Seg/Qui: Gozosos | Ter/Sex: Dolorosos | Qua/Sáb/Dom: Gloriosos
  const sets = {
    joyful: {
      icon: "✶", // estrela suave
      name: "Mistérios Gozosos",
      items: [
        "1) A Anunciação",
        "2) A Visitação",
        "3) O Nascimento de Nosso Senhor",
        "4) A Apresentação no Templo",
        "5) O Encontro no Templo",
      ],
    },
    sorrowful: {
      icon: "✢", // cruz/raios
      name: "Mistérios Dolorosos",
      items: [
        "1) A Agonia no Horto",
        "2) A Flagelação",
        "3) A Coroação de Espinhos",
        "4) O Caminho do Calvário",
        "5) A Crucifixão e Morte",
      ],
    },
    glorious: {
      icon: "✦", // estrela preenchida
      name: "Mistérios Gloriosos",
      items: [
        "1) A Ressurreição",
        "2) A Ascensão",
        "3) A Vinda do Espírito Santo",
        "4) A Assunção de Nossa Senhora",
        "5) A Coroação de Nossa Senhora",
      ],
    },
  };

  let chosen;
  if (dow === 1 || dow === 4) chosen = sets.joyful;        // seg, qui
  else if (dow === 2 || dow === 5) chosen = sets.sorrowful; // ter, sex
  else chosen = sets.glorious;                              // dom, qua, sáb

  iconEl.textContent = chosen.icon;
  nameEl.textContent = chosen.name;

  // Render list
  listEl.innerHTML = "";
  for (const line of chosen.items) {
    const p = document.createElement("p");
    p.className = "item";
    p.textContent = line;
    listEl.appendChild(p);
  }

  statusEl.textContent = "Atualiza automaticamente.";
})();
