export interface Kit {
  id: string
  name: string
}

/**
 * Gets all available kits from the packages directory
 * Looks for directories ending with '-kit'
 * This is a server-side function and should only be used in server components or data fetching functions
 */
export async function getKits(): Promise<Kit[]> {
  const kits: Kit[] = [
    { id: 'dusk-ki', name: 'Dusk' },
    { id: 'mist-kit', name: 'Mist' },
  ]
  
  return kits
}

/**
 * Client-side version that doesn't rely on file system operations
 * In a real implementation, this would fetch the kits from an API endpoint
 */
export function getClientKits(): Kit[] {
  return [
    { id: 'dusk-kit', name: 'Dusk' },
    { id: 'mist-kit', name: "Mist" },
  ]
}

export type Kits = "dusk" | "mist";
