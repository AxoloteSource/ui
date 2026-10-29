import { ReactNode } from 'react';
/**
 * Convierte un nombre de icono de Lucide a kebab-case, el formato canónico de Lucide.
 *
 * Acepta tanto PascalCase (`MessageSquareWarning`) como kebab-case
 * (`message-square-warning`) para que los datos históricos sigan funcionando.
 */
export declare const normalizeIconName: (name?: string | null) => string;
/**
 * Resuelve un icono a partir de su nombre.
 *
 * - Los iconos conocidos salen del registro estático (sin costo extra).
 * - Cualquier otro icono válido de Lucide se carga bajo demanda con `DynamicIcon`,
 *   para que los nombres que llegan de la BD funcionen sin mantener una whitelist.
 * - Un nombre inválido muestra un icono de ayuda visible (nunca un punto invisible).
 * - Un icono vacío muestra un círculo neutro que conserva la alineación.
 */
export declare const resolveIcon: (name?: string | null, className?: string) => ReactNode;
