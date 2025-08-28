import { persistentAtom as atom } from "@nanostores/persistent";
import { type Prompt } from "@/components/block-preview/toolbar";

export const promptStore = atom<Prompt>('prompt', 'pnpm')
export const setPrompt = (prompt: Prompt) => promptStore.set(prompt)