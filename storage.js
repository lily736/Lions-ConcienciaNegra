// Acesso seguro ao localStorage.
// Em alguns contextos (iframe em sandbox, modo privado, cookies de terceiros
// bloqueados) o navegador nega o acesso e lança SecurityError. Aqui a leitura
// e a escrita nunca quebram a página: caem para um armazenamento em memória.

const memory = new Map();

function getStore() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readStorage(key) {
  const store = getStore();
  if (store) {
    try {
      return store.getItem(key);
    } catch {
      // segue para a memória
    }
  }
  return memory.has(key) ? memory.get(key) : null;
}

export function writeStorage(key, value) {
  const store = getStore();
  if (store) {
    try {
      store.setItem(key, value);
      return true;
    } catch {
      // cota cheia ou acesso negado: segue para a memória
    }
  }
  memory.set(key, value);
  return false;
}

export function readJson(key, fallback) {
  const raw = readStorage(key);
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  return writeStorage(key, JSON.stringify(value));
}
