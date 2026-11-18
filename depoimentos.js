import { readJson, writeJson } from '@/lib/storage';

const KEY = 'lions-depoimentos-v1';

export function loadDepoimentos() {
  const parsed = readJson(KEY, []);
  return Array.isArray(parsed) ? parsed : [];
}

export function saveDepoimentos(list) {
  writeJson(KEY, list);
}

export function createDepoimento({ nome, turma, mensagem }) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    nome: nome.trim(),
    turma: turma.trim(),
    mensagem: mensagem.trim(),
    createdAt: new Date().toISOString(),
  };
}
