import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!url || !anonKey) {
  // Em ambiente de build/SSR, só loga no console; no browser pode ser útil para debug
  console.warn("Supabase não configurado: verifique as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY");
}

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

