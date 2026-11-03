import { createElement } from 'react';
import { createMarkdown } from 'mdlib-pure';
import { toElements } from 'mdlib-pure/adapter';
import { mark } from 'mdlib-pure/mark';

// Un'istanza sola: mdlib-pure compila le regole alla creazione.
// HTML grezzo spento (predefinito): il corpo delle idee deriva da testo del web.
const md = createMarkdown({ plugins: [mark()] });

export function Markdown({ source, className = '' }: { source: string; className?: string }) {
  return <div className={`md ${className}`}>{toElements(md.toVNodes(source), createElement, 'react')}</div>;
}
